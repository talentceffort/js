var a = 1;
function outer() {
    console.log(a);

    function inner() {
        console.log(a)
        var a = 3
    }

    inner();

    console.log(a);
}

outer();
console.log(a);

var obj = {
    a: 1,
    b: function bb() {
        console.log(this)
    },
    c: function() {
        console.log(this.a)
    }
}

obj.b() // obj 출력.
obj.c() // 1 출력.

console.dir(obj.b)
console.dir(obj.c)