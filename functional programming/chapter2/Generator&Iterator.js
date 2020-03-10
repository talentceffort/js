// 제네레이터 & 이터레이터
// 제너레이터 : 이터레이터이자 이터러블을 생성하는 함수

log = console.log

function *gen() {
    yield 1; //일드
    if (false) yield 2;
    yield 3;

    return 100 //done 이 true 일 때 return 값 출력.
}

let iter = gen();
log(iter[Symbol.iterator]() === iter)
log(iter.next())
log(iter.next())
log(iter.next())
log(iter.next())

for (const a of gen()) log(a)

// 자바스크립트에서는 어떤 값이든 iterator 면 순회 가능.
// Generaotr 를 통해 어떠한 값이든 상태든 순회할 수 있게 만들 수 있음. 함수형 프로그래밍의 관점에서 중요
// 자바스트립트는 다형성이 굉장히 높다.

// #odds
function *odds(l) {
    for (let i = 0; i < l; i++) {
        if (i % 2) yield i
    }
}

// #개선된 odds
function *odds(l) {
    for (const a of limit(l, infinity(1))) {
        if (a % 2) yield a;
    }
}

function *infinity(i = 0) {
    while (true) yield i++
}

function *limit(l, iter) {
    for (const a of iter) {
        yield a;
        if (a == l) return
    }
}

let iter2 = odds(10)
log(iter2.next())
log(iter2.next())
log(iter2.next())
log(iter2.next())
log(iter2.next())

let iter3 = infinity();
log(iter3.next())
log(iter3.next())
log(iter3.next())
log(iter3.next())
log(iter3.next())
log(iter3.next())
log(iter3.next())
log(iter3.next())

let iter4 = limit(4, [1, 2, 3, 4, 5,6])
log(iter4.next())
log(iter4.next())
log(iter4.next())
log(iter4.next())
log(iter4.next())
log(iter4.next())

for (const a of odds(40)) log(a)