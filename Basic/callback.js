setInterval(function () {
    console.log('1초마다 실행.')
}, 1000)


let arr = [1, 2, 3, 4, 5];
let entries = []

arr.forEach(function(v, i) {
    entries.push([i ,v, this[i]])
}, [10, 20, 30, 40, 50])

console.log(entries)

Array.prototype.forEach = function(callback, thisArg) {
    let self = thisArg || this; //thisArg 값이 있을 경우 self 에 담고 없으면 this 를 담는다.
    for(let i = 0; i < this.length; i++) {
        callback.call(self, this[i], i, this) //self 를 this로 인식하게.
    }
}

var arr2 = [1, 2, 3, 4, 5]
var obj = {
    vals: [1, 2, 3],
    logValues: function(v, i) {
        if(this.vals) {
            console.log(this.vals, v, i)
        } else {
            console.log(this, v, i)
        }
    }
}

obj.logValues(1, 2)//메소드로 호출.
arr.forEach(obj.logValues) //콜백함수로 전달.