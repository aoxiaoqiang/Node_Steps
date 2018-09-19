## Node入门

### 学习目标
1. 做一个基础的图片文件上传
2. 了解node模块之间引用

### 项目运行
```
cd 01-upload	// 进入项目目录
npm i 		// 依赖安装
cd src 		// 进入到源码目录
node index.js 	// 启动服务
```

## Node入门
[参考地址](https://www.nodebeginner.org/index-zh-cn.html#javascript-and-nodejs)

1. 服务器创建
http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('Hello World')
	res.end()
})

module 

http
http.createServer

url
url.parse(request.url).pathname
url.parse(request.url).query

querystring
querystring(string)['key']


```
                               url.parse(string).query
                                           |
           url.parse(string).pathname      |
                       |                   |
                       |                   |
                     ------ -------------------
http://localhost:8888/start?foo=bar&hello=world
                                ---       -----
                                 |          |
                                 |          |
              querystring(string)["foo"]    |
                                            |
                         querystring(string)["hello"]
```


2. formidable模块使用
[参考文档](https://npm.taobao.org/package/formidable)

```
<form action="/upload" enctype="multipart/form-data" method="post">
  <input type="file" name="upload" multiple="multiple">
  <input type="submit" value="Upload file" />
</form>
```

```
const formidable = require('formidable')
const form = new formidable.IncomingForm()
for.parse(request, (error, filed, files) => {
  // fs.renameSync(files.upload.path, "/tmp/test.png")
})
```

```
{ 
  fields: { title: '' },
  files: { 
    upload: 
      File {
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        size: 10174,
        path: '/var/folders/7t/rm1_mnbj0p380nmgwgxs5c7r0000gn/T/upload_d79d0620b64b4a4bd83ee24bbeb438da',
        name: 'chrome.png',
        type: 'image/png',
        hash: null,
        lastModifiedDate: 2017-11-19T07:55:14.127Z,
        _writeStream: [Object] 
      }
  }
}
```