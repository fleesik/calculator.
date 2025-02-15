const answer = document.querySelector(".answer");
let firstNumber = "";
let secondNumber = "";
let number = "";
let SelecttedAction = "";

function getNum(value) {
  number += value;
  answer.textContent = number;
}

function getAction(action) {
  firstNumber = number;
  number = "";
  SelecttedAction = action;
  answer.textContent = firstNumber;
}

function getAnswer() {
  secondNumber = number;

  if (SelecttedAction == "+") {
    CurrAnswer = Number(firstNumber) + Number(secondNumber);
    answer.textContent = CurrAnswer;
  }

  if (SelecttedAction == "-") {
    CurrAnswer = Number(firstNumber) - Number(secondNumber);
    answer.textContent = CurrAnswer;
  }

  if (SelecttedAction == "х") {
    CurrAnswer = Number(firstNumber) * Number(secondNumber);
    answer.textContent = CurrAnswer;
  }

  if (SelecttedAction == "÷") {
    CurrAnswer = Number(firstNumber) / Number(secondNumber);
    answer.textContent = CurrAnswer;
  }

  if (SelecttedAction == "%") {
    CurrAnswer = Number(firstNumber) * Number(secondNumber / 100);
    answer.textContent = CurrAnswer;
  }

  if (SelecttedAction == "x²") {
    CurrAnswer = Number(firstNumber) ** Number(secondNumber);
    answer.textContent = CurrAnswer;
  }
}

function AC() {
  firstNumber = "";
  secondNumber = "";
  number = "";
  answer.textContent = "0";
}
