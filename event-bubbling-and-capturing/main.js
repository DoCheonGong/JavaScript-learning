let divs = document.querySelectorAll("div");

divs.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        console.log(e.currentTarget.className);
        e.stopPropagation(); // bubbling 방지
    })
})
// one.addEventListener("click", (e) => {
//     console.log(e.currentTarget.className);
// })
// two.addEventListener("click", (e) => {
//     console.log(e.currentTarget.className);
// })
// three.addEventListener("click", (e) => {
//     console.log(e.currentTarget.className);
// })
/*
Event bubbling:
three를 클릭하면 세 가지 요소가 한 번에 호출된다

브라우저는 특정 화면 요소에서 이벤트가 발생했을 때
그 이벤트를 최상위에 있는 화면 요소까지 이벤트를 전파시킨다

즉, three에 이벤트가 발생하면 최상위 요소인 one까지 전파되어
three, two, one 순으로 전파

Event capture:
Event bubbling과 반대되는 현상이지만
capturing는 특별한 옵션으로 활성화시켜야 하지만
bubbling은 그런 작업이 필요하지 않다

Bubbling과 captuing을 합쳐서 위임이라고 한다

JS에서는 동적으로 DOM을 생성할 때가 많다
이 상태에서는 DOM이 생성되지 않으나
미래에 생성될 DOM을 제어하여 이벤트를 부여해야 할 경우가 있다
*/
/*
mouseenter/mouseleave
mouseover/mouseout
hover

1. 마우스가 해당 요소에 접근하거나 들어갈 때는
mouseenter와 mouseover
- mouseenter는 bubbling이 발생하지 않지만
- mouseover는 bubbling 발생
*/