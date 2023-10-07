import random from '../getRandom'

const a = random();

if (a === 0) {
    console.log('a is 0')
} else if (a === 2) {
    console.log('a is 2')
} else {
    console.log('rest...')
}

switch (a) {
    case 0:
        console.log('a is 0')
        break
    case 2:
        console.log('a is 2')
        break
    default:
        console.log('rest...')
}


const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i += 1) {
    const li = document.createElement('li')
    li.textContent = `list-${i + 1}`
    if ((i + 1) % 2 === 0) {
        li.addEventListener('click', function () {
            console.log(li.textContent)
        })
    }
    ulEl.appendChild(li)
}