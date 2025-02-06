let a = "0";
let b = "";
let operator = "";

//performs operations with operators and operand
function operate(operator, a, b) {
    let result;
    let positive;
    a = Number(a);
    b = Number(b);

    if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } if (operator === "/") {
        result = a / b;
    } 
        //turns num result into string
    if (result >= 0) {
        positive = true;
    } else {
        positive = false;
    }
    console.log(`${a} ${operator} ${b} = ${result}`);
    let resultString = Math.abs(result).toString();

        //removes extra decimals
            //if result is > 999999999
            if (resultString.length > 10 && !resultString.includes(".")) {
                return "ERR";
            //if result includes "."
            } else if (resultString.includes(".")) {
                let shortResult = resultString.substring(0, resultString.indexOf("."));
                //if result is > 999999999
                if (shortResult.length > 10) {
                    console.log(result);
                    console.log(shortResult);
                    return "ERR";
                } 
                //if result is < 999999999 with a decimal
                else if (positive === true) {
                    return resultString.substring(0,10);
                } else if (positive === false) {
                    return resultString.substring(0,10) * -1;
                }
            } else {
                return result;
            }
        
}


//Enters numbers when number buttons are clicked

const numButtons = document.querySelectorAll(".numbtn");

    numButtons.forEach(button => {
    button.addEventListener("click", () => {

        if (operator != "") {
            if (display.textContent = b && b.length >= 10) {
                
            } else if(b === "0") {
                b = button.textContent;
            
            } else if (display.textContent = b && b.includes(".")) {
                b += button.textContent;
                    if (b.charAt(b.length-1) === ".") {
                        b = b.substring(0, b.length-1);
                    } 
            } else if (display.textContent = b) {
                b += button.textContent;
                b = b.substring(0, 10);
            } else if (display.textContent = a) {
                b = "0";
                b = button.textContent;
            } else {
                b = "0";
                b = button.textContent;
            }
                if (b === "00") {
                    b = "0";
                }
                
                display.textContent = b;
                
            
        } else {
            if (display.textContent = a && a.length >= 10) {

            } else if(display.textContent = a && a === "0") {
                a = button.textContent;
            } else if (display.textContent = a && a.includes(".")) {
                a += button.textContent;
                    if (a.charAt(a.length-1) === ".") {
                        a = a.substring(0, a.length-1);
                    }
            } else if (display.textContent = a) {
                a += button.textContent;
            }
                a = a.substring(0, 10);

                if (a === "00") {
                    a = "0";
                } 
                
                display.textContent = a;
                
        }
      });
    })

//Changes the operator according to operator button clicked
    const opButtons = document.querySelectorAll(".opbtn");

    opButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (b != "") {
            display.textContent = operate(operator, a , b);
            a = display.textContent;
            b = "";
            operator = button.textContent;
        } else {
            a = display.textContent;
            b = "";
            operator = button.textContent;
        }
        
    
      });
    })

//Equal Button
const equalButton = document.querySelector(".equalbtn");

equalButton.addEventListener("click", () => {
    if (b === "" && operator === "") {
        display.textContent = a;
    } else if (operator === "/" && b === "0") {
        display.textContent = "LOL"
        a = "0";
        b = "";
        operator = "";
    } else {
        
        display.textContent = operate(operator, a , b);
        a = "0";
        b = "";
        operator = "";
    }
});

//AC Button returns operator and b to undefined and returns a;
    const acButton = document.querySelector(".acbtn");

    acButton.addEventListener("click", () => {
            a = "0";
            b = "";
            operator = "";
            display.textContent = a;
        });

//CE Button returns b and operator to undefined and returns a = 0
    const ceButton = document.querySelector(".cebtn");

    ceButton.addEventListener("click", () => {
            if (display.textContent = b) {
                b = "0";
                display.textContent = b;
            } else if (display.textContent = a) {
                a = "0";
                display.textContent = a;
            } 
        });
    
// backbutton

const backButton = document.querySelector(".backbtn");

backButton.addEventListener("click", () => {
        if (display.textContent = b) {
            if (b.length > 1) {
                b = b.substring(0, b.length-1);
            } else {
                b = "0";
            }
        display.textContent = b;
        } else if (display.textContent = a) {
            if (a.length > 1) {
                a = a.substring(0, a.length -1);
            } else {
                a = "0";
            }
        display.textContent = a;
        }
    });



//display
const screen = document.querySelector("#screen");
const display = document.createElement("div");
display.classList.add("display");
display.textContent = a;

screen.appendChild(display);