# node学习
<!-- 
0. 
1. http://www.xingxin.me/posts/58f0f987ab572f17b0297883
2. http://www.xingxin.e/posts/58e651fcab572f17b0297880
3. http://blog.csdn.net/out__lier/article/details/41909027
4. http://nodejs.cn/api/path.html#path_path_resolve_paths
 -->

学习步骤
1. Node基础模块
2. node应用
3. Express or koa Framework


### 基础入门
[Node入门](https://www.nodebeginner.org/index-zh-cn.html)

### 基础模块
1. **http**
```
http.createServer(onRequest).listen(8080, () => {
	console.log('Server in running at http://127.0.0.1:8080')
})
```
