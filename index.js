let plus = document.getElementById("buttonPlus");
let counter = document.getElementById("numberContainer");
let reset = document.getElementById("buttonReset");
let minus = document.getElementById("buttonMinus")

counter.textContent = 0;

reset.onclick = function() {
    counter.textContent = 0;
}

plus.onclick = function() {
    plus.style.filter = "brightness: 150%;";
    counter.textContent = Number(counter.textContent) + 1;
};

minus.onclick = function() {
    counter.textContent = Number(counter.textContent) - 1;
};





