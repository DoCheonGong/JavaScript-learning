let btnPlus = document.querySelector(".btnPlus");
let btnMinus = document.querySelector(".btnMinus");
let text = document.querySelector("h1");
let hello = document.querySelector("h2");
let num = 0;

btnPlus.addEventListener("click", function (e) {
    e.preventDefault();
    num += 2;
    text.innerText = num;
})
btnMinus.addEventListener("click", function (e) {
    e.preventDefault();
    num -= 2;
    text.innerText = num;
})

// 문자열 안에 변수를 삽입하는 방법
let name = "Null";
// console.log("Hello, " + name + ".");

// ECMAScript 6: Template literals (strings)
// `과 ${}을 사용해서 문자열 안에 변수 삽입
// 문자를 감쌀 때, 문자열로 인식하도록 할 때
// 사용하는 방법:
// 1. '', "" - 두 가지는 구분을 하지 않는다
// 2. ECMAScript 6에서 추가된 ``이 있다
hello.innerText = `Hello, ${name}.`;

let btnLeft = document.querySelector(".btnLeft");
let btnRight = document.querySelector(".btnRight");
let box = document.querySelector("#box");
let num1 = 0;
let deg = 30;

btnLeft.addEventListener("click", function(e) {
    e.preventDefault();
    num1--;
    box.style.transform = `rotate(${num1 * deg}deg)`;
})
btnRight.addEventListener("click", function(e) {
    e.preventDefault();
    num1++;
    box.style.transform = `rotate(${num1 * deg}deg)`;
})