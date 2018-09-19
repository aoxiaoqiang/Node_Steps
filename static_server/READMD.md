## fs 模块

Flag	描述
r	以读取模式打开文件。如果文件不存在抛出异常。
r+	以读写模式打开文件。如果文件不存在抛出异常。
rs	以同步的方式读取文件。
rs+	以同步的方式读取和写入文件。
w	以写入模式打开文件，如果文件不存在则创建。
wx	类似 'w'，但是如果文件路径存在，则文件写入失败。
w+	以读写模式打开文件，如果文件不存在则创建。
wx+	类似 'w+'， 但是如果文件路径存在，则文件读写失败。
a	以追加模式打开文件，如果文件不存在则创建。
ax	类似 'a'， 但是如果文件路径存在，则文件追加失败。
a+	以读取追加模式打开文件，如果文件不存在则创建。
ax+	类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。

#### 读取文件
```
fs.readFile(path[, options], callback)
options = {
	encoding: 'utf8', //默认
	flag: 'r'	// 默认
}
callback = function(error, data) { }
```

```
fs.readFileSync(path[, options])
options = {
	encoding: null,	// 默认
	flag: 'r'	// 默认
}
```


#### 读取目录
```
fs.readdir(path[, options], callback)
options = {
	encoding: 'utf8' // 默认
}
callback = function(error, data) { }
```

```
fs.readdirSync(path[, options])
options = {
	encoding: 'utf8' // 默认
}
```

```
/**
 * 读取文件目录
 * @param  {String}   dir      文件目录
 * @param  {Function} callback 
 */
function readAllDir(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
    const pathname = path.join(dir, file)

    if (fs.statSync(pathname).isDirectory()) {
      readAllDir(pathname, callback)
    } else {
      callback(pathname)
    }
  })
}

let files = []
readAllDir('01-upload', (filename) => {
	if(filename.indexOf('node_modules') < 0) {
		files.push(filename)
	}
})
console.log(files)
```

## path 模块

连接路径
`path.join(string[, string] ...)`
`path.join('a', 'b', 'c') // => 'a/b/c'`

把一个路径或路径片段的序列解析为一个绝对路径, 用于将相对路径转为绝对路径
`path.resolve('/foo/bar', './baz') // => /foo/bar/baz`

返回 path 的扩展名，即从 path 的最后一部分中的最后一个 .（句号）字符到字符串结束
`path.extname('index.html') // => .html`

`path.parse()` 方法返回一个对象，对象的属性表示 path 的元素
path.parse('/home/user/dir/file.txt')
<!-- 
{ root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file' } 
-->
```
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
"  /    home/user/dir / file  .txt "
└──────┴──────────────┴──────┴─────┘
```

## 静态服务器构建

工具**[node-supervisor](https://github.com/petruisfan/node-supervisor)**
1. `npm install supervisor -g`
2. `supervisor server.js`
```
Examples:
  supervisor myapp.js
  supervisor myapp.coffee
  supervisor -w scripts -e myext -x myrunner myapp
  supervisor -w lib,server.js,config.js server.js
  supervisor -- server.js -h host -p port
```

Content-Type [node-mime](https://github.com/broofa/node-mime)
1. `npm install mime`
2. 获取文件对应的`Content-Type`
```
const mime = require('mime');

mime.getType('dir/text.txt');           // ⇨ 'text/plain'
mime.getExtension('text/plain');        // ⇨ 'txt'
```


#### 
1. http.createServer().listten(3000)
2. pathname = decodeURIComponent(path.join(__dirname, url.parse(req.url).pathname))
3. fs.statSync(pathname).isDirectory()
4. fs.readFile(string, 'binary', (err, callback) => {  })
5. mime.getType('test.txt')
6. supervisor index.js
7. 待优化项：缓存、Gzip、页面美化
