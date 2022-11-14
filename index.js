let plus = document.getElementById("buttonPlus");
let plus10 = document.getElementById("plusTen");
let plus100 = document.getElementById("plusHundred");
let counter = document.getElementById("numberContainer");
let reset = document.getElementById("buttonReset");
let minus = document.getElementById("buttonMinus");
let minus10 = document.getElementById("minusTen");
let minus100 = document.getElementById("minusHundred");


counter.textContent = 0;

reset.onclick = function() {
    counter.textContent = 0;
}

function sum(addend) {
    counter.textContent = Number(counter.textContent) + addend;

    checkStyle()
}

function checkStyle() {
    if (counter.textContent >= 100000 && counter.textContent <= 999999) {
        if (screen.width <= 500) {
            counter.style.fontSize = "50px";
        } else if (screen.width >= 1001) {
            counter.style.fontSize = "250px";
        } else {
            counter.style.fontSize = "200px";
        }
    } else if (counter.textContent >= 1000000) {
        if (screen.width <= 500) {
            counter.style.fontSize = "50px";
        } else if (screen.width >= 1001) {
            counter.style.fontSize = "200px";
        } else {
            counter.style.fontSize = "150px";
        }
    }    
}

plus.onclick = () => sum(1);

plus10.onclick = () => sum(10);

plus100.onclick = () => sum(100);

minus.onclick = () => sum(-1);

minus10.onclick = () => sum(-10);

minus100.onclick = () => sum(-100);

function transparent(elem) {
    elem.style.backgroundColor = "transparent";
}

function white(elem) {
    elem.style.backgroundColor = "white";
}

plus.onmouseup = () => transparent(plus);

plus.onmousedown = () => white(plus);

plus10.onmouseup = () => transparent(plus10);

plus10.onmousedown = () => white(plus10);

plus100.onmouseup = () => transparent(plus100);

plus100.onmousedown = () => white(plus100);

minus.onmouseup = () => transparent(minus);

minus.onmousedown = () => white(minus);

minus10.onmouseup = () => transparent(minus10);

minus10.onmousedown = () => white(minus10);

minus100.onmouseup = () => transparent(minus100);

minus100.onmousedown = () => white(minus100);