//closure => 고차함수..?
//외부 함수의 변수에 접근 할 수 있는 내부 함수

function outerFn() {
    let outerVar = 'outer';
    console.log(outerVar);
    
    function innerFn() {
        let innerVar = 'inner'
        console.log(innerVar);
    }
    return innerFn; //만약 return 값이 innerFn() 이면 innerFn() 이 실행됨.
}

outerFn()();
//outer
//inner
let innerFn = outerFn();
//outer
innerFn();
//inner

//커링 ==> 함수 하나가 n개의 인자를 받는 대신, n개의 함수를 만들어 각각 인자를 받게 하는 방법
function adder(x) {
    return function(y) {
        return x + y //내부함수는 x도 y도 사용 가능.
    }
}

let add3 = adder(3);
console.log(add3(15));
console.log(add3(10));

//클로저 모듈 패턴 : 변수를 스코프 안쪽에 가두어 함수 밖으로 노출 시키지 않는 방법.
function makeCounter() {
    let privateCounter = 0;

    return {
        increment: function() {
            privateCounter++;
        },
        decrement: function() {
            privateCounter--;
        },
        getValue: function() {
            return privateCounter;
        }
    }
}

let counter1 = makeCounter();
counter1.increment();
counter1.increment();
counter1.getValue();
console.log(counter1)