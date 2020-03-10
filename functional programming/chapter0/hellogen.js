// Symbol.iterator 사용
const createInfinityByIter = () => {
  let i = 0
  return {
    [Symbol.iterator] () {
      // console.log(this)
      return this
    },
    next() {
      return { value: i += 1 }
    }
  }
}

for (const n of createInfinityByIter()) {
  if (n > 5) break
  // console.log(n) // 1 2 3 4 5
}

// Generator 사용
function* createInfinityByGenerator() {
  let i = 0;
  while(true) { yield i += 1 }
}

for (const n of createInfinityByGenerator()) {
  if (n > 5) break
  // console.log(n) // 1 2 3 4 5
}

// 제너레이터는 이터러블(iterable)이면서 동시에 이터레이터(iterator)인 객체
// 제너레이터 함수는 function* 키워드로 선언한다. 그리고 하나 이상의 yield 문을 포함한다.
function* counter() {
  console.log('First Call')
  yield 1
  console.log('Second Call')
  yield 2
  console.log('Third Call')
}

// const gen = counter()

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// 제너레이터 함수 정의
function* counter() {
  for (const v of [1, 2, 3]) yield v
  // => yield* [1, 2, 3]; 와 같다.
}

// 제너레이터 함수를 호출하면 제너레이터를 반환한다.
// let generatorObj = counter()

// console.log(counter)
// console.log(generatorObj)

// console.log(generatorObj[Symbol.iterator]() === generatorObj)

// console.log(generatorObj.next()) // {value: 1, done: false}
// console.log(generatorObj.next()) // {value: 2, done: false}
// console.log(generatorObj.next()) // {value: 3, done: false}
// console.log(generatorObj.next()) // {value: undefined, done: true}

function* gen(n) {
  let res;
  // res = yield n;    // n: 0 ⟸ gen 함수에 전달한 인수

  console.log('res', res); // res: 1 ⟸ 두번째 next 호출 시 전달한 데이터
  res = yield res;

  console.log('res', res); // res: 2 ⟸ 세번째 next 호출 시 전달한 데이터
  res = yield res;

  console.log('res', res); // res: 3 ⟸ 네번째 next 호출 시 전달한 데이터
  return res;
}
const generatorObj = gen(0);

console.log(generatorObj.next());  // 제너레이터 함수 시작
console.log(generatorObj.next(1)); // 제너레이터 객체에 1 전달
console.log(generatorObj.next(2)); // 제너레이터 객체에 2 전달
// console.log(generatorObj.next(3)); // 제너레이터 객체에 3 전달
