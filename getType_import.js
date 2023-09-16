// 1. TYPE

import getType from './getType_export'

console.log(typeof 'Hello World!');
console.log(typeof 123);

// boolean type
console.log(typeof true);

// undefined type
console.log(typeof undefined);

// object type
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

console.log(getType(false));

console.log(getType([]));
console.log(getType({}));