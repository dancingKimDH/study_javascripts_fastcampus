import _ from 'lodash';
console.log(_.camelCase('Hello World'));


// IIFE, Immediately-Invoked Function Expression - 끝내면 semicolon 넣기

// const a = 7
// function double() {
//     console.log(a * 2)
// }
// double(); - semicolon 넣어야 함

(function () {
    console.log(a * 2)
})();