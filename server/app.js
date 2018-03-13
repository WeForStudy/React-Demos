const express = require('express')
const utils = require('./utils')
const bodyParser = require('body-parser')
const path = require('path')
var app = express()
const router = express.Router()


// app.use('*', function(req, res, next) {
    
//     // res.header("Content-Type", "application/jsoncharset=utf-8")
//     next()
// })
// app.all('*',function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
//   res.header('Access-Control-Allow-Headers', 'Content-Type')
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
// 　next()　
// })
function handler(req, res, next) {
    //设置跨域访问
    res.header("Access-Control-Allow-Origin", "http://localhost:1400")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
    res.header('Access-Control-Allow-Credentials', true)
    res.header("X-Powered-By",' 3.2.1')
    try {
      var conf = utils.readJSON(path.join(__dirname) + req.path + '.json')
    } catch (err) {
      return next()
    }
    const responseName = conf.responseName
    if (conf.isPaging && conf.datasource.indexOf(responseName) === 0) {
      let dataSource = utils.getValue(conf.response, conf.datasource)
      let page = req.query.page || req.body.page || 1
      utils.setValue(conf.response, conf.datasource, utils.paging(datasource, page, 2))
    }
    const response = conf.response[responseName]
    setTimeout(() => {
        res.send(response)
    }, conf.delay)
}
  app.use(bodyParser.json())
  app.all('*', handler)

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})

// module.exports = (app) => {
//   app.use(bodyParser.json())
//   app.all('*', handler)
// }
