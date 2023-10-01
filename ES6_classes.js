const hello = {
    name: 'Hello!',
    normal() {
        console.log(this.name)
    },
    // 위에처럼 해도 실행됨!
    arrow: () => {
        console.log(this.name)
    }
}

hello.normal()
hello.arrow()

// JS는 프로토타입기반 문법을 구현. 아래 구문을 더욱 간결하게 !
// 타 객체지향언어를 흉내내어 class개념을 도입

// function User(first, last) {
//     this.firstName = first
//     this.lastName = last
// }

// User.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`
// }

class User {
    // constructor: function(first, last)
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }
    getFullname() {
        return `${this.firstName} ${this.lastName}`
    }
}

const dh = new User('Donghyun', 'Kim')

console.log(dh)