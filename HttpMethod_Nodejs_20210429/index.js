const http = require('http');
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(function (request, response) {
    fs.readFile('./index.html', 'utf-8', readIndex);
    function readIndex(error, data) {
        console.log(request.method);
        console.log(request.url);
        response.end(data);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

