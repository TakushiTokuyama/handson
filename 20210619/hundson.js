// promise 約束
// resolve 解決
// reject 拒否
// then 成功時
// catch 失敗時
// finally 必ず実行される

var sample = function (requestData) {
    return  new Promise((resolve, reject) => {
        if (requestData[0] === 1) {
            resolve(requestData[0]);
        } else {
            reject(requestData[0]);
        }
    });
}

var data = [1, 2, 3];

while (data.length > 0) {
    console.log(data);
    sample(data).then((success) => {
        console.log("resolve" + success);
    }).catch((error) => {
        console.log("reject" + error);
    }).finally((execute) => {
        console.log("finally");
    });
    data.shift();
}