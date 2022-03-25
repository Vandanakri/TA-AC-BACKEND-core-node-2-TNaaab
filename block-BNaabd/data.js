var http = require('http');

var server = http.createServer(handleRequest)






server.listen(7000, () => {
  console.log('server listining on port 7k')
})
