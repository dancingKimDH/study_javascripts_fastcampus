// this
// Normal 함수에서 호출 위치에 따라 this 정의
// Arrow 함수에서는 자신이 선언된 함수 범위에서 정의

const dh = {
    name: 'DH',
    normal: function () {
        console.log(this.name)
    },
    arrow: () => {
        console.log(this.name)
    }
}

dh.normal();
// 호출한 곳이 dh이므로 dh에서 선언된 name을 사용함

dh.arrow();
// 자신이 선언된 범위에서 name이 정의되지 않았으므로 name을 찾을 수 없음: undefined

const amy = {
    name: 'Amy',
    normal: dh.normal,

    arrow: dh.arrow
}

amy.normal()
// 마찬가지로 name을 찾아서 사용
amy.arrow()


//  ----- 

function User(name) {
    this.name = name
}

User.prototype.normal = function(){
    console.log(this.name)
}
User.prototype.arrow = function(){
    console.log(this.name)
}

const hello = new User('Hello')
hello.normal()
// name Hello가 할당되어 잘 출력

hello.arrow()
// 함수가 선언된 영역에서 name이 할당되지 않았으므로 참조할 수 없음

//  ------


const timer = {
    name: 'Hello!!',
    timeout: function() {
        setTimeout(function() {
            console.log(this.name)
            // setTimeout에서 콜백되는 함수
            // 이 일반 함수는 setTimeOut의 내부 로직으로 실행되고 있음
            // 따라서 undefined가 출력
            // setTimeout(() => {
            //     console.log(this.name)
            // }, 2000)
            // 위와 같이 화살표함수를 사용해야 출력됨: timer라는 범위 내에서 참조
        }, 2000)
    }
}
timer.timeout()
