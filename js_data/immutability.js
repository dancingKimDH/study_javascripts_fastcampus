//  불변성 Immutability

//  원시데이터: String, Number, Boolean, undefined, null, etc
//  참조형 데이터: Object, Array, Function(CallBack)

let a = 1
let b = 4

//  첫번째 메모리에 1을, 두번째 메모리에 4를 저장
//  이떄 console.log(a === b)는 false로 출력하는데 그 이유는 컴퓨터가 바라보는 메모리 위치가 다르기 때문임
//  b = a : 이제 b에 대해서 컴퓨터는 a의 위치를 참조하며 그 결과 위의 같은 구문은 true를 반환함

a = 7

//  세번째 메모리에 7을 저장하고 이제 컴퓨터는 a에 대해서 첫번째가 아니라 세번째 메모리 위치를 바라봄
//  위에서 b = a 구문을 작성하였어도 이제 컴퓨터는 console.log(a === b)를 다시 false로 반환함

let c = 1

//  c는 네번째 메모리가 아니라 첫번째 메모리에 저장이 되는데 그 이유는 원시데이터인 1이 이미 첫번째 자리에 저장이 되고
//  이는 불변성을 띔 (기존의 데이터는 변하지 않는다, '값이 다르면 다르고 같으면 같다')
//  따라서 console.log(b === c)는 true를 반환

//  ----- 참조형 데이터는 위의 불변성과는 다름

let A = {k: 1}
let B = {k: 1}
console.log(A === B)

//  false가 반환, 즉 컴퓨터는 다른 메모리 위치를 바라보고 있음
//  새로운 값을 만들 때마다 새로운 위치에 저장함

A.k = 7
B = A

//  console.log(A === B)는 true를 반환

A.k = 2

//  컴퓨터가 B에 대해 A의 위치를 바라보고 있기 때문에 B의 값도 함께 바뀌어 버림

let C = B
console.log(A === C)

//  true 반환

A.k = 3

//  B와 C 모두 함께 바뀜

//  함께 바뀌는 것을 방지하기 위해 (얕은, 깊은) 복사를 활용
