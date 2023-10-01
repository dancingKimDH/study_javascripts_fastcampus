function User(first, last) {
    this.firstName = first;
    this.lastName = last;
}

// 첫 문자를 대문자로, 파스칼케이스: 생성자로 사용되는 함수라는 것을 명시

// 각기 다른 데이터가 들어오기에 통합하기 어려움

User.prototype.getFullName = function() {
    return `${this.firstname} ${this.lastName}`
}

// 작업을 통일화해서 메모리를 효율화

const DH = new User('Donghyun', 'Kim');

// JS의 클래스

const amy = new User('Amy', 'Clarke');
const neo = new User('Neo', 'Smith');
console.log(DH);

// Object 객체 데이터로 출력
// literal 방식을 통해 객체데이터 생성

// DH와 amy, neo 모두 instance.

console.log(DH.getFullName());
console.log(amy.getFullName());
console.log(neo);

// 프로토타입을 통해 참조함: JS는 프로토타입을 기반으로 함