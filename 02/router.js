const url = require('url');
const routes = require('./routesHandle.js')

function router(req, res) {
  const { pathname } = url.parse(req.url);
  // console.log(pathname);
  if (typeof routes[pathname] === 'function') {
    routes[pathname](req, res);
  } else {
    res.statusCode = 404;
    res.write('404 Page not found');
    res.end();
  }
}

module.exports = router;