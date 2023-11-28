// Header

let menu = document.querySelectorAll(".menu img");
let mobilelinks = document.querySelector(".mobilelinks");

menu.forEach(elm => {
    elm.onclick = function () {
        menu[0].classList.toggle("active");
        menu[1].classList.toggle("active");
        if (menu[1].classList.contains("active")) {
            mobilelinks.style.left = "0";
        } else {
            mobilelinks.style.left = "-500px";
        }
    }
});

let shop = document.querySelector(".shop .imageshop");
let cart = document.querySelector(".cart")

shop.onclick = function () {
    cart.classList.toggle("active")
}
// Header

// Section

let headimage = document.querySelector(".imageproduct img");
let otherimage = document.querySelectorAll(".otherimages img");

let imagethumbnail = document.querySelector(".imagethumbnail");
let imagethumbnailproduct = document.querySelector(".imagethumbnailproduct img");
let otherimagethumbnail = Array.from(document.querySelectorAll(".otherimagethumbnail img"));
let closethumbnail = document.querySelector(".imagethumbnail .close");

let overlay = document.querySelector(".overlay");

let prevbtn = document.querySelector(".nextprev .preview");
let nextbtn = document.querySelector(".nextprev .next");

let counter = 0;

otherimage.forEach(elm => {
    elm.onclick = function () {
        otherimage.forEach(elm => {
            elm.classList.remove("active");
        })
        elm.classList.add("active");
        headimage.src = elm.getAttribute("src");
    }
});

headimage.onclick = () => {
    imagethumbnail.style.display = "block";
    overlay.style.display = "block";

}

closethumbnail.onclick = () => {
    imagethumbnail.style.display = "none";
    overlay.style.display = "none";

}

otherimagethumbnail.forEach(elm => {
    elm.onclick = function () {
        otherimagethumbnail.forEach(elm => {
            elm.classList.remove("active");
        })
        elm.classList.add("active");
        imagethumbnailproduct.src = elm.getAttribute("src");
        counter = otherimagethumbnail.indexOf(elm);
    }
})

prevbtn.addEventListener("click", function () {
    if (counter < otherimagethumbnail.length - 1) {
        counter++;
        otherimagethumbnail.forEach(elm => {
            elm.classList.remove("active");
        })
        otherimagethumbnail[counter].classList.add("active");
        imagethumbnailproduct.src = otherimagethumbnail[counter].getAttribute("src");
    }
})

nextbtn.addEventListener("click", function () {
    if (counter > 0 && counter < otherimagethumbnail.length) {
        counter--;
        otherimagethumbnail.forEach(elm => {
            elm.classList.remove("active");
        })
        otherimagethumbnail[counter].classList.add("active");
        imagethumbnailproduct.src = otherimagethumbnail[counter].getAttribute("src");
    }
})
// Section



// Add to cart

let addProduct = document.querySelector(".quantite span:last-child");
let numProduct = document.querySelector(".quantite span:nth-child(2)");
let minusProduct = document.querySelector(".quantite span:first-child");
let addtocart = document.querySelector(".btnshop .addtocart");
let cartempty = document.querySelector(".cart .shopping .emptytext");
let ordered = document.querySelector(".shopping .orderd");


let imagProd = document.querySelector(".orderProduct img:first-of-type");
let title = document.querySelector(".orderProduct .info h4:first-of-type");
let priceProd = document.querySelector(".orderProduct .info h4:last-of-type span:first-of-type");
let quantiteProd = document.querySelector(".orderProduct .info h4:last-of-type span:last-of-type");
let priceTotal = document.querySelector(".orderProduct .info h4:last-of-type b");
let deleteProd = document.querySelector(".orderd .orderProduct img:last-of-type");


let cartshopping = document.querySelector(".cart .shopping");

let numberOfproducts = 0;

let imageshop = document.querySelector(".imageshop span");

imagProd.src = headimage.getAttribute("src");
title.innerHTML = document.querySelector(".content h1").innerHTML;
priceProd.innerHTML = document.querySelector(".content .price h2 b").innerHTML;

addProduct.onclick = () => {
    numberOfproducts += 1;
    numProduct.innerHTML = numberOfproducts;
}

minusProduct.onclick = () => {
    if (numberOfproducts > 0) {
        numberOfproducts -= 1;
        imageshop.style.padding = "1px 6px";
        numProduct.innerHTML = numberOfproducts;
    }
}

addtocart.addEventListener("click", () => {
    if (numberOfproducts == 0) {
        imageshop.innerHTML = "";
        imageshop.style.padding = "0";
        cartempty.style.display = "block";
        ordered.style.display = "none";

    } else {
        cartempty.style.display = "none";
        ordered.style.display = "block";
        imageshop.style.padding = "1px 6px";
        imageshop.innerHTML = numberOfproducts;
        quantiteProd.innerHTML = numberOfproducts;
        priceTotal.innerHTML = parseInt(priceProd.innerHTML) * parseInt(quantiteProd.innerHTML)
    }
});

deleteProd.addEventListener("click", function () {
    ordered.style.display = "none";
    cartempty.style.display = "block";
    numProduct.innerHTML = 0;
    numberOfproducts = 0;
    imageshop.innerHTML = "";
    imageshop.style.padding = "0";
})

// Add to cart
