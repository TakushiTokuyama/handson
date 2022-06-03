// object
// 1つの物を表現するために複数の属性情報を持つ

var jump = {
    name:'ワンピース',
    page:5,
    count:0,
    '月間　売り上げ':1000,
    readCount(){
        return this.count++;
    },
    func:function(){
        function showName(){
            // thisの扱い
            console.log(this.name)
        }
        showName()
        // showName.call(this)
        let showPage = () => {
            console.log(this.page)
        }
        showPage()
    },
}

jump.func()
jump.readCount()
console.log(jump["月間　売り上げ"])

console.log('name' in jump)

// keyが数値の場合はsortされる
var numbers = {
    10:10,
    5:5,
    1:1
}

console.log(numbers)

// 参照
var book = jump
book.page = 10
console.log(book)


