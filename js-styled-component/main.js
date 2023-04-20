let test = function (txt) { console.log(txt) }
// 함수 선언형
function test1() { }
// 함수 선언형
let test2 = () => {}
// 화살표 함수

test("test"); // test
test `test`; // ['test']
// ECMAScript 6 문법에서는 ``으로 인해 함수의 호출과 인수값을 ``로 처리하면
// 함수의 값이 배열로 반환된다 -> 이것을 이용해서 DOM 요소를 만듦과
// 동시에 스타일도 입히는 styled component가 가능하다

// let main = document.querySelector("main");

// 태그 이름을 인수로 받아서 해당 태그를 생성하는 함수 제작
/*
let makeDom = (tag) => {
    let dom = document.createElement(tag);
    dom.innerText = 'Hello';
    // return dom;
    // 함수 return 값은 문자나 숫자 등의 값을 return 했지만,
    // 함수값으로 함수를 return할 수 있다
    return (css) => {
        dom.style[css.prop] = css.value;
        return dom;
    }
}
*/
// console.log(makeDom('h1'));

/*
makeDom(tag)(): 반환된 함수를 호출
두 번째 () 안에 인수를 넣으면 반환된 함수에 인수를 대입해서
최종 호출하겠다는 의미가 된다

() 안에는 매개변수 자리에 인수를 넣는 곳;
return하는 함수 안에 인수를 넣으려면 ()을 한번 더 옆에 써준다

component는 하나의 기능을 하는 단위 정도로 정의할 수 있다
즉, styled component는 tag이름을 받아서 해당 태그를 만드는데
스타일도 동시에 입힐 수 있는 함수 안에 있는 함수를 적용한 방법
*/
// main.append(makeDom('h1')( {prop : "color", value : "red"} ));
// makeDom('h1') 뒤에 ()가 없으면 오류 발생

// 위 예제는 객체의 형태로 인수를 넣어서 호출하다보니
// 속성, 값의 형태인 하나만 호출할 수 있으나
// h1의 font-size, font-family, line-height, color 등을
// 한 번에 적용시켜 호출한다면 한계가 존재한다

let main = document.querySelector("main");

let styled = (tag) => {
    let dom = document.createElement(tag);

    return (css) => {
        dom.style = css[0];
        return dom;
    }
}

let box = styled("div")
`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: aqua;
`;

main.append(box);