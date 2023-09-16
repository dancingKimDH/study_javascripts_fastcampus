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