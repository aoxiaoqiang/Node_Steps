const http = require('http');
const router = require('./router');

const hostname = '127.0.0.1';
const port = 3000;

// 创建Server, 添加路由处理
const server = http.createServer(router);
server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});