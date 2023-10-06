const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = numbers.map(number => {
    return number < 3
})
//  [true, true, false, false] 출력, 매개변수가 하나인 경우 소괄호 생략 가능

//  1. filter

const b = numbers.filter(number => {
    return number < 3
})
//  [1, 2] 출력. 위의 경우는 boolean의 배열로 나왔지만 이번에는 조건을 만족하는 item들의 배열이 나옴
//  원본 배열의 아이템 갯수와 다를 수 있음
//  하지만 map과 filter 모두 원본을 수정하지는 않음. numbers를 출력하면 그대로 출력.

//  코드 간략화
const c = numbers.map(number => number < 3)
const d = numbers.filter(number => number < 3)

//  2. find, findIndex

const e = fruits.find(fruit => {
    return /^B/.test(fruit)
})
console.log(e)
//  대문자 B로 시작하는(캐럿 기호) 문자데이터를 만족하는 첫번째 데이터를 출력한다 : Banana가 출력

const f = fruits.findIndex(fruit => {
    return /^C/.test(fruit)
})
console.log(f)
// Cherry의 Index를 출력 : 2

// 코드 간략화
const g = fruits.find(fruit => /^B/.test(fruit))
const h = fruits.find(fruit => /^C/.test(fruit))

// 3. includes

const i = numbers.includes(3) // 배열에 포함되어 있는지 확인 : true

//  ----- 원본이 수정되므로 주의할 메소드들 -----

//  4. push, unshift

numbers.push(5)
console.log(numbers)
// 배열 가장 뒤 쪽에 데이터를 삽입

numbers.unshift(0)
console.log(numbers)
//  배열 가장 앞 쪽에 데이터를 삽입

//  5. reverse

// numbers.reverse() : 원본 배열을 뒤집음

//  6. splice : 몇 번째 아이템을 지우거나 추가한다

numbers.splice(2, 1)
console.log(numbers)
// index, 지울 갯수

numbers.splice(2, 0, 9)
// index, 지우지 않고, 9를 그 자리에 추가한다

numbers.splice(2, 1, 99)
// index, 지우고, 99를 그 자리에 추가한다

fruits.splice(2, 0, 'Orange')



