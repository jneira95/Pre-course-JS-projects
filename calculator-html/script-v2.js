'use strict'

///////////////////////////VARIABLES////////////////////////////


const numbersButton = document.querySelectorAll("[data-numbers]");
const operandsButton = document.querySelectorAll("[data-operand]");
const clearAllButton = document.querySelector("[data-all-clear]");
const eraseButton = document.querySelector("[data-erase-current-value]");
const resultButton = document.querySelector("[data-result]");
let currentValueOnDisplay = document.querySelector("[data-current-value-display]");
let previousValueOnDisplay = document.querySelector("[data-previous-value-display]");
let previousNumber = "";
let currentNumber = "";
let currentOperand = null;

///////////////////////////FUNCTIONS////////////////////////////

function allClear() {
    
}

function eraseNumbers() {
    
}

function calculationNumbers() {
    let result = "";
    const currNumber = parseFloat(currentNumber);
    const prevNumber = parseFloat(previousNumber);
    if (currentOperand === "÷") result = prevNumber / currNumber;
    if (currentOperand === "*") result = prevNumber * currNumber;
    if (currentOperand === "+") result = prevNumber + currNumber;
    if (currentOperand === "-") result = prevNumber - currNumber;
    updateDisplay()
}

function operatorSelected(operator) {
    if (currentNumber === "") return
    currentOperand = operator;
    if (previousNumber != "" && currentNumber != "" && currentOperand != null) calculationNumbers()
    previousNumber = currentNumber;
    currentNumber = ""

    updateDisplay()
}

function appendingNumbers(number) {
    if (number === "." && currentNumber.includes(".")) return
    currentNumber = currentNumber + number   
}

function processingNumbers(number) {
    const numberToProcess = number;
    const integerDigits = parseFloat(numberToProcess.split(".")[0]);
    const decimalDigits = numberToProcess.split(".")[1];
    let intergerDisplay = "";
    if (isNaN(integerDigits)) {
        intergerDisplay = "";
    } else {
        intergerDisplay = integerDigits.toLocaleString("en");
    }
    if (decimalDigits === undefined) {
        return `${intergerDisplay}`
    } else {
        return `${intergerDisplay}.${decimalDigits}`
    }
}

function updateDisplay() {
    currentValueOnDisplay.innerText = processingNumbers(currentNumber);
    if (currentOperand != null) previousValueOnDisplay.innerText = `${processingNumbers(previousNumber)} ${currentOperand}`;
}

///////////////////////////EVENTS////////////////////////////

numbersButton.forEach(button => {
    button.addEventListener("click", function (number) {
        appendingNumbers(number.target.innerText)
        updateDisplay()
    })
})

operandsButton.forEach(button => {
    button.addEventListener("click", function (operator) {
        operatorSelected(operator.target.innerText)
    })
})

clearAllButton.addEventListener("click", () => {
    allClear()
})

eraseButton.addEventListener("click", () => {
    eraseNumbers()
})
