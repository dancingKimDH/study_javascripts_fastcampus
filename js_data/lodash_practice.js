// lodash documentation 공부!

import _ from 'lodash'

const userA = [
    {userId: '1', name: 'DH'},
    {userId: '2', name: 'dH'}
]

const userB = [
    {userId: '1', name: 'DH'},
    {userId: '3', name: 'Kim'}
]

//  프론트엔드 작업 중 데이터 고유화에 활용
//  1. uniqBy, unionBy

const userC = userA.concat(userB)
console.log(userC)
console.log(_.uniqBy(userC, 'userId'))
//  userId를 기준으로 중복되는 부분들을 삭제

const userD = _.unionBy(userA, userB, 'userId')
//  userId를 고유값으로 하여 A, B를 병합


//  2. find

const users = [
    {userId: '1', name: 'DH'},
    {userId: '2', name: 'A'},
    {userId: '3', name: 'B'},
    {userId: '4', name: 'C'},
    {userId: '5', name: 'D'}
]

const foundUser = _.find(users, {name: "DH"})
const foundUserIndex = _.findIndex(users, {name: "DH"})
console.log(foundUser)
console.log(foundUserIndex)

//  3. remove

_.remove(users, {name: 'DH'})
console.log(users)