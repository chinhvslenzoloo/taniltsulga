let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operation");
let display = document.querySelector("#display"); // Corrected the typo to 'display'
let checkOp = false;  // To prevent consecutive operators

// Event listener for number buttons
numbers.forEach((element) => {
    element.addEventListener("click", writeNumber);
});

// Event listener for operator buttons
operators.forEach((element) => {
    element.addEventListener("click", (e) => {
        let displayVal = display.value;
        
        // Prevent adding an operator if display is empty or if the last character is already an operator
        if (displayVal !== "" && !checkOp) {
            checkOp = true; // Flag that an operator has been entered
            display.value += e.target.innerText; // Append the operator to the display
        }
    });
});

// Function to handle number input
function writeNumber(event) {
    display.value += event.target.innerText; // Append the number to the display
    checkOp = false;  // Reset checkOp flag when a number is entered
}

// Optional: Add a clear button functionality
let clearButton = document.querySelector("#clear"); // Assuming you have a clear button with ID 'clear'
if (clearButton) {
    clearButton.addEventListener("click", () => {
        display.value = "";  // Clear the display
        checkOp = false;  // Reset operator flag
    });
}

// Optional: Add a calculation button (equals '=' functionality)
let equalsButton = document.querySelector("#equals");  // Assuming you have an equals button with ID 'equals'
if (equalsButton) {
    equalsButton.addEventListener("click", () => {
        let expression = display.value;

        // If the display has something to evaluate
        if (expression !== "") {
            try {
                // Use eval to evaluate the mathematical expression
                let result = eval(expression); 
                display.value = result;  // Show the result in the display
                checkOp = false;  // Reset operator flag after calculation
            } catch (e) {
                display.value = "Error";  // Handle errors gracefully
                checkOp = false;
            }
        }
    });
}
