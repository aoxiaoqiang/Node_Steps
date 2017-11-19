const formidable = require('formidable')
const fs = require('fs')
const path = require('path')

// index
function index(request, response) {
  const body = `<!DOCTYPE html>
	<html>

	<head>
	  <meta charset="utf-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1">
	  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
	  <meta name="description" content="">
	  <title>Index</title>

	  <body>
	  	<h3>文件上传</h3>
	    <form action="/upload" enctype="multipart/form-data" method="post">
			  <p><input type="file" name="upload" multiple="multiple"></p>
			  <p><input type="submit" value="确定上传" /></p>
			</form>
	  </body>

	</html>`

  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write(body)
  response.end()
}

// upload
function upload(request, response) {
  const form = new formidable.IncomingForm()
  form.parse(request, (error, field, files) => {
  	// 上传文件重命名
    fs.renameSync(files.upload.path, '/temp.jpg')

    // 返回输出上传结果
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write('Rectived: <br/><img src="/show" />')
    response.end()
  })
}

// show
function show(request, response) {
	// 文件读取
  fs.readFile('/temp.jpg', 'binary', (error, file) => {
    if (error) {
    	// 读取失败
      response.writeHead(500, { 'Content-Type': 'text/plain' })
      response.write(error + '\n')
      response.end()
    } else {
    	// 读取成功，输出到浏览器
      response.writeHead(200, { 'Content-Type': 'image/jpg' })
      response.write(file, 'binary')
      response.end()
    }
  })
}


exports.index = index
exports.upload = upload
exports.show = show