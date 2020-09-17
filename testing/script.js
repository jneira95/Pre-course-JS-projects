const result = document.getElementById("result");
const display = document.getElementById("display");
const clear = document.getElementById("reset");
const idNumbers = ["number1", "number2", "number3", "number4", "number5", "number6", "number7", "number8", "number9", "number0"];
const operations = ["minus", "division", "addition", "multiply"];
let currentNumber = "";
let previousNumber = null;
let currentOperation = null;

for (let i = 0; i < idNumbers.length; i++) {
    let number = document.getElementById(idNumbers[i])
    number.addEventListener("click", function (event) {
        currentNumber += event.target.innerText;
        display.innerHTML = currentNumber;
    })
}

for (let i = 0; i < operations.length; i++) {
    let operation = document.getElementById(operations[i]);
    operation.addEventListener("click", function (event) {
       previousNumber = currentNumber;
       currentNumber = " ";
       display.innerHTML = event.target.innerText;
       currentOperation = event.target.innerText;
    })    
}

result.addEventListener("click", function () {
    let resultOperation;
    switch (currentOperation) {
        case "+":
            resultOperation = Number(previousNumber) + Number(currentNumber)
            break;
        case "-":
            resultOperation = Number(previousNumber) - Number(currentNumber)
            break;
        case "/":
            resultOperation = Number(previousNumber) / Number(currentNumber)
            break;
        case "*":
            resultOperation = Number(previousNumber) * Number(currentNumber)
            break;
        default:
            console.log("algo ha ido mal");
            break;
    }
    display.innerHTML = resultOperation;
    currentNumber = resultOperation;
})

clear.addEventListener("click", function () {
    currentNumber = "";
    currentOperation = null;
    previousNumber = null;
    display.innerHTML = "";
})