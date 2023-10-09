//  json : JavaScript Object Notation
//  key - value 한 쌍으로 데이터를 구성
import myData from '../myData.json'

console.log(myData)

const user = {
    name: 'DH',
    email: 'dh@dh.com',
    age: 25
}

console.log("user", user)

const str = JSON.stringify(user)
//  여기서의 JSON은 전역객체

console.log("str", str)
console.log(typeof str)
//  STRING 출력
