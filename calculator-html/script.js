'use strict'
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

const allClear = () => {
    previousNumber = "";
    currentNumber = "";
    currentOperand = null;
    updatePreviousValueDisplay();
    updateCurrentValueDisplay();
}

const deleteCurrentValue = () => {
    currentNumber = currentNumber.toString().slice(0, -1);
}

const calculation = () => {
    if(currentNumber === "") return
    let result = "";
    const prevNumber = parseFloat(previousNumber);
    const currNumber = parseFloat(currentNumber);
    if (currentOperand === "÷") result = prevNumber / currNumber;
    if (currentOperand === "*") result = prevNumber * currNumber;
    if (currentOperand === "+") result = prevNumber + currNumber;
    if (currentOperand === "-") result = prevNumber - currNumber;
    currentNumber = result;
    updateCurrentValueDisplay();   
}

const updatePreviousValueDisplay = () => {
    if (currentOperand === null) previousValueOnDisplay.innerText = previousNumber;
    else previousValueOnDisplay.innerText = previousNumber + " " + currentOperand;
}

const updateCurrentValueDisplay = () => {
    currentValueOnDisplay.innerText = currentNumber;
}

numbersButton.forEach(number => {
    number.addEventListener("click", function (x) {
        currentNumber += x.target.textContent;
        updateCurrentValueDisplay();
    })
})

operandsButton.forEach(operand => {
    operand.addEventListener("click", function (x) {
        if (currentNumber === "") return;
        if (currentNumber != "" && previousNumber != "") calculation();
        currentOperand = x.target.textContent;
        previousNumber = currentNumber;
        currentNumber = ""; 
        updatePreviousValueDisplay(); 
        updateCurrentValueDisplay();
    })
})

eraseButton.addEventListener("click", () => {
    deleteCurrentValue();
    updateCurrentValueDisplay();
})

clearAllButton.addEventListener("click", () => {
    allClear();
})

resultButton.addEventListener("click", () => {
    calculation();
})




