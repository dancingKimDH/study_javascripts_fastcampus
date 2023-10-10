//  Query String: 주소?속성=값&속성=값
//  https://www.omdbapi.com/?apikey=7035c60c&s=frozen 로 request
//  axios package를 사용: npm i axios를 일반모드로 개발의존모드 x

import axios from 'axios'

function fetchMovies() {
    axios
        .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
        .then(res => {
            console.log(res)
            const h1El = document.querySelector('h1')
            const imgEl = document.querySelector('img')
            h1El.textContent = res.data.Search[0].Title
            imgEl.src = res.data.Search[0].Poster
        })
}
//  https가 아니라 http로 하면 에러가 발생할 수 있음

fetchMovies()
