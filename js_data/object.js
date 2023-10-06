//  1. Object - assign

const userAge = {
    name: 'DH',
    age: 26
}

const userEmail = {
    name: 'DH',
    email: 'hey@dh.com'
}

const target = Object.assign(userAge, userEmail)
console.log(target)

//  assign은 Object의 Prototype의 메소드로 만들어지지 않았기에, 전역객체인 Object에 직접 적용되어야 함
//  이러한 경우를 static method라고 함
//  source 객체를 target 객체로 복사해서 병합

//  이때 userAge앞에 빈 {} 객체를 만들면 이 객체가 target으로 설정. 아래의 함수가 false를 반환하게 됨

console.log(target === userAge) // true
//  userAge는 참조형 객체로 메모리에 있는 특정 주소를 참조함
//  target과 userAge는 같은 위치를 바라보고 있기 때문에 true가 반환됨

//  ref. 
const a = {k: 123}
const b = {k: 123}
console.log(a === b) // false : 데이터는 같아 보여도 다른 곳을 바라보고 있기 때문에 false가 반환

//  2. keys

const user = {
    name: 'DH',
    age: 26,
    email: 'hey@dh.com'
}

const keys = Object.keys(user)
console.log(keys)
//  key value들의 새로운 배열을 keys에 저장 : ['name', 'age', 'email'] 

const values = keys.map(key => user[key])
//  콜백함수를 실행(3번) 후 key에 해당하는 데이터들만의 배열을 values에 저장
