const pi = 3.1415926535

//  parse()

const str = pi.toFixed(2)
console.log(typeof str)
//  위의 경우 string으로 나오며 2개 글자만 출력

const integer = parseInt(str)
const float = parseFloat(str)
//  위의 경우 둘 모두 typeof가 number로 출력, integer의 경우 3만 출력

//  MATH 객체

console.log(Math.abs(-12))
//  절댓값 12 반환

console.log(Math. min(2, 8))
//  min: 최솟값, max: 최댓값

console.log(Math.ceil(3.14))
//  ceil: 올림, floor: 내림, round: 반올림, 기본적으로 정수 단위에서 처리

console.log(Math.random)
//  난수 반환


