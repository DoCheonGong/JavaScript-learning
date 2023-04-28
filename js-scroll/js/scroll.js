const h1 = document.querySelector("h1");

const sections = document.querySelectorAll("section");
const lis = document.querySelectorAll("ul li");
const box2_p = document.querySelector("p");
// 각 section의 위치에 해당하는 값을 배열로 저장
let posArr = []; // 빈 배열
const base = -500;
// 해당 section의 정확한 offsetTop에 맞추면
// 사용자는 활성화된 모션을 보기 힘들기 때문에
// 활성화된 모션을 좀 더 일찍 보도록 앞당기는
// 값을 담은 변수

for (let el of sections) {
    posArr.push(el.offsetTop);
} // offsetTop : 각 요소의 세로 위치값을 처음 시작점으로 나타낸다
// 각 section의 offsetTop 값을 배열에 넣는 반복문

// 버튼에 반복을 돌리면서 click 이벤트 활성화
lis.forEach((el, index) => {
    el.addEventListener("click", () => {
        new Anim(window, {
            prop: "scroll",
            value: posArr[index],
            duration: 500
        });
        // 모든 버튼에 반복을 돌면서 on을 제거하여 비활성화하고
        for(let el of lis) el.classList.remove("on");
        // 클릭한 버튼만 on을 추가해서 활성화
        el.classList.add("on");
        // lis[index].classList.add("on");
        // el.currentTarget.classList.add("on");
    })
})

window.addEventListener("scroll", () => {
    let scroll = window.scrollY || window.pageYOffset;
    // scrollY, pageYOffset은 같은 값이다 (===)
    // scrollY는 익스플로러에서 많이 썼고 지금은 혼합해서 쓴다
    // 둘다 서로의 default 값으로 적어준다
    // h1.innerText = scroll;
    /*
    if (scroll >= posArr[0] && scroll < posArr[1]) {
        for (let el of lis) el.classList.remove("on");
        lis[0].classList.add("on");
    }
    if (scroll >= posArr[1] && scroll < posArr[2]) {
        for (let el of lis) el.classList.remove("on");
        lis[1].classList.add("on");
    }
    if (scroll >= posArr[2] && scroll < posArr[3]) {
        for (let el of lis) el.classList.remove("on");
        lis[2].classList.add("on");
    }
    if (scroll >= posArr[3]) {
        for (let el of lis) el.classList.remove("on");
        lis[3].classList.add("on");
    }
    */
    // scrollArr(index);
    box2_p.style.left = `${scroll - posArr[1] + 300}px`
    // 스크롤의 값을 연동해서 두 번째 section 안에 있는
    // p 태그의 left 값을 변경하는 코드

    // scroll은 계속 늘어나느 큰 값, 여기에 해당 section의
    // offsetTop을 빼주어야 연동할 수 있는 작은 값이 된다
    // 300은 디테일한 움직임을 조절하는 값

    sections.forEach((el, index) => {
        // 스크롤만으로 해당 offsetTop의 구간을 지날 때 자동으로
        // 버튼에 활성화를 시키는 코드
        if (index < lis.length-1) {
            if (scroll >= posArr[index] + base && scroll < posArr[index+1]) {
                for (let el of lis) el.classList.remove("on");
                lis[index].classList.add("on");
                // 활성화된 section에 활성화 클래스를 붙여서
                // 박스연동모션을 이끌어내는 코드
                sections[index].classList.add("on");
            }
        } else {
            if (scroll >= posArr[lis.length-1] + base) {
                for (let el of lis) el.classList.remove("on");
                lis[lis.length-1].classList.add("on");
                sections[lis.length-1].classList.add("on");
            }
        }
    })
})
/*
function scrollArr(idx) {
    if (idx < lis.length-1) {
        if (scroll >= posArr[idx] && scroll < posArr[idx+1]) {
            for (let el of lis) el.classList.remove("on");
            lis[idx].classList.add("on");
        } else {
            if (scroll >= posArr[lis.length-1]) {
                for (let el of lis) el.classList.remove("on");
                lis[lis.length-1].classList.add("on");
            }
        }
    }
}
*/