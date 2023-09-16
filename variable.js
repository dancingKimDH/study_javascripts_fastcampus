// 1. Variable Scope - var, let, const

function scope() {
    if (true) {
        const a = 123
    }
    console.log(a) // Referrence Error 변수가 정의되지 않았음 : Block 밖에 있기에 인식되지 않음
}

function scope() {
    if (true) {
        console.log(a) // Undefined
        const b = 123
    }
     
}

// 1. var은 함수범위 안에서 유효범위를 가짐. 사용하지 않을 것을 권장(메모리 누수 우려)