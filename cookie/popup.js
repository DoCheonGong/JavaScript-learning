/*
쿠키: 사용자의 컴퓨터에 저장되는 정보
정보가 발생하면 두 군데에 저장되는 경향이 있다 (클라이언트, 서버)
서버에 저장되는 정보: 쿠키, 세션
클라이언트에 저장되는 정보: 쿠키

쿠키 이름: 쿠키값, path = "/"
expires 삭제될 날짜 (만료일)
*/
let popup = document.querySelector("#popup");
let btnClose = popup.querySelector(".close");
let btnDel = document.querySelector(".del");
let btnView = document.querySelector(".view");

const isCookie = document.cookie.indexOf("today = done");
// 쿠키가 있다면 쿠키 팝업을 보여주지 않고, 없다면 계속해서 쿠키 팝업을 띄워준다
// indexOf를 찾을 때 값이 존재하면 존재하는 index를 반환하고, 존재하지 않으면 -1을 반환한다
if (isCookie == -1) {
    // 쿠키가 없으므로 팝업을 계속 보이게 한다
    popup.style.display = "block";
} else {
    // 쿠키가 있으므로 팝업을 숨긴다
    popup.style.display = "none";
}

btnDel.addEventListener("click", (e) => {
    e.preventDefault();
    // 쿠키를 "지운다"는 것은 due 값을 조정해서 만료일을 앞당기는 것이다
    setCookie("today", "done", 0); // due를 0으로 하여 만료일을 지금으로 만든다
})
btnView.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(document.cookie);
})

btnClose.addEventListener("click", (e) => {
    e.preventDefault();
    let isChecked = popup.querySelector("input[type=checkbox]").checked;
    if (isChecked) { setCookie("today", "done", 1)};
    popup.style.display = "none";
})

// 쿠키를 세팅하는 함수
function setCookie(name, value, due) {
    let today = new Date(); // 2023.05.16T(time)
    let date = today.getDate(); // 16
    today.setDate(date + due);
    let duedate = today.toGMTString();
    document.cookie = `${name}=${value}; path="/"; expires=${duedate}`;
} // 클라이언트 컴퓨터에 쿠키 생성