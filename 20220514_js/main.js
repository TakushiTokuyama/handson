// JavaSciriptは動的型付け言語なので変数の型はない。
// 基本型（プリミティブ型）が5種類存在する number,string,boolean,symbol,null 

// number　数値　リテラル=値そのもの
// 2進数
console.log(typeof(0b1010))
// 8進数
console.log(typeof(0o12))
// 16進数
console.log(typeof(0xA))

// string　文字列
console.log(typeof('string'))
// シングルクオーテーション
console.log('10')
// ダブルクオーテーション
console.log("10")

var num = 10

// テンプレート文字列
console.log(`${num}は${typeof(num)}`)
// エスケープ処理　「ある文脈の中で意味を持つ文字を、あるルールに基づいて無効化する」
console.log('He\'llo')
// 改行　文字リテラル　特別な意味を持つ文字
console.log('Hello\nworld')

// boolean 真偽値
// 厳密等価演算子
console.log(1 === 1)

// 等価演算子
console.log(1 == '1')

// null 値が無い
var hoge = null
console.log(hoge)

// undefind 値が設定されてない
var x
console.log(x)

// symbol シンボルを作成する
let obj = {firstname:3, secondname:2}
const key = Symbol("一意の値")

obj[key] = 1

console.log(obj)

// 参照型 array,object,function 3種類存在する

// array 配列
let array = [1,2,3]
console.log(typeof(array))
// 配列かどうかを調べる場合はArray.isArray()を使う
console.log(Array.isArray(array))

// アクセス方法
console.log(array[0])

// object 連想配列
let object = {a:1,b:2,c:3}
console.log(typeof(object))
console.log(Array.isArray(object))

// アクセス方法
console.log(object['a'])

// 分割代入
let {a,b,c} = object
console.log(a + b + c)

let {a:one, b:two, c:three} = object
console.log(`one:${one} two:${two} three:${three}`)

// camelcase snakecase

// function
function sum(d, e){
    return d + e
}

// arrow関数
const arrowSum =  (d, e) => {
    return d + e
}
console.log(arrowSum(1,2))

// 無名関数
const nonameSum = function(d,e){
    return d + e
}
console.log(nonameSum(1,2))

// 即時関数
const imdiExeSum = (function(d,e){
    return d + e
})(1,2)
console.log(imdiExeSum)

// 引数,　本体 Functionコンストラクター
const sum2 = new Function('d','e', 'return d + e')
console.log(sum2(1,2))

// 特徴 文字列で扱える
let param = 'd,e'
let formula = 'return d + e'
const sum3 = new Function(param, formula)
console.log(sum3(1,2))