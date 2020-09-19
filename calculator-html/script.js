'use strict'
const numbersButton = document.querySelectorAll("[data-numbers]");
const operandsButton = document.querySelectorAll("[data-operand]");
const clearAllButton = document.querySelector("[data-all-clear]");
const eraseButton = document.querySelector("[data-erase-current-value]");
const resultButton = document.querySelector("[data-result]");
let currentValueOnDisplay = document.querySelector("[data-current-value-display]");
let previousValueOnDisplay = document.querySelector("[data-previous-value-display]");
let processingNumber = "";
let previousNumber = "";
let currentNumber = "";
let currentOperand = null;

const allClear = () => {
    processingNumber = "";
    previousNumber = "";
    currentNumber = "";
    currentOperand = null;
    updateDisplay();
}

const deleteCurrentValue = () => {
    currentNumber = currentNumber.toString().slice(0, -1);
}

const calculation = () => {

    // if(currentNumber === "") 
    // if (currentNumber === "") if (currentNumber === "") return;
    // let result = "";
    // const prevNumber = parseFloat(previousNumber);
    // const currNumber = parseFloat(currentNumber);

    if (currentOperand === "÷") result = prevNumber / currNumber;
    if (currentOperand === "*") result = prevNumber * currNumber;
    if (currentOperand === "+") result = prevNumber + currNumber;
    if (currentOperand === "-") result = prevNumber - currNumber;
    
    
    
    
    // currentNumber = result;
    // updateCurrentValueDisplay();   
}

const 


const processingNumbers = (num) => {
    processingNumber += num
    const integerDigits = parseFloat(processingNumber.split(".")[0]);
    const decimalDigits = processingNumber.split(".")[1]
    let processNumber;
    isNaN(integerDigits) ? processNumber = "" : processNumber = integerDigits.toLocaleString("en");
    !isNaN(decimalDigits) ? currentNumber = `${processNumber}.${decimalDigits}` : currentNumber = processNumber;
}   

const updateDisplay = () => {
    currentValueOnDisplay.innerText = currentNumber;
}

// const updatePreviousValueDisplay = () => {
//     if (currentOperand === null) previousValueOnDisplay.innerText = previousNumber;
//     else previousValueOnDisplay.innerText = previousNumber + " " + currentOperand;
// }
// const updateCurrentValueDisplay = () => {
//     currentValueOnDisplay.innerText = currentNumber;
// }

numbersButton.forEach(number => {
    number.addEventListener("click", function (x) {
        processingNumbers(x.target.innerText);
        updateDisplay()
        
        
        
        // currentNumber += x.target.textContent;
        // updateCurrentValueDisplay();
    })
})

operandsButton.forEach(operand => {
    operand.addEventListener("click", function (x) {




        // if (currentNumber === "") return;
        // if (currentNumber != "" && previousNumber != "") calculation();
        // currentOperand = x.target.textContent;
        // previousNumber = currentNumber;
        // currentNumber = ""; 
        // updatePreviousValueDisplay(); 
        // updateCurrentValueDisplay();
    })
})

eraseButton.addEventListener("click", () => {
  deleteCurrentValue();
  updateDisplay();
})

clearAllButton.addEventListener("click", () => {
    allClear();
})

resultButton.addEventListener("click", () => {
    
    
    
    
    // calculation();
})




