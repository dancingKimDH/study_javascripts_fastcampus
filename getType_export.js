// 1. getType with export and import

export default function getType(data) {
    
    return Object.prototype.toString.call(data).slice(8, -1)
}