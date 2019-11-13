//Hoisting

console.log(a())
console.log(b())
console.log(c())

function a() {
    return 'a'
}

var b = function bb() {
    return 'bb';
}

var c = function() {
    return 'c';
}

