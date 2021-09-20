'use strict';
const calculatorMathLine = document.getElementById('calc--math');
const calculatorResult = document.getElementById('calc--result');
const calculatorActions = document.getElementById('calc--buttons');

let firstNumber = '';
let secondNumber = '';
let operation = '';

function clearVariables() {
    firstNumber = '';
    secondNumber = '';
    operation = '';
}

calculatorActions.addEventListener('click', function(e) {
    const button = e.target;
    const buttonValue = button.textContent;

    if (buttonValue === 'C') {
        calculatorMathLine.textContent = '';
        calculatorResult.textContent = '';
        clearVariables();

    } else if (buttonValue === '=') {
        if (secondNumber.length === 0 && operation !== '%') {
            return;
        }
        firstNumber = +firstNumber;
        secondNumber = +secondNumber;

        if (operation === '*') {
            calculatorResult.textContent = firstNumber * secondNumber;
        } else if (operation === '+') {
            calculatorResult.textContent = firstNumber + secondNumber;
        } else if (operation === '-') {
            calculatorResult.textContent = firstNumber - secondNumber;
        } else if (operation === '/') {
            calculatorResult.textContent = firstNumber / secondNumber;
        } else if (operation === '%') {
            secondNumber = 0;
            calculatorResult.textContent = firstNumber / 100;
        }

        clearVariables();

    } else if (buttonValue === '.') {
        const number = operation.length > 0 ? secondNumber : firstNumber;

        if (number.length === 0 || number.match(/\./)) {
            return;
        } else {
            if (operation.length > 0) {
                secondNumber += buttonValue;
            } else {
                firstNumber += buttonValue;
            }
        }

    } else if (button.classList.contains('number')) {
        if (operation.length > 0 && operation !== '%') {
            secondNumber += buttonValue;
        } else {
            firstNumber += buttonValue;
        }

    } else if (button.classList.contains('operation')) {
        operation = buttonValue;
    }

    calculatorMathLine.textContent = `${firstNumber} ${operation} ${secondNumber}`;
});