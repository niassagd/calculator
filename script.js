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
let b ;
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


//Enters numbers when number buttons are clicked

const numButtons = document.querySelectorAll(".numbtn");

    numButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (display.textContent = a && a.length >= 10) {
            display.textContent = a;
        } else if(display.textContent = a && a === "0") {
            a = button.textContent;
            display.textContent = a;
        } else if (display.textContent = a) {
            a += button.textContent;
            a = a.substring(0, 10);
            display.textContent = a;
        }
      });
    })

//Changes the operator according to operator button clicked
    const opButtons = document.querySelectorAll(".opbtn");

    opButtons.forEach(button => {
    button.addEventListener("click", () => {
        operator = button.textContent;
      });
    })

//AC Button returns b and operator to undefined and returns a = 0
    const acButton = document.querySelector(".acbtn");

    acButton.addEventListener("click", () => {
            a = "0";
            b = "";
            operator = "";
            display.textContent = a;
        });

//AC Button returns b and operator to undefined and returns a = 0
    const ceButton = document.querySelector(".cebtn");

    ceButton.addEventListener("click", () => {
            if( display.textContent = a) {
                a = 0;
                display.textContent = a;
            } else {
                b = 0;
                display.textContent = b;
            }
        });
    

const screen = document.querySelector("#screen");
const display = document.createElement("div");
display.classList.add("display");
display.textContent = a;

screen.appendChild(display);