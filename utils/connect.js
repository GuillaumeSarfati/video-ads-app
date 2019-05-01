import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import modelsMethods from '../assets/methods.json';
import modelsRequests from './requests';

import api, {
  createAction,
  createApiAction,
  generateApiAction,
} from '../utils/api';

const requests = modelsRequests(api);

export const models = modelsMethods.reduce((models, model) => {

  models[model.name] = model.methods.reduce((methods, method) => {

    const action = generateApiAction(model.name + '_' + method.name);
    const effect = createApiAction(action);

    methods[method.name] = (...args) => {

      return effect(requests[model.name][method.name](...args))
    }

    methods[method.name].DEFINE = action.DEFINE
    methods[method.name].PENDING = action.PENDING
    methods[method.name].FULFILLED = action.FULFILLED
    methods[method.name].REJECTED = action.REJECTED

    return methods
  }, {})


  models[model.name].set = createAction(model.name + '_SET');
  models[model.name].update = createAction(model.name + '_UPDATE');
  models[model.name].clear = createAction(model.name + '_CLEAR');

  models[model.plural] = models[model.name]
  models[model.plural.toLowerCase()] = models[model.name]
  models[model.name.toLowerCase()] = models[model.name]

  return models
}, {})


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
