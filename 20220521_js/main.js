// 巻き上げとは？
// 宣言した変数が先頭で宣言したと解釈されること

// No.1 undefined
// console.log(var_num)

// var var_num = 0


// No.2
// console.log(let_num)

// let let_num = 0


// No.3
// var name = 'a'

// function hello() {
//     var name = 'b'
//     console.log(name)
// }

// hello()


// No.4
// var name = 'a'

// function hello() {
//     console.log(name)
//     var name = 'b'
//     console.log(name)
// }

// hello()


// No.5 scope
// let num = 0

// function sum(num) {
//     if(num === 0){
//         let num = 1
//         console.log(num)
//     }
//     console.log(num)
// }

// 郵便番号で住所検索

var zipcode = '7830060'

fetch('https://zipcloud.ibsnet.co.jp/api/search' + '?zipcode=7830060')
	.then(res => res.text())
	.then(body => console.log(body));
