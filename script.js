populatesDisplay();
// Creates button array and adds event listener

function populatesDisplay() {
    const BUTTONS = document.querySelectorAll(".btn");
    BUTTONS.forEach(button => {
        button.addEventListener("click", () => {
            button.onclick(addToDisplay(button.value));
        });
    });
}

function addToDisplay(btnValue) {
    const NUM_DISPLAY = document.querySelector("#num-display");
    NUM_DISPLAY.innerText = NUM_DISPLAY.innerText += btnValue;
}

// Uses basic arithmetic functions to calculate
function operate(operator, a, b) {
    switch (operator) {
        case "+" :
            return add(a, b);
        case "-" :
            return subtract(a, b);
        case "x" :
            return multiply(a, b);
        case "%" :
            if (b == 0) {
                return null;
            } else {
                return divide(a, b);
            }
        default: 
        return null;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}