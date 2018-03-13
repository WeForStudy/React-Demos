export const transform = (url,obj) => {
  let reurl = url + '?'
  let keys = Object.keys(obj)
  keys.forEach((key) => {
      reurl += key + '=' + encodeURIComponent(obj[key]) + '&'
  })
  reurl = reurl.substring(0,reurl.length-1)
  return reurl
}
