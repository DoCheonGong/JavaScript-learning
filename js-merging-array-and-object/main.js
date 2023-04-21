// 기존 ECMAScript5에서의 배열 합치기
let a = [1, 2, 3];
let b = [3, 4, 5];
const ab = a.concat(b);
console.log(ab);

// 배열의 중복값을 제거하고 싶을 때
const numberss = [1, 1, 2, 2, 3, 4, 5];

const newNumber = numberss.filter((el, index) => {
    return numberss.indexOf(el) === index;
})
console.log(newNumber);

/*
filter(); 
    메소드는 주어진 배열의 값들을 순차적으로 접근하여
    callback 함수를 통해서 return 값을 반환하는 요소들을
    기준으로 신규 배열을 만들어 반환한다
map(); 
    메소드 (내장함수 메소드) - callback 함수를 순차적으로
    모든 요소에 적용한다 (반복문)
reduce();
    배열의 각 요소를 순차적으로 접근해서 callback 함수의
    실행값을 누적해서 결과를 도출한다


map()은 5개의 요소를 판단한다면, 결과로 5개의 결과값이 도출되지만
reduce()는 5개의 요소를 판단한다면, 결과로 5개 이하의 값을 도출한다

이 세 메소드는 순차적으로 해당 값에 접근하는 방식으로
일을 처리한다
*/

let dup = [1, 2, 2, 3];
const dup2 = dup.reduce((arr, cur) => arr.includes(cur) ? arr : [...arr, cur]/* 없으면 추가, 있으면 버림 */, []);
console.log(dup2);
/*
arr = []
cur = 1

arr [1]

arr = [1]
cur = 2

arr [1, 2]

arr = [1, 2]
cur = 3
arr = [1, 2, 3]
*/