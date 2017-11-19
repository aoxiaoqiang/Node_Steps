const path = require('path')
const url = require('url')

const fs = require('fs')
const mime = require('mime')

function route(request, response) {
  let pathname = path.join(__dirname, url.parse(request.url).pathname)
  pathname = decodeURIComponent(pathname) // url解码，防止中文路径乱码

  fs.stat(pathname, (error, stats) => {
    if (error) {
      // 请求路径不存在
      response.writeHead(404, { 'Content-Type': 'text/plain' })
      response.end('404 not found')
    } else {
      if (stats.isDirectory()) {
        // 请求文件夹
        fs.readdir(pathname, (error, files) => {
          if (error) {
            // 文件读取错误
            response.writeHead(500, { 'Content-Type': 'text/plain' })
            response.end(JSON.stringify(error))
          } else {
            let htmlBody = ''
            htmlBody += '<ul>'
            files.forEach((item) => {
              if (item.indexOf('.') !== 0) { // 过滤以.开头的文件
                const link = path.join(url.parse(request.url).pathname, item)
                const extname = path.extname(item).slice(1)
                let svgClass = iconName(extname)
                if (fs.statSync(path.join(__dirname, link)).isDirectory()) {
                  svgClass = 'documents'
                }
                htmlBody += `<li>
                		<svg class="icon" aria-hidden="true">
                		  <use xlink:href="#${svgClass}"></use>
                		</svg>
                		<a href="${link}">${item}</a>
                	</li>`
              }
            })
            htmlBody += '</ul>'

            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.write(`<!DOCTYPE html>
							<html>

							<head>
							  <meta charset="utf-8">
							  <meta name="viewport" content="width=device-width, initial-scale=1">
							  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
							  <meta name="description" content="">
							  <title>静态资源</title>
							  <link rel="stylesheet" href="/asset/font/iconfont.css" />
							  <link rel="stylesheet" href="/asset/css/style.css" />

							  <script src="/asset/font/iconfont.js"></script>

							  <body>
							  	<h3 class="title-text">静态资源</h3>
							  	${htmlBody}
							  </body>

							</html>`)
            response.end('</ul>')
          }
        })
      } else {
        // 请求文件,文件读取
        fs.readFile(pathname, 'binary', (error, data) => {
          if (error) {
            response.writeHead(500, { 'Content-Type': 'text/plain' })
            response.write(JSON.stringify(error))
            response.end()
          } else {
            response.writeHead(200, { 'Content-Type': `${mime.getType(pathname)}` })
            response.write(data, 'binary')
            response.end()
          }
        })
      }
    }
  })

}


function iconName(extname) {
  let name = extname
  if (['json', 'md'].indexOf(extname) >= 0) {
    name = 'code'
  }

  if (['svg', 'ttf', 'woff', 'eot'].indexOf(extname) >= 0) {
    name = 'zip'
  }

  if (extname === '') {
    name = 'doc'
  }

  return name
}

exports.route = route