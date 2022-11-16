function create() {
    const minusButton = document.createElement("button");
    const minusCont = document.getElementsByClassName("minus-container")[0]; 
    minusButton.setAttribute('class', 'minus-one');
    minusCont.appendChild(minusButton);
    minusButton.innerHTML = '<i class="fa fa-minus"></i>';

    const minusButton10 = document.createElement("button");
    const lessCont = document.getElementsByClassName("less")[0]; 
    minusButton10.setAttribute('class', 'minus-ten');
    lessCont.appendChild(minusButton10);
    minusButton10.innerHTML = '10';

    const minusButton100 = document.createElement("button"); 
    minusButton100.setAttribute('class', 'minus-hundred');
    lessCont.appendChild(minusButton100);
    minusButton100.innerHTML = '100';

    const plusButton = document.createElement("button");
    const plusCont = document.getElementsByClassName("plus-container")[0];
    plusButton.setAttribute('class', 'plus-one');
    plusCont.appendChild(plusButton);
    plusButton.innerHTML = '<i class="fa fa-plus">';

    const plusButton10 = document.createElement("button");
    const moreCont = document.getElementsByClassName("more")[0];
    plusButton10.setAttribute('class', 'plus-ten');
    moreCont.appendChild(plusButton10);
    plusButton10.innerHTML = '10';

    const plusButton100 = document.createElement("button");
    plusButton100.setAttribute('class', 'plus-hundred');
    moreCont.appendChild(plusButton100);
    plusButton100.innerHTML = '100';

    const numberDisplay = document.createElement("p");
    const counterCont = document.getElementById("numberContainer");
    numberDisplay.setAttribute('class', 'number-displayed');
    counterCont.appendChild(numberDisplay);
    numberDisplay.innerHTML = 0;
}

create()

let plus = document.getElementsByClassName("plus-one")[0];
let plusIcon = document.getElementsByClassName("fa-plus")[0];
let plus10 = document.getElementsByClassName("plus-ten")[0];
let plus100 = document.getElementsByClassName("plus-hundred")[0];
let counter = document.getElementsByClassName("number-displayed")[0];
let reset = document.getElementById("buttonReset");
let resetIcon = document.getElementsByClassName("fa-window-restore")[0];
let minus = document.getElementsByClassName("minus-one")[0];
let minusIcon = document.getElementsByClassName("fa-minus")[0];
let minus10 = document.getElementsByClassName("minus-ten")[0];
let minus100 = document.getElementsByClassName("minus-hundred")[0];


function sum(addend) {
    counter.textContent = Number(counter.textContent) + addend;

    checkStyle()
}

function checkStyle() {
    if (counter.textContent >= 1000 && counter.textContent <= 99999 ||
        counter.textContent <= -100 && counter.textContent >= -99999) {
        if (screen.width <= 500) {
            counter.style.fontSize = "90px";
        }
    } else if (counter.textContent >= 100000 && counter.textContent <= 999999 ||
             counter.textContent <= -100000 && counter.textContent >= -999999) {
        if (screen.width <= 500) {
            counter.style.fontSize = "70px";
        } else if (screen.width >= 1001) {
            counter.style.fontSize = "250px";
        } else {
            counter.style.fontSize = "200px";
        }
    } else if (counter.textContent >= 1000000 ||
               counter.textContent <= -1000000) {
        if (screen.width <= 500) {
            counter.style.fontSize = "50px";
        } else if (screen.width >= 1001) {
            counter.style.fontSize = "200px";
        } else {
            counter.style.fontSize = "150px";
        }
    }    
}

function buttonClick(event) {
    switch (event.target) {
        case reset:
            counter.textContent = 0;
            break;
        case resetIcon:
            counter.textContent = 0;
            break;
        case plus:
            sum(1)
            break;
        case plusIcon:
            sum(1)
            break;
        case plus10:
            sum(10)
            break;
        case plus100:
            sum(100)
            break;
        case minus:
            sum(-1)
            break;
        case minusIcon:
            sum(-1)
            break;
        case minus10:
            sum(-10)
            break;
        case minus100:
            sum(-100)
            break;
        default:
            console.log("default")
            break;
    }
}

document.getElementsByClassName("counter-container")[0].onclick = (event) => buttonClick(event);


function transparent(elem) {
    elem.style.backgroundColor = "transparent";
}

function white(elem) {
    elem.style.backgroundColor = "white";
}

function backgroundWhite(event) {
    switch (event.target) {
        case plus:
            white(plus)
            break;
        case plusIcon:
            white(plus)
            break;
        case plus10:
            white(plus10)
            break;
        case plus100:
            white(plus100)
            break;
        case minus:
            white(minus)
            break;
        case minusIcon:
            white(minus)
            break;
        case minus10:
            white(minus10)
            break;
        case minus100:
            white(minus100)
            break;
        default:
            console.log("default")
            break;
    }
}

function backgroundTransparent(event) {
    switch (event.target) {
        case plus:
            transparent(plus)
            break;
        case plusIcon:
            transparent(plus)
            break;
        case plus10:
            transparent(plus10)
            break;
        case plus100:
            transparent(plus100)
            break;
        case minus:
            transparent(minus)
            break;
        case minusIcon:
            transparent(minus)
            break;
        case minus10:
            transparent(minus10)
            break;
        case minus100:
            transparent(minus100)
            break;
        default:
            console.log("default")
            break;
    }
}

document.getElementsByClassName("counter-container")[0].onmousedown = (event) => backgroundWhite(event);

document.getElementsByClassName("counter-container")[0].onmouseup = (event) => backgroundTransparent(event);