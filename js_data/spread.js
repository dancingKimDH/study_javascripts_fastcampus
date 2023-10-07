//  전개연산자 Spread

const fruits = ['Apple', 'Banana', 'Cherry']
console.log(...fruits)
// console.log('Apple', 'Banana', 'Cherry') 와 동일하게 출력

function toObject(a, b, c) {
    return {
        a: a,
        b: b,
        c: c
    }
}

console.log(toObject(...fruits))
//  a: Apple b: Banana c: Cherry로 출력
//  각각의 fruits가 a, b, c의 인수로 삽입되어 들어감
//  이때 c 앞에 전개연산자...를 추가해주면 데이터의 갯수가 인수의 갯수를 초과해도 c에 동시에 배열로 들어감(rest parameter)

//  속성과 변수의 이름이 같은 위의 경우는 아래와 같이 변경 가능

const toObject_simple = (a, b, ...c) => ({a, b, c})