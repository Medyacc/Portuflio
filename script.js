let pageColor = document.querySelector(".pageColor");
let colors = document.querySelectorAll(".color");
let getImage = document.querySelectorAll(".projects-card.soon .project-image img");
let imageProjet = document.querySelector(".projects-card .project-image img");


if (window.localStorage.getItem("MainColor") && window.localStorage.getItem("SecondColor")) {
    document.styleSheets[1].rules[2].style.cssText = `--mainColor: ${window.localStorage.getItem("MainColor")}; --secondColor: ${window.localStorage.getItem("SecondColor")}`;
}

if (window.localStorage.getItem("imageone") || window.localStorage.getItem("imagetwo") || window.localStorage.getItem("imagethree") || window.localStorage.getItem("imagefoor")) {
    if (document.styleSheets[1].rules[2].style.cssText == "--mainColor: #3a6cf4; --secondColor: #3a6cf4;") {
        imageProjet.src = `images/${window.localStorage.getItem("imageone")}.jpg`;
        for (let i = 0; i < getImage.length; i++) {
            getImage[i].src = `images/${window.localStorage.getItem("imageone")}.png`;
        }
    }
    if (document.styleSheets[1].rules[2].style.cssText == "--mainColor: #D80032; --secondColor: #D80032;") {
        imageProjet.src = `images/${window.localStorage.getItem("imagetwo")}.jpg`;
        for (let i = 0; i < getImage.length; i++) {
            getImage[i].src = `images/${window.localStorage.getItem("imagetwo")}.png`;
        }
    }
    if (document.styleSheets[1].rules[2].style.cssText == "--mainColor: #E55604; --secondColor: #E55604;") {
        imageProjet.src = `images/${window.localStorage.getItem("imagethree")}.jpg`;
        for (let i = 0; i < getImage.length; i++) {
            getImage[i].src = `images/${window.localStorage.getItem("imagethree")}.png`;
        }
    }
    if (document.styleSheets[1].rules[2].style.cssText == "--mainColor: #419197; --secondColor: #419197;") {
        imageProjet.src = `images/${window.localStorage.getItem("imagefoor")}.jpg`;
        for (let i = 0; i < getImage.length; i++) {
            getImage[i].src = `images/${window.localStorage.getItem("imagefoor")}.png`;
        }
    }
}

pageColor.addEventListener("click", function () {
    pageColor.classList.toggle("active");
});



colors.forEach(elm => {
    elm.addEventListener("click", function () {
        if (elm.classList.contains("one")) {
            document.styleSheets[1].rules[2].style.cssText = "--mainColor: #3a6cf4; --secondColor: #601cfc";
            imageProjet.src = "images/one.jpg";
            for (let i = 0; i < getImage.length; i++) {
                getImage[i].src = "images/one.png";
            }
        }
        if (elm.classList.contains("two")) {
            document.styleSheets[1].rules[2].style.cssText = "--mainColor: #D80032;--secondColor: #FF6969";
            imageProjet.src = "images/two.jpg";
            for (let i = 0; i < getImage.length; i++) {
                getImage[i].src = "images/two.png";
            }
        }
        if (elm.classList.contains("three")) {
            document.styleSheets[1].rules[2].style.cssText = "--mainColor: #E55604;--secondColor: #FFB000";
            imageProjet.src = "images/three.jpg";
            for (let i = 0; i < getImage.length; i++) {
                getImage[i].src = "images/three.png";
            }
        }
        if (elm.classList.contains("foor")) {
            document.styleSheets[1].rules[2].style.cssText = "--mainColor: #419197;--secondColor: #64CCC5";
            imageProjet.src = "images/foor.jpg";
            for (let i = 0; i < getImage.length; i++) {
                getImage[i].src = "images/foor.png";
            }
        }
    })
})


colors.forEach(elm => {
    elm.addEventListener("click", e => {
        window.localStorage.setItem("MainColor", e.currentTarget.dataset.colorone);
        window.localStorage.setItem("SecondColor", e.currentTarget.dataset.colorone);
        getImage.forEach(e => {
            window.localStorage.setItem("imageone", e.dataset.image1);
            window.localStorage.setItem("imagetwo", e.dataset.image2);
            window.localStorage.setItem("imagethree", e.dataset.image3);
            window.localStorage.setItem("imagefoor", e.dataset.image4);
        })
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


let up = document.querySelector(".upButton");

window.onscroll = function () {
    if (window.scrollY >= 100) {
        up.style.display = "block";
    }
    else {
        up.style.display = "none";
    }
}

up.onclick = function () {
    window.scrollTo({
        top: 0
    })
}


