let btnOpen = document.querySelector(".btnOpen");
let aside = document.querySelector("aside");
let btnClose = aside.querySelector(".btnClose");
let main = document.querySelector("main");
let _top = aside.querySelector(".top"); // top은 미리 선언된 변수이므로 불가능
let _right = aside.querySelector(".right");
let _bottom = aside.querySelector(".bottom");
let _left = aside.querySelector(".left");
let _inner = aside.querySelector(".inner");

btnOpen.addEventListener("click", (e) => {
    e.preventDefault();
    // main에 on class를 붙여서 효과 만들기
    main.classList.add("on")
    // aside tag의 display를 block으로
    aside.style.display = "block";
    // callback
    new Anim(_top, {
        prop: "width",
        value: "100%",
        duration: 250,
        callback: () => {
            new Anim(_right, {
                prop: "height",
                value: "100%",
                duration: 250,
                callback: () => {
                    new Anim(_bottom, {
                        prop: "width",
                        value: "100%",
                        duration: 250,
                        callback: () => {
                            new Anim(_left, {
                                prop: "height",
                                value: "100%",
                                duration: 250,
                                callback: () => {
                                    new Anim(_inner, {
                                        prop: "opacity",
                                        value: 1,
                                        duration: 500
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
})

btnClose.addEventListener("click", (e) => {
    e.preventDefault();
    new Anim(_inner, {
        prop: "opacity",
        value: 0,
        callback: () => {
            new Anim(_top, {
                prop: "width",
                value: "0%",
                duration: 250
            });
            new Anim(_right, {
                prop: "height",
                value: "0%",
                duration: 250
            });
            new Anim(_bottom, {
                prop: "width",
                value: "0%",
                duration: 250
            });
            new Anim(_left, {
                prop: "height",
                value: "0%",
                duration: 250,
                callback: () => {
                    aside.style.display = "none";
                    main.classList.remove("on");
                }
            });
        }
    })
})