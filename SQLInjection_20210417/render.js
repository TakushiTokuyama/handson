var ejs = require("ejs");
var fs = require('fs');

// index
var index = function () {
    return ejs.render(fs.readFileSync('view/index.ejs', 'utf-8'), { message: "ログイン画面" });
}

// 成功ページ
var success = function (rows) {
    return ejs.render(fs.readFileSync('view/result.ejs', 'utf-8'), { id: rows[0]["Id"], password: rows[0]["Password"], message: "ログイン成功" });
}

// 失敗ページ
var failer = function () {
    return ejs.render(fs.readFileSync('view/index.ejs', 'utf-8'), { message: "ログイン失敗" });
}

// error
var error = function () {
    return ejs.render(fs.readFileSync('view/index.ejs', 'utf-8'), { message: "未入力です" });
}

// セミコロンあり
// var semikoron = function () {
//     return ejs.render(fs.readFileSync('view/index.ejs', 'utf-8'), { message: "「;」は入力できません" });
// }

// exports
exports.index = index;
exports.success = success;
exports.failer = failer;
exports.error = error;
// exports.semikoron = semikoron;
