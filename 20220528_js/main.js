// object
// 1つの物を表現するために複数の属性情報を持つ

var book = {
    name:'ジャンプ',
    price:300,
    '数':1,
    '月間　売り上げ':1000,
    pageCount(){
        console.log(this.数++)  
    },
    func:function(){
        function showName(){
            // thisの扱い
            console.log(this.name)
        }
        showName()
        // showName.call(this)
        let showPrice = () => {
            console.log(this.price)
        }
        showPrice()
    },
}

book.func()
book.pageCount()
console.log(book.数)
console.log(book["月間　売り上げ"])

console.log('name' in book)

for (item in book){
    console.log(item)
}

// keyが数値の場合はsortされる
var numbers = {
    10:10,
    5:5,
    1:1
}

console.log(numbers)

// 参照
var jump = book
jump.数++
console.log(book)