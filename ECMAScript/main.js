// ECMAScript 6
// const info = "Very important"; // 덮어씌우기 불가능

// 예외사항
// 배열과 객체는 참조형 자료이기 때문에,
// 밑에서 다시 작성할 경우
// 재선언을 하는 것이 아니라 참조값을
// 변경하는 것이기 때문에 예외사항으로
// 적용이 가능하다
/*
const student = {
    name: "david",
    age: 20
}
student.name = "Null";
console.log(student);
*/
/* Hoisting
    지역변수로 선언된 변수가 최상위 전역변수로
    끌어져 올라가는 것처럼 보이는 현상

    올라가는 현상이었다면 결과는 undefined가
    아니라 test여야 한다

    하지만 올라가는 것처럼 보이는 현상 때문에
    결과는 test가 아니다

    undefined도 자료형의 값이므로 오류 현상이긴
    하지만 값이 존재하는 것으로 취급할 수 있다
*/
// Hoisitng 방지를 위해 let이라는 변수 선언
// console.log(info);
// let info = "test";
/*
    let은 정상적으로 오류 상황을 Console로
    찍어주고 있다
    
    하지만 let으로 hoisting을 없애지 않는다

    let이 dead zone을 만들어서 hoisting의
    결과를 dead zone으로 설정해서 극복한 것
*/
/*
function test() {
    var local = "local";
}
console.log(local);
*/
/*
if (true) {
    let local1 = "local in block";
}
console.log(local1);
*/
/*
일반 함수의 코드 블록에서는 지역변수 scope가
유지되므로 구역 밖에서는 변수가 정의되지
않는다

하지만 일반 조건문이나 반복문 같은 코드 블록
안에서는 var로 선언된 지역변수는 hoisting으로
전역화된다
*/
// let으로 선언되면 hoisting이 극복되어
// 정상적인 scope를 가진다

// ECMAScript 5에서 극복하는 방법:
// 즉시실행함수를 사용하여 안쪽의 변수 값이
// 전역화되지 않도록 강제 캡슐화
// (let은 사용불가)
/*
var btns = document.querySelectorAll("button");

for (var i=0 ; i<btns.length; i++) {
    (function () {
        btns[i].addEventListener("click", function() {
            console.log(i);
        })
    })(i)
}
*/

// ECMAScript 6에는 let 사용
/*
let으로 hoisting을 막아 전역변수가 되지 않기
때문에 지역변수로의 i가 온전히 작동된다

따라서 각 i의 index 값은 해당 이벤트가 발생된
시점에서 i값으로 인식되어, 버튼 클릭 시
각 index의 값을 console로 반환한다
*/
let btns = document.querySelectorAll("button");

for (let i=0 ; i<btns.length; i++) {
    btns[i].addEventListener("click", function() {
        console.log(i+1);
    })
}

/*
반복문 코드 블록 안에 있는 변수 var가
지역변수임에도 불구하고 반복문이기 때문에
hoisting이 일어나서 i값이 반복문 안에서
반복이 끝난 후 사라지지 않고
마지막 카운트 3의 값이 전역변수로 등록되었다

반복이 일어나면서 i++로 인해서 i는 3이 된채
for (var i=0 ; i<btns.length; i++)을 만난다
하지만 조건이 맞지 않아서 원래는 무시되고
버려져야하는 i라는 값이 hoisting되면서
전역변수로 넘어가서 살아있게 된다
*/