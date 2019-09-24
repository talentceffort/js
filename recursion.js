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