const log = console.log

const iterable = {
    [Symbol.iterator]() {
        let i = 3;
        return {
            next() {
                return i === 0 ? {done : true} : { value : i--, done: false}
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
};

let iterator = iterable[Symbol.iterator]();
//log(iterator.next())
//log(iterator.next())
//log(iterator.next())
//log(iterator.next())

for (const a of iterable) log(a)
    


const arr2 = [1, 2, 3]
let iter2 = arr2[Symbol.iterator]()
log(iter2[Symbol.iterator]() === iter2)
iter2.next()
for (const a of iter2) log(a)

// DOM 객체도 iterable 함.
for (const a of document.querySelectorAll('*')) log(a)

const all = document.querySelectorAll('*')

console.clear()