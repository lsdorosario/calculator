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