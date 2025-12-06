/*
    First, a First Number, an Operator and a Second Number are declared.

    The user can do the following action: 
       - Press Numbers, 
       - Press Operators, 
       - Press Decimal Point, 
       - Press Equals, 
       - Press Backspace, 
       - Press Clear

    When a user presses a Number:
        - The number on the button is added to the display on the last position
        - If a result is displayed, pressing clears the result and starts a new calculation, displaying the number pressed

    When a user presses an Operator:
        - If First Number, Operator and Second Number are all defined, display the result from the calculation
        - If the display shows a number, store that number as First Number and store the operator pressed
            - Else if an operator is already stored and it's the same operator, do nothing
            - Else if an operator is already stored and it's not the same operator, delete the last operator and store the new Operator

    When a user presses a Decimal Point:
        - If the display already shows a decimal point in place, do nothing.
            - Else, a decimal point is added to the display on the last position

    When a user presses Equals:
        - If there isn't an operator input before, store the number on the display as First Number
            - Else if there was an operator input before but there isn't 
            a Second Number input, Second Number is stored as First Number 
            and the calculation procedes with the operator used and display
            the result
            - Else if there was an operator input before and both a First and
            Second Number input, proceed with the calculation and display the
            result

    When a user presses Backspace:
        - If the display shows (last input) an operator, do nothing
            - Else if the display shows (last input) a number, delete the last number inputed and store the new number
            - Else if the display show (last input) a decimal point, delete the decimal point and store the new number

    When a user presses Clear:
        - If there isn't any variables yet defined the button displayed is "AC"
            - Else the button displays "CE"
    
        All variables are cleared aswell as the display
        (First Number is equal to zero)
        (Operator is equal to an empty string)
        (Second Number is equal to zero)
*/

const numbers = document.querySelectorAll(".numbers")
const decimal = document.querySelector("#decimal")
const operators = document.querySelectorAll(".operators")
const equals = document.querySelector("#equals")
const clear = document.querySelector("#clear")
const backspace = document.querySelector("#backspace")
const display = document.querySelector("#display")

const populateDisplay = () => {
    // Defining the variables to use
    let firstNumber = 0;
    let secondNumber = null;
    let operator = null;
    let displayArray = []

    // Calculator shows 0 when booted
    display.textContent = firstNumber;

    // Logic when user presses numbers
    numbers.forEach(btn => {
        btn.addEventListener("click", () => {
            let value = Number(btn.textContent)
            displayArray.push(value)
            display.textContent = displayArray.join("")
        })
    });

    // Logic when user presses decimal point
    decimal.addEventListener("click", (event) => {
        let value = event.target.textContent
        if (!displayArray.includes(value)) {
            displayArray.push(value)
            display.textContent = displayArray.join("")
        }
    })

    // Logic when user presses operators
    operators.forEach(btn => {
        btn.addEventListener("click", (event) => {
            let value = event.target.textContent
            if (displayArray.length !== 0) {
                firstNumber = displayArray.join("")
                displayArray.splice(0, displayArray.length)
                display.textContent = firstNumber
                operator = value
            } else {
                operator = value
            }
        })
    })
}

populateDisplay()