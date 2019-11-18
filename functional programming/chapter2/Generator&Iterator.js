// 제네레이터 & 이터레이터
// 제너레이터 : 이터레이터이자 이터러블을 생성하는 함수

log = console.log

function *gen() {
    yield 1; //일드
    if(false) yield 2;
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
