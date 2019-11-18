// 이터러블/이터레이터 프로토콜
// - 이터러블 : 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값. arr, map, set 은 이터러블이다...
// - 이터레이터 : { value, done } 객체를 리턴하는 next() 를 가진 값.
// - 이터러블/이터레이터 프로토콜 : 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약
const log = console.log

const iterable = {
    [Symbol.iterator]() {
        let i = 3;
        return {
            next() {
                return i === 0 ? {done : true} : { value : i--, done: false}
            },
            [Symbol.iterator]() {
                return this;
            }
        }
    }
};

let iterator = iterable[Symbol.iterator]();
log(iterator.next())
log(iterator.next())
log(iterator.next())
log(iterator.next())

for (const a of iterable) log(a)

const arr = [1, 2, 3]
const map = new Map([['a', 1], ['b', 2], ['c', 3]])
const set = new Set([1, 2, 3])
// 전개 연산자
const a = [1, 2]
log(...a, ...[3, 4])

//a[Symbol.iterator] = null
log(...a, ...arr, ...map, ...set)