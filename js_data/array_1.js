// ref to array mdn : properties and methods

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers[1]) // 2 출력

//  1. length

console.log(numbers.length) // 4

//  2. concat

console.log(numbers.concat(fruits)) // 두 배열이 함께 병합되어 순서대로 출력

//  3. forEach: 배열의 아이템 갯수만큼 특정 콜백함수를 실행

fruits.forEach(function(element, index, array) {
    console.log(element, index, array)
}) // element, index, 그리고 전체 array가 함께 순서대로 출력. 이때 function은 콜백함수 (function이 인수가 되어 사용)
   // element라는 매개변수 이름은 자유롭게 설정 가능 e.g. fruit, item, etc. 

//  4. map

const a = fruits.forEach(function (fruit, index) {
    console.log(`${fruit} - ${index}`)
})

const b = fruits.map(function(fruit, index) { 
    return console.log(`${fruit} - ${index}`)
})
console.log(b)
//  map은 forEach와 다르게 callback에서 반환된 새로운 '배열'을 반환해 줌

const c = fruits.map(function(fruit, index) {
    return {
        id: index,
        name: fruit
    }
}) 
console.log(c)
//  id와 name에 각각의 값이 할당된 새로운 배열을 return함

// forEach는 배열의 아이템 갯수만큼 callback을 실행 but 값을 반환하지는 않음
// map은 마찬가지로 실행하면서 새로운 배열을 생성하여 return


//  -------

//  화살표함수로 만들기

const d = fruits.forEach((fruit, index) => {
    console.log(`${fruit} - ${index}`)
})

const e = fruits.map((fruit, index) => {
    ({
        id: index,
        name: fruit
    })
})

//  이때 반환 값이 객체데이터이기 때문에 중괄호를 소괄호 안으로 넣어 주어야 실행