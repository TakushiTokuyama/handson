const http = require('http');
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 3000;

const indexhtml = fs.readFileSync('./index.html', 'utf-8');
const sendjs = fs.readFileSync('./send.js', 'utf-8');

const server = http.createServer(function (request, response) {
    switch (request.url) {
        case "/":
            response.end(indexhtml);
            break;
        case "/?get=getValue":
            response.end(indexhtml);
            break;
        case "/user":
            response.end(indexhtml);
            break;
        case "/send.js":
            response.end(sendjs);
            break;
        case "/delete":
            response.end(indexhtml);
            break;
        case "/put":
            response.end(indexhtml);
            break;
        default:
            break;
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});