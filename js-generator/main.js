/*
일반 함수는 하나의 값 또는 0개의 값을 반환한다

하지만 generator를 사용하면 여러 개의 값을
필요에 따라서 하나씩 반환(yield)할 수 있다

즉, 원하는 시점에서 순차적으로, 동기적으로
호출하면서 반환하는게 가능하다

generator를 사용하는 환경은
대규모 프로젝트이다

generator 함수는 generator 객체를 생성한다
결과값이 { value: "test1", done: false}의
형태로 나타난다

이 결과값의 객체를 "iterable object"라고 하며
기존의 객체와 조금 다르다

next()는 generator의 주요 method
next()로 generator를 호출하면 가장 가까이에 있는
yield를 만날 때까지 실행하다가 yield를 만나면
실행을 멈추고 산출하고자하는 값을 반환한다
{ value: "test1", done: false} - yield로 불러온
함수의 value와 함수실행 여부 도출

value: 산출값, 해당 함수의 결과값
done: 함수의 코드가 실행되었는지의 여부

결과적으로 generator는 함수의 동기적 호출이
주요 목적이다 (hoisting으로부터 자유)
*/
function test1() {
    return "test1";
}
function test2() {
    return "test2";
}
function test3() {
    return "test3";
}

// function *generator 
function* generator() {
    yield test1();
    yield test2();
    yield test3();
}
// 보통 function 뒤에 *를 붙인다

const result = generator();

const a = result.next();
console.log(a); // 객체로만 반환
// { value: "test1", done: false}

const b = result.next();
console.log(b);
const c = result.next();
console.log(c);
const d = result.next();
console.log(d); // hoisting 불가