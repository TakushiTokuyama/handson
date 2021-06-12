const fs = require('fs');

// 非同期
fs.readFile('./sample.txt', (error, txt) => {
    if (error) {
        console.log(error);
    } else {
        console.log(txt.toString());
    }
});

// 同期
try {
    var txt1 = fs.readFileSync('./sample.txt');
    console.log(txt1.toString());
} catch (err) {
    console.log(err.message);
}

// promise
function exe(num) {
    return new Promise(function (resolve, reject) {
        if (num > 3) {
            resolve('成功');
        } else {
            reject('失敗');
        }
    });
}

exe(2).then(function (result) {
    console.log(result);
}, function (err) {
    console.log(err);
}).then(function (result) {
    console.log(result);
}, function (err) {
    console.log(err);
})