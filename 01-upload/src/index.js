const server = require('./server')
const route = require('./route')
const requestHandle = require('./requestHandle')

const handlers = {}
server.start(route.route, handlers)

handlers['/'] = requestHandle.index
handlers['/index'] = requestHandle.index
handlers['/upload'] = requestHandle.upload
handlers['/show'] = requestHandle.show