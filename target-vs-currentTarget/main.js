// 기존 함수
var plus = function(num1, num2) {
    return num1 + num2;
}
console.log(plus(2, 3));

// ECMAScript 6의 새로운 함수 선언 방법:
// 화살표 함수 (Arrow function)
let plus1 = (num1, num2)=>{
    return num1 + num2;
}
console.log(plus1(2, 3));
/*
코드 블록 안쪽에 실행되는 코드가 한 줄이면
{}를 생략할 수 있다
또, 생략 시 자동으로 연산된 값을 반환하기
때문에 return을 작성할 필요가 없다
만약 매개변수가 한 개라면 괄호도 생략할 수
있지만 거의 쓰이지 않는다
*/
let plus2 = (num1, num2) => num1 + num2;
console.log(plus2(2, 3));

let green = document.querySelector(".green");
let yellow = document.querySelector(".yellow");
green.addEventListener("click", (e) => {
    console.log("currentTarget :", e.currentTarget);
    console.log("Target :", e.target);
})
/*
녹색 영역을 클릭하면 두 요소 (target, currentTarget)
모두 녹색 div 반환

하지만 노란색을 클릭하면 target은 노란색을,
currentTarget은 녹색을 반환

currentTarget: EventListener가 달린 요소,
이벤트 문에서 이벤트가 연결된 요소를 지칭
Target: 실질적인 이벤트가 발생하고 있는 요소,
현재 화면 상에서 이벤트가 발생한 요소 지칭
*/