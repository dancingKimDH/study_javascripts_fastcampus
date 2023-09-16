// 1. Arithmetic Operator

console.log(1 + 2);
console.log(1 - 2);

// 할당연산자: =
const a = 2;
a = a + 1;
// a += 1;
console.log(a);

// 2. Comparison Operator

const b = 1;
const c = 1;

// 일치연산자: ===
console.log(a === b);

function isEqua(x, y) {
    return x === y;
}

console.log(isEqual(1, 1)); // true
console.log(isEqual(2, '2')); // false

console.log(a <= b); // false

//  3. Logical Operator
const d = 1 === 1;
const e = 'AB' === 'AB';
const f = true
console.log('&&: ', d && e && f); // false : 세 개 모두가 true여야 true
console.log('||: ', d || e || f); // true : 어느 것 하나가 true이면 true
console.log('!: ', !d); // false : not

//  4. Ternary Operator (삼항연산자)

const g = 1 < 2; // 참
if (g) {
    console.log('참')
} else {
    console.log('거짓')
}

console.log(g ? '참' : '거짓') // 참: 물음표와 콜론으로 비교