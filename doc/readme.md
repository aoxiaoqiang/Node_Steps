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


[Understand NodeJs](http://debuggable.com/posts/understanding-node-js:4bd98440-45e4-4a9a-8ef7-0f7ecbdd56cb)
