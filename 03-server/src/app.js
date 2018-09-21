// express 创建 web server
var express = require('express');
var app = express();

// 静态服务中间件
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});