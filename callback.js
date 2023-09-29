// Callback: 함수의 인수로 사용되는 함수
// 특정 함수가 타 함수의 진행 후 실행될 수 있도록 보장

function timeout(callback) {
    setTimeout(() => {
        console.log('Hello!')
        callback()
    }, 3000)
}

timeout(() => {
    console.log('Done!')
})
