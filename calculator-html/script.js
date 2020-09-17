'use strict'
const numbersButton = document.querySelectorAll("[data-numbers]");
const operandButton = document.querySelectorAll("[data-operand]");
const clearButton = document.querySelector("[data-all-clear]");
const eraseButton = document.querySelector("[data-erase-current-value]")
const resultButton = document.querySelector("[data-result]")
let currentValueDisplay = document.querySelector("[data-current-value-display]")
let previousValueDisplay = document.querySelector("data-previous-value-display")

numbersButton.forEach(number => {
number.addEventListener("click", function (x) {
    currentDisplay.innerText += x.target.textContent
    })
});

// 