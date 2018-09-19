const url = require('url');
const routes = {};
// request.write(chunk[, encoding][, callback])

// 首页
routes['/home'] = (req, res) => {
  const { pathname, query } = url.parse(req.url);
  const data = {
    name: '接口test数据',
    path: pathname,
    query
  };
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(data));
  res.end();
}
routes['/'] = routes['/home'];

// 关于
routes['/about'] = (req, res) => {
  const { pathname } = url.parse(req.url);
  res.setHeader('Content-Type', 'text/plain');
  res.end('关于');
}

module.exports = routes;