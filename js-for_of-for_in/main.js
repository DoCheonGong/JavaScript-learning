let colors = ['red', 'green', 'blue'];
colors.map((el) => { console.log(el) });

for (let el of colors) { console.log(el) };
// map은 무조건 배열만, for of는 유사배열도 가능하다
// 문자열을 반복할 수 있다

let h1 = document.querySelector("h1");
let txt = h1.innerText;
let tags = "";
h1.innerText = "";
for (let el of txt) { tags += `<span>${el}</span>` };
h1.innerHTML = tags;
// 위는 배열 반복

// 아래는 객체 배열
let student = {
    name : 'Null',
    age : 99,
    isMale : true,
    hoddy : 'secret'
}

for (let el in student) { console.log(student[el]) };
// for in 반복문은 객체를 반복으로 돌면서 탐색 시
// key 값이 아닌 el, 즉 각각의 요소를 의미하는 변수로
// 탐색하여 반복한다