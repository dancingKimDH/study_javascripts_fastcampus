// Hoisting
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// 함수가 아래에서 정의가 되어도 호출이 가능함
// 되도록 변수 - 호출 - 함수 순서로 작성하는 것이 편리

const a = 7
double()

// const double = function() {
//     console.log(a * 2)
// }

function double() {
    console.log(a * 2)
}