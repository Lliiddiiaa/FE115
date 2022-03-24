const http = require('http');

const port = '3000',
    host = '127.0.0.1';

http.createServer(function(request,response) {

    response.statusCode = 200,
    response.setHeader('Content-Type', 'text/plain; charset=utf-8;');
    response.edd('server is running');


}).listen(port,host, function() {
    console.log('Server is running at http://' + host + ' : ' + port);
});