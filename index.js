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

plus.onclick = function() {
    counter.textContent = Number(counter.textContent) + 1;
};

plus10.onclick = function() {
    counter.textContent = Number(counter.textContent) + 10;
};

plus100.onclick = function() {
    counter.textContent = Number(counter.textContent) + 100;
};

minus.onclick = function() {
    counter.textContent = Number(counter.textContent) - 1;
};

minus10.onclick = function() {
    counter.textContent = Number(counter.textContent) - 10;
};

minus100.onclick = function() {
    counter.textContent = Number(counter.textContent) - 100;
};