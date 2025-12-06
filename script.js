const add = (num1, num2) => {
    return num1 + num2
}

const subtract = (num1, num2) => {
    return num1 - num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

const divide = (num1, num2) => {
    return num1 / num2
}

const operate = (num1, operator, num2) => {
    switch (operator) {
        case "+":
            return add(num1, num2)
            break;
        case "-":
            return subtract(num1, num2)
            break
        case "*":
            return multiply(num1, num2)
            break
        case "/":
            return divide(num1, num2);
            break
    }   
}

const zero = document.querySelector("#zero")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const multiplication = document.querySelector("#multiply")
const division = document.querySelector("#divide")
const equals = document.querySelector("#equals")
const decimalPoint = document.querySelector("#decimal")
const clear = document.querySelector("#clear")
const display = document.querySelector("#display")

let firstNumber = 0
let lastNumber = 0