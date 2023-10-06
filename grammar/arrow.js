const double = function(x) {
    return x * 2
}
console.log('double: ', double(7))
const doubleArrow = x => x * 2

// With Curly Brackets
const doubleArrowX = x => { return x * 2 }

// Two Variables
const doubleArrowY = (x, y) => x * 2
console.log('doubleArrow: ', doubleArrow(7))

// 객체데이터는 소괄호로 한번 감싸기
const data = x => ({
    name: 'DH'
})