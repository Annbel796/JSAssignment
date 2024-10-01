const number = 4;
function doubleNumber(numberToDouble) {
  return numberToDouble * 2;
}
console.log(doubleNumber(number)); // Output: 8

let inputeNomberOne = 0;

// Solution 1
function multiplyBySelf(numberTwoMoltiply) {
  return numberTwoMoltiply * numberTwoMoltiply;
}
console.log(multiplyBySelf(4))


function average(firstNumber,secondNumber) {
  // let sumOfNumber = firstNumber + secondNumber;
  // return sumOfNumber / 2;
  return (firstNumber + secondNumber)/2;
}
console.log(average(2,6));


function welcome(firstName, laastName) {
  // let greeting = "Welcome " + firstName + " " + laastName;
  // return greeting;
  return "Welcome " + firstName + " " + laastName;
}
console.log (welcome("Ben ", "Ting"));
console.log (welcome("Ann ", "Sven"));

function addName(firstName, secondName) {
  return (firstName + secondName).toString();
}
console.log("Welcome", addName("Anna ", "Sova"));

// Solution 2
function getRandomInt() {
  return Math.floor(Math.random() * 3);
}
console.log(getRandomInt());

function convertNumbersToLetters(number) {
  if (number === 0) {
    return "A";
  } else if (number === 1) {
    return "B";
  } else if (number === 2) {
    return "C";
  } else {
    return "Invalid number"
  }
}
  console.log(convertNumbersToLetters(0));
  console.log(convertNumbersToLetters(1));
  console.log(convertNumbersToLetters(2));
  console.log(convertNumbersToLetters(10));


  //Write a function that has 2 numbers as parameters compares
// them and returns the following results:
// ○ Output: Both numbers are equal!
// ○ Output: First number is greater!
// ○ Output: Second number is greater

let score = 9;

function evaluateNumber(firstNumber, secondNumber) {
  if (firstNumber === secondNumber) {
    return "Both numbers are equal!";
  } else if (firstNumber > secondNumber) {
    score++;
    return "First number is greater!";
  } else if (firstNumber < secondNumber) {
    score--;
    return "Second number is greater";
  }
}
 console.log(evaluateNumber(6,2));
 console.log(score);

let score;
function increaseBy (inputeNumber) {
return inputeNumber ++
}


let playerScore = 7;
document.cookie = "playerScore=" + playerScore + ";expires=Thu, 18 Dec 2025 12:00:00 UTC"
//
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2025 12:00:00 UTC"
