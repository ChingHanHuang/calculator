let firstOperand = "";
let secondOperand = "";
let currentOperator = null;
const inputNumberLimitation = 14;

const warningMsg = document.getElementById("warningMsg");
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
  button.addEventListener("click", () => setOperation(button));
});

equalsBtn.addEventListener("click", evaluate);

function clearOperation() {
  currentOperationScreen.textContent = "0";
  firstOperand = "";
  secondOperand = "";
  currentOperator = null;
}

function deleteEntry() {
  if (currentOperationScreen.textContent === "Error")
    currentOperationScreen.textContent = "0";

  currentOperationScreen.textContent = currentOperationScreen.textContent.slice(
    0,
    -1
  );
  if (currentOperationScreen.textContent === "")
    currentOperationScreen.textContent = "0";
}

function appendNumber(number) {
  if (exceedLimitationDisplay()) return;

  if (
    currentOperationScreen.textContent === "0" ||
    (currentOperator !== null && secondOperand == "")
  )
    currentOperationScreen.textContent = "";

  currentOperationScreen.textContent += number;

  if (currentOperator === null)
    firstOperand = currentOperationScreen.textContent;
  else secondOperand = currentOperationScreen.textContent;
}

function exceedLimitationDisplay() {
  if (currentOperationScreen.innerText.length > inputNumberLimitation) {
    warningMsg.innerText = "The numbers have reached the limit of the display.";
    return true;
  }
  return false;
}

function setOperation(operatorBtn) {
  removeBtnsActiveMode();
  currentOperator = operatorBtn.textContent;
  addBtnActiveMode(operatorBtn);
}

function removeBtnsActiveMode() {
  operatorBtns.forEach((btn) => btn.classList.remove("active"));
}

function addBtnActiveMode(operatorBtn) {
  operatorBtn.classList.add("active");
}

function evaluate() {
  if (currentOperator === null) return;
  if (firstOperand === "") firstOperand = "0";
  if (secondOperand === "") secondOperand = firstOperand;

  let operationResult = operate(currentOperator, firstOperand, secondOperand);
  if (operationResult === null) currentOperationScreen.textContent = "Error";
  else currentOperationScreen.textContent = operationResult;

  firstOperand = operationResult;
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return substract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) return null;
      return divide(a, b);
    default:
      return null;
  }
}
