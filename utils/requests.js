import modelsMethods from '../assets/methods.json';

export const verbs = {
  get: 'get',
  post: 'post',
  put: 'put',
  patch: 'patch',
  options: 'options',
  head: 'head',
  del: 'delete',
}

export default api => modelsMethods.reduce((models, model) => {

  models[model.name] = model.methods.reduce((methods, method) => {
    methods[method.name] = (...args) => {
      const params = {
        method: verbs[method.http.verb],
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
      return api(params)
    }

    return methods
  }, {})

  models[model.plural] = models[model.name]
  models[model.plural.toLowerCase()] = models[model.name]
  models[model.name.toLowerCase()] = models[model.name]

  return models
}, {})
