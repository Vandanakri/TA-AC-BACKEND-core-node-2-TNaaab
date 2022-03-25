var http = require('http');
var fas = require('fas');
var server = http.createServer(handleRequest)

function handleRequest(res,req) {
  if(req.method === 'POST' && req.url === '/') {
    res.write('Welcome to node.js')
    var store = '';
    req.on('data', (chunk) => {
      store += chunk;
    });
    req.on('end', () => {
      console.log(store)
    })
  }
}
server.listen(3456,()=> {
  console.log('server listening on  port 3456')
})



