//  개발자도구에서 Application - Local Storage에서 확인 가능
//  set, remove, getItem

const user = {
    name: "DH",
    age: 25,
    email: "dh@dh.com"
}

// localStorage.setItem('user', user)
//  --- object Object로 Value가 저장되기에 문자 데이터로 저장해야 함!

localStorage.setItem('user', JSON.stringify(user))
console.log(JSON.parse(localStorage.getItem('user')))
//  문자데이터를 원래 객체데이터로 다시 변환해 줌

// localStorage.removeItem('user')
//  --- console에서 출력된 이후 remove 됨

//  localStroage 정보는 새로고침 등을 하기 전에는 반영구적으로 남아 있음
//  수정하기

const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)

localStorage.setItem('user', JSON.stringify(obj))
//  갱신 완료

//  lodash로 관리하기: lowdb




