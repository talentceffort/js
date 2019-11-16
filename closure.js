// Closure? 선언 당시의 환경에 대한 정보를 담는 객체
// 선언 당시 => 즉, scope 와 관계
// 정리: 함수 내부에서 생성한 데이터와 그 유효범위로 인해 발생하는 특수한 현상 / 상태

//클로저의 용도
// 1. 접근 권한 제어
// 2. 지역변수 보호
// 3. 데이터 보존 및 활용

function setName(name) {
    return function() {
        return name;
    }
}

var sayMyName = setName('고무곰')
console.log( sayMyName() )