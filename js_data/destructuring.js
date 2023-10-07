//  구조분해할당 Destructuring Assignment
//  비구조화할당

const user = {
    name: "DH",
    age: 25,
    email: "dh@dh.com"
}

const {name, age, email, address = "Korea"} = user;
//  user.email
//  const Name = name으로 변수 이름을 새롭게 지정도 가능
//  중괄호 안에서 name: Name으로도 변수 이름 변경 가능

console.log(`사용자의 이름은 ${name}입니다.`);
console.log(user.name);
console.log(address);

const fruits = ["Apple", "Banana"];
const [a, b] = fruits;
console.log(a, b);
//  Apple Banana가 출력

//  const [, b] = fruits
//  console.log(b)로 하면 Banana만 출력 가능