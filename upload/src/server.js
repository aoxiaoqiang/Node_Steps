const http = require('http')
const url = require('url')

const config = {
  host: '127.0.0.1',
  port: 1377
}

// 服务启动
function start(route, handlers) {
  const server = http.createServer((reqest, response) => {
  	const pathname = url.parse(reqest.url).pathname

  	route(pathname, handlers, reqest, response)

  	// response.writeHead(200, { 'Content-Type': 'text/plain' })
  	// response.write(pathname)
  	// response.end()
  })

  // 端口号监听
  server.listen(config, () => {
    console.log(`The server is running at http://${config.host}:${config.port}.`)
  })

  // 错误处理
  server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
  })
}

exports.start = start