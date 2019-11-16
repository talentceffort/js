// 1. 전역공간에서 => window, global
// 2. 함수내부에서 => window, global
// 3. 메소드 호출시 => 메소드 호출 주체.
// 4. callback에서
// 5. 생성자함수에서.


// 3번 예시.
var f = {
    b: function() {
        console.log(this)
    }
}
f.b() // a 를 나타냄.


var o = 10;
var obj = {
    o: 20,
    b : function() { // 메소드
        var self = this
        console.log(this.o);

        function c() { // 함수
            console.log(self.o);
        }
        c();   
    }
}
obj.b();

//////////////////////이해해보기
function a(x, y, z) {
    console.log(this, x, y, z)
}

var b = {
    c: "eee"
}

a.call(b, 1, 2, 3)
a.apply(b, [1, 2, 3])

var c = a.bind(b)
c(1, 2, 3)

var d = a.bind(b, 1, 2);
d(3)
//////////////////////////////

var callback = function() {
    console.dir(this)
}

var obj2 = {
    a: 1,
    b: function(cb) {
        cb.call(this)
    }
}

obj2.b(callback)

setTimeout(callback.bind(obj2), 100)