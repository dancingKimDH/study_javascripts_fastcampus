// mdn 사이트에서 다양한 객체들과 연관 함수들 확인 가능

const result = 'Hello World!'.indexOf('World')
console.log(result)

// String은 전역객체!

const str = '01 23'
console.log(str.length)

console.log(str.indexOf('Hey') !== -1)
console.log(str.slice(0, 3))
console.log(str.replace('01', 'Replaced'))


const line = 'abc@gmail.com'
console.log(str.match(/.+(?=@)/)[0])
// 정규표현식과 배열을 활용하여 abc만 출력

const sentence = '    Hello world    '
console.log(sentence.trim())

