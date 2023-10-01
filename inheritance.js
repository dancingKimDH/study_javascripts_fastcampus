class Vehicle {
    constructor(name, wheel) {
        this.name = name
        this.wheel = wheel
    }
}

const myVehicle = new Vehicle('운송수단', '2')
console.log(myVehicle)

class Bicycle extends Vehicle {
    constructor(name, wheel) {
        super(name, wheel)
        // Super가 있는 곳에서 Vehicle이 실행됨
        // constructor에서 받아서 super로 넘기고 이는 곧 Vehicle로 
    }
}

const myBicycle = new Bicycle('삼천리', 2)
const daughterBicycle = new Bicycle('세발', 3)
console.log(myBicycle)
console.log(daughterBicycle)

class Car extends Vehicle {
    constructor(name, wheel, license){
        super(name, wheel)
        // 추가적인 부분만 아래와 같이 구현
        this.license = license
    }
}

const myCar = new Car('벤츠', 4, true)
const daughterCar = new Car('포르쉐', 4, false)
console.log(myCar)
console.log(daughterCar)