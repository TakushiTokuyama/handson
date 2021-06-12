execute01();

// 文字の数
// length,countは使ってはいけない縛り。
function execute01() {
    // 標準入力
    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    var lines = [];
    var reader = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    reader.on('line', (line) => {
        lines.push(line);
    });

    reader.on('close', () => {
        console.log(strLength(lines[0]));
    });
}

// 文字列の長さを調べる
function strLength(str) {
    str.split('').forEach(value => countUp());
    var count1 = countUp()
    return count1;
}

// 呼び出されるとインクリメント
function counter() {
    var count = 0;
    return function () {
        return count++;
    }
}

// クロージャ
var countUp = counter();