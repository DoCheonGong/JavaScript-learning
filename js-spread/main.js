// Spread

// 문자열
let num1 = "326526236"; // 문자열로 된 자료값
let num2 = num1; // num1 값 복사
console.log(num1);
console.log(num2); // 완전한 복사 확인

num1 = "231515"; // num1 값 재정의
console.log(num1);
console.log(num2); // num2는 유지

// 배열
let arr1 = [1, 2, 3]; // 배열로 된 자료값
let arr2 = arr1; // arr1 배열 복사
console.log(arr1);
console.log(arr2); // 완전한 복사 확인

arr1[0] = 0; // arr1의 index 0 값 재정의
console.log(arr1);
console.log(arr2); // arr2의 값도 같이 변경

// 자료의 형태는 원시형과 참조형이 있다
// 원시형은 문자열, 참조형은 배열
// 참조형의 자료값은 단순복사로는
// 온전히 복사할 수 없다
// 참조형의 자료는 주소의 값만 복사되기 때문에
// 원본이 변하면 복사된 값도 변하게 된다
// 따라서 배열의 복사는 다른 방법으로 해야한다

// * 불변성: 기존 자료가 복사, 변형, 이동 등의
// 변화가 있을 때 변화 이전과 변화 이후의 자료가
// 서로 영향을 미치지 않는 성질
// (독립적인 개체가 되어야 한다)

// DOM: body 안의 내용이 브라우저에 의해
// 해석되어져서 구현되는 내용
// DOM의 두 가지 종류: real DOM과 virtual DOM
//      real DOM
        /*
        실존하는 DOM
        HTML에 작성되어 구현되는 DOM
        JavaScript로 만들어진 DOM
        */
//      virtual DOM
        /*
        JavaScript가 메모리 상에서
        가상으로 작성하는 DOM
        */
// JS에서는 이런 자료의 복사와 이동이 빈번하게
// 발생하므로 이 과정에서 이전 자료의 불변성은
// 매우 중요한 개념이 된다
// (깊이 있는 복사가 필요하다)

let arr3 = [1, 2, 3];
let arr4 = [...arr3]; // 깊이 있는 복사
console.log(arr3);
console.log(arr4);

arr3[0] = 0;
console.log(arr3);
console.log(arr4); // arr4는 유지

let arr5 = [...arr3, 7]; // 복사 후 값 추가
console.log(arr5);

let arr6 = [...arr3, ...arr4]; // 두 배열 합치기
console.log(arr6);
/*
배열 기존의 값이 패키징 되어있는 상태이다 - 
전개연산자로 배열을 쓰게되면 패키징되어 있는 값을
패키징으로부터 꺼내 펼쳐 놓음을 의미하지만
전개연산자 자체로는 값을 바로 사용할 수 있는
형태는 아니고, 새롭게 옮겨 담을 패키징을 한 뒤에
사용할 수 있다
*/
console.log(arr1);
console.log(...arr1);

// 전개연산자로 객체 값을 추가할 수 있다
const obj = {
        name: "Null",
        age: 99
}
const newObj = {...obj, address: "Schoolhouse"};
console.log(newObj);