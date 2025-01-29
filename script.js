function add(x,y) {
    return x + y;
}
function subtract(x,y) {
    return x - y;
}
function multiply(x,y) {
    return x * y;
}
function divide(x,y) {
    return x / y;
}

let a = "0";
let b;
let operator;



function operate(operator, a, b) {
    if (operator === "+") {
        return add(a,b);
    } else if (operator === "-") {
        return subtract(a,b);
    } else if (operator === "*") {
        return multiply(a,b);
    } if (operator === "/") {
        return divide(a,b);
    } 
}

const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (a.length >= 10) {

        } else if(a === "0") {
            a = button.textContent;
            display.textContent = a;
        } else {
            a += button.textContent;
            a = a.substring(0, 10);
            display.textContent = a;
        }
      });
    })



const screen = document.querySelector("#screen");
const display = document.createElement("div");
display.classList.add("display");
display.textContent = a;

screen.appendChild(display);