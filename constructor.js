const hello = {
    firstName: 'DH',
    lastName: 'Kim',
    getFullName: function () {
        return `$(this.firstName) $(this.lastName)`
    }
}
console.log(hello.getFullName)

