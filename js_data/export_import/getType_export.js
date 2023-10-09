// 1. getType with export and import

//  기본 통로로 데이터가 빠져나감: default 따라서 function의 이름이getType 없어도 동작
//  임의로 gettYpe으로 import해도 동작
//  default는 한번만 가능. 여러 개를 내보내는 경우 이름을 지정할 것

export default function (data) {
    
    return Object.prototype.toString.call(data).slice(8, -1)
}

export function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1)
}

export const user = {
    name: "DH"
}