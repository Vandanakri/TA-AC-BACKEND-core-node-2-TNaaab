var http = require('http');
var fas = require('fas');
var server = http.createServer(handleRequest)

function handleRequest(res,req) {
  res.setHeader('Content-Type', 'text/plain')
  fs.createReadStream('./readme.txt').pipe(res);
}
server.listen(3000 ,()=> {
  console.log('server listening on  port 3k')
})

