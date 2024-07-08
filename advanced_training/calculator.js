let display = document.getElementById("display");
let currentOperand = "";
let previousOperand = "";
let operation = null;

function appendNumber(number) {
  if (display.innerText === "0" || currentOperand !== "") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
  currentOperand += number;
}

function setOperation(op) {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    calculate();
  }
  operation = op;
  previousOperand = currentOperand;
  currentOperand = "";
}

function calculate() {
  if (operation === null || currentOperand === "") return;
  let result;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }
  display.innerText = result;
  currentOperand = result.toString();
  previousOperand = "";
  operation = null;
}

function clearDisplay() {
  display.innerText = "0";
  currentOperand = "";
  previousOperand = "";
  operation = null;
}
