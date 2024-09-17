const textField0 = document.getElementById("text0");

textField0.innerHTML = updateScore(7);

const headerText5 = document.getElementById("header5");

headerText5.innerHTML = "This is my Website";

headerText5.style.color = "red";


function multiplyBySelf(numberTwoMoltiply) {
  return numberTwoMoltiply * numberTwoMoltiply;
}

function average(firstNumber,secondNumber) {
  // let sumOfNumber = firstNumber + secondNumber;
  // return sumOfNumber / 2;
  return (firstNumber + secondNumber)/2;
}

const button0 = document.getElementById("button0");

button0.addEventListener("click", () => {
  yourFunctionHere();
});

let score;
function increaseBy (inputeNumber) {
  return ++inputeNumber;
}

function updateScore (inputeNumber) {
  return inputeNumber*2;
}

