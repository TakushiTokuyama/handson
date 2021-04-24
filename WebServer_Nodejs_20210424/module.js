// ハンズオン①
var hundson01 = function () {

    // httpモジュール
    const http = require('http');

    // port番号
    const port = 3000;
    // hostname
    const hostname = '127.0.0.1'

    // サーバーを建てる
    var server = http.createServer(function (request, response) {
        // requestURLの確認
        console.log(request.url);
        console.log(request.headers);
        // requestが正常に終了したかの確認
        console.log(response.statusCode);
        // 表示
        response.end('hello');

    });
    // portとipを設定
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}

// ハンズオン②
var hundson02 = function () {
    // httpモジュール
    const http = require('http');
    var fs = require('fs');

    // port番号
    const port = 3000;
    // hostname
    const hostname = '127.0.0.1'

    // サーバーを建てる
    var server = http.createServer(function (request, response) {
        // File読込
        fs.readFile('./cat.png',
            function (err, data) {
                // statusとcontentTypeを指定
                response.writeHead(200, { 'Content-Type': 'image/png' });
                // 送信後、終了
                response.end(data);
            }
        );
    })

    // portとipを設定
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}

exports.hundson01 = hundson01;
exports.hundson02 = hundson02;