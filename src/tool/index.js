export const transform = (url,obj) => {
  let reurl = url + '?'
  let keys = Object.keys(obj)
  keys.forEach((key) => {
      reurl += key + '=' + encodeURIComponent(obj[key]) + '&'
  })
  reurl = reurl.substring(0,reurl.length-1)
  return reurl
}


function bind(fn, context) {
  let _args = Array.prototype.slice(arguments, 2)
  return function() {
    var innerArgs = Array.prototype.slice.call(arguments)
    let finalArgs = _args.concat(innerArgs)
    return fn.apply(context, finalArgs)
  }
}