'use strict'
const numbersButton = document.querySelectorAll("[data-numbers]");
const operandsButton = document.querySelectorAll("[data-operand]");
const clearButton = document.querySelector("[data-all-clear]");
const eraseButton = document.querySelector("[data-erase-current-value]")
const resultButton = document.querySelector("[data-result]")
let currentValueDisplay = document.querySelector("[data-current-value-display]")
let previousValueDisplay = document.querySelector("data-previous-value-display")
let previousNumber = "";
let currentNumber = "";
let currentOperand = null;

numbersButton.forEach(number => {
    number.addEventListener("click", function (x) {
        currentValueDisplay.innerText += x.target.textContent
    })
});

operandsButton.forEach(operand => {
    operand.addEventListener("click", function (x) {
        currentValueDisplay.innerText += x.target.textContent
    })
})



