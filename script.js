let pageColor = document.querySelector(".pageColor");


if (window.localStorage.getItem("MainColor") && window.localStorage.getItem("SecondColor")) {
    document.styleSheets[1].rules[2].style.cssText = `--mainColor: ${window.localStorage.getItem("MainColor")}; --secondColor: ${window.localStorage.getItem("SecondColor")}`;
}

pageColor.addEventListener("click", function () {
    pageColor.classList.toggle("active");
});


let colors = document.querySelectorAll(".color");

colors.forEach(elm => {
    elm.addEventListener("click", function () {
        if (elm.classList.contains("one")) {
            document.styleSheets[1].rules[2].style.cssText = "--mainColor: #3a6cf4; --secondColor: #601cfc"
        }
        if (elm.classList.contains("two")) {
            document.styleSheets[1].rules[2].style.cssText = "--mainColor: #D80032;--secondColor: #FF6969"
        }
        if (elm.classList.contains("three")) {
            document.styleSheets[1].rules[2].style.cssText = "--mainColor: #E55604;--secondColor: #FFB000"
        }
        if (elm.classList.contains("foor")) {
            document.styleSheets[1].rules[2].style.cssText = "--mainColor: #419197;--secondColor: #64CCC5"
        }
    })
})


colors.forEach(elm => {
    elm.addEventListener("click", e => {
        window.localStorage.setItem("MainColor", e.currentTarget.dataset.colorone);
        window.localStorage.setItem("SecondColor", e.currentTarget.dataset.colorone);
    })
})



let menuDiv = document.querySelector(".menu")
let burgerMenu = document.querySelectorAll(".menu div");
let MenuDiv = document.querySelector(".Navmobile");

menuDiv.addEventListener("click", function () {
    burgerMenu.forEach(elm => {
        elm.classList.toggle("toggleDiv");
    })
});

menuDiv.addEventListener("click", function () {
    MenuDiv.classList.toggle("toggleMenu");
});