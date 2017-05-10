const routes = require('./routes/index')
const express = require('express');
const app = express();

routes(app);
const server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log(' 应用实例，访问地址为 http://%s:%s', host, port)
})
