const http = require('http')

const host = '127.0.0.1'
const port = 3000

function start(route) {
  const server = http.createServer((request, response) => {
    // 路由处理
    route(request, response)
  })

  // server端口监听
  server.listen(port, () => {
    console.log(`The server is running at http://${host}:${port}`)
  })
}

exports.start = start
