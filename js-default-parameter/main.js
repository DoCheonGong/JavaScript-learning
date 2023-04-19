/*
Default parameter:
인수를 넣지 않고 함수를 호출하였을 때를 대비하여
개발자가 default값을 미리 지정하는 코드

ECMAScript 6 이전에는 손수 코드를 작성하였으나
이 버전 이후 개선되어서 default parameter가
생겨서 간단하게 작성하도록 업데이트되었다
*/
/*
function info(name) {
    console.log(name);
}

info(); // undefined 오류 발생
*/
// 1. 조건문으로 값 처리
/*
function intro(name){
    // if (name == undefined) name = "Null";
    // name = (name == undefined) ? "Null" : name;
    name = name ? name : "Null";

    return "My name is " + name; */
    /*
    intro() 함수를 호출할 때 인수를 넣으면
    if문은 무시되고 바로 return을 만나서
    인수가 출력된 결과를 반환한다

    하지만 인수가 없다면 if문을 통과해서
    name에 default 값이 적용된 상태로
    밑에 있는 return문을 지나 default 값이
    출력된 결과가 반환된다
    */
// }
// console.log(intro());
// console.log(intro("Baldi"));

/*
단락회로 평가 (단축평가)

&& || (and, or)의 경우 논리연산자를 이용한
논리평가를 이용해서 단축적인 코드 작성을 하는 방법

A && B => A와 B가 모두 참이어야 참이다라는
논리평가인데 이것을 조건문으로 이용할 수 있다
즉 A가 참인지, 거짓인지에 따라서 && 뒤에 있는 B가
평가될 지, 안될 지가 결정된다
A가 거짓이면 바로 종료, A가 참이면 B가 실행된다

단점: 단락회로평가를 if문 혹은, 3항연산자로
대체할 경우, 논리적으로나 실용적으로는 문제가 없지만
협업에서 문제가 발생한다
이 때문에 가급적 3항연산자를 이용하고,
단락회로 평가는 지양하는 편이다 
*/
console.log("cat" && "dog");
console.log("cat" || "dog");
// cat 문자열은 문제가 없는 자료형이므로 true로 인식;
// 따라서 &&는 cat을 논리평가한 뒤에 바로 &&를 지나서
// dog를 실행하므로 dog가 console log에 남는다
/*
function intro(name){
    !name && (name = "Null");
    return "My name is " + name;
}
*/
// console.log(intro());
// console.log(intro("Baldi"));
/*
아래 함수는 () 안의 논리평가에서 거짓이 아닌 참을 추적한다
name이 존재하면 참으로 인식하기 때문에, 존재하는 name을
반환해서 사용하고, name이 없으면 거짓으로 인식해서
참을 찾기 위해서 다음 ||을 넘어 진행이 되는데 이 때
true가 default 값으로 적용되었기 때문에
name이 없으면 참으로 인식될 default 값을 적용한다
*/
/*
function intro(name){
    return "My name is " + (name || "Null");
}
console.log(intro());
console.log(intro("Baldi"));
*/

// 위는 ECMAScript 6 이전의 방식
// 아래는 ECMAScript 6 이후의 방식

// 매개변수자리에 default 값을 바로 지정한다
/*
function intro(name = "Null") {
    return "My name is " + name;
}
console.log(intro());
console.log(intro("Baldi"));
*/
// 매개변수가 여러 개인 경우 여러 개의
// default parameters를 지정할 수 있다
/*
let intro = function (name = "Null", state = "corrupted") {
    // return "My name is " + name + " and I'm " + state + ".";
    return `My name is ${name} and I'm ${state}`; // template literal
}
console.log(intro());
console.log(intro("Baldi", "okay"));
*/

let defaults = {name: "Null", state: "corrupted"};
let intro = function(opt = defaults) {
    /*
    opt는 intro({name : "Baldi", state : "okay"})에서
    {name : "Baldi", state : "okay"}이 객체를 의미한다;
    매개변수로 써준 값을 대체한다

    opt.name은 객체로 인수 값을 적은 내용에서
    key 값이 name인 값이 적용되는 것이고,
    opt.state는 위 객체에서 key 값이 state인 값이 적용된다
    */
    return `My name is ${opt.name} and I'm ${opt.state}`;
}
console.log(intro());
console.log(intro({name : "Baldi", state : "okay"}));