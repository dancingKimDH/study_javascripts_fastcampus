// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// 시간 단위는 milisecond

const timer = setTimeout(function() {
    console.log('Hello!')
}, 3000)

setTimeout(() => {
    console.log('World')
}, 3000)

// clearTimeout(): 설정된 Timeout 함수 종료
const h1E1 = document.querySelector('h1')
h1E1.addEventListener('click', () => {clearTimeout(timer)})

// setInterval(함수, 시간) : 시간 간격마다 함수 실행

const timerInterval = setTimeout(function() {
    console.log('Hello!')
}, 3000)

// clearInterval()로 종료
