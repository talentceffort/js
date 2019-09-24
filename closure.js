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

function getElementByClassName(className) {
    function recursion(className, parentElemnt) {
        //parentElement 의 자식 중 className이 있는가?
        // 있으면 해당 엘리먼트롤 found에 넣는다.
    
        // 없으면 해당 엘리먼트의 자식 (children) 찾는다 ->
        // recursion(className, parentElement[i])
    }
    recursion(className, parentElemnt);
}

//재귀의 장점 : 재귀로 표현하기에 자연스러울 경우 가독성이 좋음.
//재귀의 단점 : 성능이 매우 안좋음.

//prototype의 의미 => 원형 객체.

console.dir(document.body)