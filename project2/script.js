// Header ////////////////////////////////////////////////

// video Pause And play

let pause = document.querySelector(".fa-pause");
let play = document.querySelector(".fa-play");
let backvideo = document.querySelector(".backvideo video");

pause.onclick = function () {
    if (pause.classList.contains("fa-pause")) {
        pause.classList.remove("fa-pause");
        pause.classList.add("fa-play");
        backvideo.pause();
    } else {
        pause.classList.remove("fa-play");
        pause.classList.add("fa-pause");
        backvideo.play();
    }
}

// video Pause And play

// nav

let navbar = document.querySelector("nav");
let logo = document.querySelector(".logo");
let hamburg = document.querySelectorAll('.hamburg span');
let divhamburg = document.querySelector('.hamburg');
let links = document.querySelectorAll(".links a");
let navmobile = document.querySelector(".navmobile");

let prevScroll = window.scrollY;
window.onscroll = function () {
    const currentScrool = window.scrollY;
    if (prevScroll > currentScrool) {
        navbar.classList.remove('hidden');
        navbar.style.backgroundColor = "white";
        navbar.style.color = "black";
        logo.style.color = "black";
        links.forEach(elm => elm.style.color = "black");
        hamburg.forEach(elm => elm.style.backgroundColor = "black");
    } else {
        navbar.classList.add('hidden');
        navbar.style.removeProperty("background-color");
        navbar.style.color = "white";
        logo.style.color = "white";
        links.forEach(elm => elm.style.color = "white");
        hamburg.forEach(elm => elm.style.backgroundColor = "white");
        products.classList.remove("active");
    }
    if (window.scrollY <= 10) {
        navbar.style.removeProperty("background-color");
        navbar.style.color = "white";
        logo.style.color = "white";
        links.forEach(elm => elm.style.color = "white");
        hamburg.forEach(elm => elm.style.backgroundColor = "white");
    }
    prevScroll = currentScrool
}


divhamburg.onclick = function () {
    hamburg[0].classList.toggle("one");
    hamburg[1].classList.toggle("two");
    navmobile.classList.toggle("transf");
}


let products = document.querySelector(".products");
let product = document.querySelectorAll(".product");

links.forEach((elm) => {
    elm.onclick = function () {
        if (elm.classList.contains("active")) {
            elm.classList.remove("active");
            products.classList.remove("active");
        }
        else {
            links.forEach((e) => {
                e.classList.remove("active");
            });
            elm.classList.add("active");
            if (elm.classList.contains("active")) {
                products.classList.add("active");
            }
            product.forEach(produit => {
                produit.style.display = "none";
                if (elm.innerHTML == produit.dataset.cat) {
                    produit.style.display = "block";
                }
            });
        }
    }
});



// Page Login

let pagelogin = document.querySelector(".pagelogin");
let closelogin = document.querySelector(".pagelogin h2");
let user = document.querySelector(".fa-user");

closelogin.addEventListener("click", () => {
    pagelogin.classList.toggle("active");
})
user.addEventListener("click", () => {
    pagelogin.classList.toggle("active");
})


// Page Login


// Header ////////////////////////////////////////////////