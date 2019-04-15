import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import modelsJSON from 'utils/models.json';

import api, {
  createAction,
  createApiAction,
  generateApiAction
} from 'utils/api';

export const models = modelsJSON.reduce((models, model) => {
  models[model.name] = model.methods.reduce((methods, method) => {

    const action = generateApiAction(model.name + '_' + method.name);
    const effect = createApiAction(action);

    methods[method.name] = (...args) => {
      const params = {
        method: method.http.verb,
        url: method.http.path,
      }

      method.accepts.forEach((accept, index) => {
        if (args[index] && accept.http && accept.http.source === 'path') {
          params.url = params.url.replace(`:${accept.arg}`, args[index])
        }
        else if (args[index] && method.http.verb === 'get') {
          params.params = args[index]
        }
        else if (args[index]) {
          params.data = args[index]
        }
      })
      return effect(api(params))
    }
    methods[method.name].DEFINE = action.DEFINE
    methods[method.name].PENDING = action.PENDING
    methods[method.name].FULFILLED = action.FULFILLED
    methods[method.name].REJECTED = action.REJECTED
    return methods
  }, {})
  return models
}, {})

export default (
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    options,
) => connect(
  mapStateToProps,
  bindedMapDispatchToProps(mapDispatchToProps, models),
  mergeProps,
  options,
);

const bindedMapDispatchToProps = (mapDispatchToProps, models) => {
  if (typeof mapDispatchToProps !== 'function') return mapDispatchToProps;
  return (dispatch, props) => {
    const propsToBind = mapDispatchToProps(dispatch, props, models);
    return Object.keys(propsToBind).reduce((acc, propsName) => {
      if (!propsToBind[propsName]) {
        console.error('Error action is undefined', propsName, propsToBind);
        return acc;
      }
      acc[propsName] = bindActionCreators(propsToBind[propsName], dispatch);
      return acc;
    }, {});
  };
};
