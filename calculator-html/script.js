'use strict'
const numbersButton = document.querySelectorAll("[data-numbers]");
const operandButton = document.querySelectorAll("[data-operand]");
const clearButton = document.querySelector("[data-all-clear]");
const eraseButton = document.querySelector("[data-erase-current-value]")
const resultButton = document.querySelector("[data-result]")



let display

numbersButton.forEach(numbers => {
numbers.addEventListener("click", function () {
    display = document.getElementById("test2").innerText = displaappendNumber(numbers.textContent)
    })
});

operandButton.forEach(numbers => {
    numbers.addEventListener("click", function () {
        const x = document.getElementById("test2").innerText = numbers.innerText;
    })
});


console.log(eraseButton.textContent);


