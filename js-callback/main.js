/*
어떤 코드를 바로 실행하지 않고 일정 시간 딜레이한 후에 실행해야 하는 경우가 있다
이럴 때 setTimeout이라는 내장함수를 쓴다

첫 번째 인수는 callback 함수, 두 번째 인수는 시간 (milliseconds)
*/

// *** setTimeout(() => console.log("Timeout - 2 seconds"), 2000);
// setTimeout(() => callback 함수, time);

function test(callback, delay) {
    setTimeout(() => {
        callback();
    }, delay)
}

// test라는 함수는 두 가지의 인수를 받아서 setTimeout을 호출하는 함수

// *** test(() => { console.log("Callback")}, 1000);
/*
동기식 방식과 비동기식 방식

동기식 방식: 직렬형, A 작업이 끝나야 B 작업을 처리할 수 있다;
대략적으로 처리되는 일의 시작하는 시간과 끝나는 시간을 짐작할 수 있다

비동기식 방식: 병렬형으로 작업에 참여하는 주체인 만큼 동시에 작업을
시작할 수 있다
이 방법은 어떤 주체가 처리를 마칠 지를 가늠할 수 없기 때문에
일의 시작과 끝을 짐작할 수 없다

따라서 반드시 A 작업이 마치고 B 작업이 실행되어야 하는 경우
무조건 동기식의 방법으로 처리를 해야한다
*/
/* ***
console.log("Start"); // 순서1 (JS)

test(() => {
    console.log("Callback1"); // 순서6. setTimeout -> Callback1 (Web API)
}, 0); // 순서2. test 함수 호출 -> setTimeout 구문이 web api에 전달 (JS)
test(() => {
    console.log("Callback2"); // 순서7. setTimeout -> Callback2 (Web API)
}, 0); // 순서3. test 함수 호출 -> setTimeout 구문이 web api에 전달 (JS)
test(() => {
    console.log("Callback3"); // 순서8. setTimeout -> Callback3 (Web API)
}, 0); // 순서4. test 함수 호출 -> setTimeout 구문이 web api에 전달 (JS)

console.log("End"); // 순서5 (JS)
*** */
/*
위의 코드가 JavaScript 엔진에서만 작동하는 작업이라면
동기적으로 실행되어, Start부터 End까지 순차적으로 진행된다

setTimeout을 호출하는 함수인 test 함수를 작업하기 때문에
Web API와 분담하는 작업이 되므로 비동기적으로 작동할 수 밖에 없다
*/

console.log("Start");
test(2000, () => {
    console.log("Callback1");
    test(2000, () => {
        console.log("Callback2");
        test(2000, () => {
            console.log("Callback3");
            console.log("End");
        })
    })
})

/*
callback 함수: 함수가 종료되는 시점에 다시 함수를 호출해서 동기적으로
실행할 수 있게 하는 방법

단점: 코드가 난잡하고, 보기 불편해서 유지보수성이 떨어지고 쓰기도 불편하다

하지만 그럼에도 불구하고 사용하지만 복잡한 코드에서는 다른 방법을 차용하고,
단순히 다음으로 연결될 동기적인 상황에서는 애용한다

동기적 작동방식 1단계: callback 함수, 2단계: promise, 3단계: async await
*/