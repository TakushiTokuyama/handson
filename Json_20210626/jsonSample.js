const fs = require('fs');
let jsonFile = fs.readFileSync('./sample.json');

// jsonからobjectに変換
let obj = JSON.parse(jsonFile)

// 扱えるデータ出力
console.log(obj);

// objectからjsonに変換
let json = JSON.stringify(obj, null, 4)

var data = { id: 1, value: 1 };

// json追記
fs.appendFileSync('./sample2.json', JSON.stringify(data) + "\n");

// 読込
let jsonFile2 = fs.readFileSync('./sample2.json', "utf8");

let arrayData = jsonFile2.split('\n');

// 結果
var result = JSON.parse(arrayData[0]);