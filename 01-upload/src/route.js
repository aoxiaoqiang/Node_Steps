// 路由处理
function route(path, handlers, request, response) {
	if (typeof handlers[path] === 'function') {
		handlers[path](request, response)
	} else {
		response.writeHead(404, { 'Content-Type': 'text/plain' })
		response.write(`404 not found`)
		response.end()
	}
}

exports.route = route