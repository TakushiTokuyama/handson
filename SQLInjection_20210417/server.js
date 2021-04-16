const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

var app = require("./app.js");

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        app.index(res);
    } else if (req.url === '/result.ejs') {
        app.result(req, res);
    }
});

var start = function () {
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}

exports.start = start;