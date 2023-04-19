let firstOperand = "";
let secondOperand = "";
let currentOperator = null;

const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");
const currentOperationScreen = document.getElementById(
  "currentOperationScreen"
);
const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const equalsBtn = document.getElementById("equalsBtn");

clearBtn.addEventListener("click", clearOperation);
deleteBtn.addEventListener("click", deleteEntry);
numberBtns.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => setOperation(button.textContent));
});

equalsBtn.addEventListener("click", evaluate);

function clearOperation() {
  currentOperationScreen.textContent = "0";
  firstOperand = "";
  secondOperand = "";
  currentOperator = null;
}

function deleteEntry() {
  currentOperationScreen.textContent = currentOperationScreen.textContent.slice(
    0,
    -1
  );
  if (currentOperationScreen.textContent === "")
    currentOperationScreen.textContent = "0";
}

function appendNumber(number) {
  if (currentOperationScreen.textContent === "0")
    currentOperationScreen.textContent = "";
  currentOperationScreen.textContent += number;
}

function setOperation(operator) {
  currentOperator = operator;
}

function evaluate() {
  if (currentOperator === null) return;
  if (firstOperand === "") firstOperand = 0;
  if (secondOperand === "") secondOperand = firstOperand;

  let operationResult = 0;
  if (currentOperator === "/")
    operationResult = divide(parseInt(firstOperand), parseInt(secondOperand));
  else if (currentOperator === "*")
    operationResult = multiply(parseInt(firstOperand), parseInt(secondOperand));
  else if (currentOperator === "+")
    operationResult = add(parseInt(firstOperand), parseInt(secondOperand));
  else if (currentOperator === "-")
    operationResult = subtract(parseInt(firstOperand), parseInt(secondOperand));

  firstOperand = operationResult;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {}
