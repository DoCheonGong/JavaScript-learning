let skipNavi = document.querySelectorAll("#skipNavi li a");

// 반복을 돌면서 각 skipNavi에 focusin, focusout 이벤트 걸어주기
for (let el of skipNavi) {
    // focusin
    el.addEventListener("focusin", () => {
        el.classList.add("on");
    })
    // focusout
    el.addEventListener("focusout", () => {
        el.classList.remove("on");
    })
}