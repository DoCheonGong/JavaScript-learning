/*
document.createElement("nodename");
보통 이 인수로 넣는 node는
"문자열로 tag 이름을 작성"
createElement - 이 method는 단일 매개변수
값을 받고, 필수로 받아와야 한다
=> 요소 객체 생성
*/
/*
// 1. node로 동적 DOM을 만드는 방법
let h1 = document.createElement("h1");
let a = document.createElement("a");
let href = document.createElement("href");
let target = document.createElement("target");

href.nodeValue = "https://www.naver.com" // href = "https://www.naver.com";
target.nodeValue = "blank" // target = "blank";

a.setAttributeNote(href);
a.setAttributeNode(target);

// createAttribute("target"); + setAttributeNode(target);
// => setAttribute("속성이름", "속성에 넣을 값");

a.innerText = "Naver";
// <a href="https://www.naver.com" target="_blank">Naver</a>

h1.append(a);
// <h1><a href="https://www.naver.com" target="_blank">Naver</a></h1>

document.body.append(h1);
// 최종적으로 이어서 붙인 h1을 문서의 body 태그 안에 붙어주어야 최종 생성
*/
/*
// 2. 문자열을 innerHTML로 조합하여 DOM을 만드는 방법
let href = "https://www.naver.com";
let target = "_blank";
let txt = "Naver";
let tags = "";

tags += "<h1>"; // <h1>
tags += "<a href=" + href + " target=" + target + ">" + txt + "</a>";
tags += "</h1>"; // </h1>
// <h1><a href="https://www.naver.com" target="_blank">Naver</a></h1>
console.log(tags);

document.body.innerHTML = tags;
*/
/*
// 3. template literal을 활용한, 객체형식의 DOM 형성 방법
// 실무적 내용
// 실무에서는 자료가 여러 개인 경우, 객체나 배열로 binding해야 한다
// 또한 문자열 안에 변수를 넣는 경우, ECMAScript 6의 문법인
// template literal를 사용한다

let domInfo = {
    href : "https://www.naver.com",
    target : "blank",
    txt : "Naver"
}

let tags = `
    <h1>
        <a href="${domInfo.href}" target="_${domInfo.target}">${domInfo.txt}</a>
    </h1>
`;

console.log(tags);
document.body.innerHTML = tags;
*/

// 4. DOM을 반복해서 생성 - 실무에서는 자주 쓰인다
let domInfo = [{
    href : "https://www.naver.com",
    target : "blank",
    txt : "Naver"
}, {
    href : "https://www.google.com/",
    target : "blank",
    txt : "Google"
}, {
    href : "https://www.youtube.com",
    target : "blank",
    txt : "YouTube"
}]

let tags = "";
// map 반복에서는 두 가지의 매개변수 자리가 존재한다
// el, index 각각의 개체를 의미하는 el과
// 반복을 도는 각 index를 의미하는 index라는
// 매개변수가 필요하다

// 하지만 반복 대상에 따라서 일부 매개변수가
// 필요하지 않을 때가 있다

domInfo.map(function(el, index) {
    return tags += `
        <h1>
            <a href="${domInfo[index].href}" target="_${domInfo[index].target}">${domInfo[index].txt}</a>
        </h1>
    `;
})
document.body.innerHTML = tags;