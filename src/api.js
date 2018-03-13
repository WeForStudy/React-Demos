export default (config => {
  return Object.keys(config).reduce((copy, name) => {
    copy[name] = config[name]
    return copy
  }, {})
})({
  'getQuestion': '/api/question'
})