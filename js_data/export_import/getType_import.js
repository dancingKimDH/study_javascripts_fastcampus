// 1. TYPE

import gettYpe from './getType_export'
// default import

import {getType, user as User} from './getType_export'
// default가 아닌 경우 import하는 함수를 중괄호로 감싸야 함
// import하면서 이름을 다르게 해서 가져올 수 있음
import * as R from './getRandom_export'

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

console.log(R)