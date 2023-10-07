import _ from 'lodash'
//  얕은 복사(Shallow Copy), 깊은 복사(Deep Copy)

const user = {
    name: 'DH',
    age: 25,
    emails: ['dh@dh.com']
}

//  const copyUser = user
//  user와 함께 copyUser의 age도 함께 바뀜
//  함께 바뀌는 것을 방지하기 위해서 아래와 같이 copy 기능을 활용

//  얕은 복사: 전개연산자 or Object.assign

//  const copyUser = {...user}

const copyUser = Object.assign({}, user)

//  user의 값들을 복사하여 {} 메모리 공간에 할당

user.age = 20

console.log('user', user) // 22
console.log('copyUser', copyUser) // 25 : 기존 user의 값이 copyUser에 복사되어 할당되어 있음

//  -----

user.emails.push('hehe@dh.com')

//  copyUser에도 위의 내용이 push됨

//  깊은 복사 ----- lodash의 도움을 받아서

//  깊은 복사를 자바스크립트로 구현하는 데에는 한게가 존재. Lodash를 활용
//  npm install lodash / npm run dev

const secondCopy = _.cloneDeep(user)

console.log(secondCopy)
console.log(user.emails === secondCopy.emails)

//  ----- recursively copys : 재귀적으로 (반복하여) 복제

let objects = [{'a' : 1}, {'b' : 2}];
let deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0])
//  returns false
//  객체데이터까지 복제하여 새로운 메모리에 할당하였으므로 false가 반환된다

//  정리
//  1. 객체, 배열을 복사할 때에는 내부의 또다른 참조데이터가 없을 경우 얕은 복사를
//  2. 참조 데이터가 있는 경우에는 (위의 이메일 처럼) 깊은 복사를 고려