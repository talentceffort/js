let arr = [1, 2, 3]
console.log( arr.toString() )

Array.prototype.toString = function() {
    return this.join('_')
}

// arr.toString = function() {
//     return this.join('_')
// }

console.log( arr.toString() )

console.log( arr.__proto__.toString.call(arr) )

console.log( arr.__proto__.__proto__.toString.call(arr) )

let obj = {
    a: 1,
    b: {
        c: 'c'
    },
    d: [5, 6, 7],
    e: function() {

    }
}

let obj = {
    a: 1,
    b: {
        c: 'c'
    },
    d: [5, 6, 7],
    e: function() {

    }
}

Object.prototype.toString = function() {
    let res = [];
    for(let key in this) {
        res.push(key + ": " + this[key].toString())
    }
    return '{' + res.join(', ') + '}'
}

Array.prototype.toString = function() {
    return '[' + this.join(', ') + ']'
}

console.log(obj.toString())