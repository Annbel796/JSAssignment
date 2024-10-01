// E1 Grades
function convertNumbersToLetters(number) {
  if (90 <= number <= 100) {
    return "A";
  } else if (80 <= number <= 89) {
    return "B";
  } else if (70 <= number <= 79) {
    return "C";
  } else if (60 <= number <= 69) {
    return "D";
  } else if (number <= 60) {
    return "F";
  } else {
    return "Invalid number"
  }
}
console.log(convertNumbersToLetters(90));

// E2 MinMax
function evaluateNumber(firstNumber, secondNumber, thirdNumber) {
  if  (firstNumber < secondNumber && secondNumber < thirdNumber) {
    return [firstNumber, thirdNumber];
  } else if (secondNumber < thirdNumber && thirdNumber < firstNumber) {
    return [secondNumber, firstNumber];
  } else if (thirdNumber < firstNumber && firstNumber < secondNumber) {
    return [thirdNumber, secondNumber];
  } else if (firstNumber > secondNumber && secondNumber> thirdNumber) {
    return [firstNumber, thirdNumber];
  } else if (secondNumber > thirdNumber && thirdNumber > firstNumber) {
    return [secondNumber, firstNumber];
  } else if (thirdNumber > firstNumber && firstNumber > secondNumber) {
    return [thirdNumber, secondNumber];
  } else {
    return "Invalid number"
  }
}
console.log(evaluateNumber(12,-7,100));

// E3 Characters
const input = "2";
function evaluateInput() {
  if (!isNaN(input/2)) {
    return "This is a number";
  } else {
    if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u" ||
    input === "y"){
    return "This is a vowel";
  } else {
   return "This is a consonant";
  }
}
}
console.log(evaluateInput());

// E4 Calculator
  function calculator(firstNumber, secondNumber) {
    let additionOfNumber = firstNumber + secondNumber;
    let subtractionOfNumber = firstNumber - secondNumber;
    let multiplicationOfNumber = firstNumber * secondNumber;
    let divisionOfNumber = firstNumber / secondNumber;

    return {
      addition: additionOfNumber,
      subtraction: subtractionOfNumber,
      multiplication: multiplicationOfNumber,
      division: divisionOfNumber
    };
  }

  console.log(calculator(3, 7));

// E5 EvenOrOdd
const inputNumber = 11;
function evaluateInputNumber() {
  if (inputNumber % 2 === 0) {
    return "That's even.";
  } else {
    return "That's odd.";
  }
}
console.log(evaluateInputNumber());

// E6 Random_Coordinates
// Develop a program that generates random X and Y coordinates for an enemy in a 2D game world with 100x100 coordinates.
// Display these coordinates to the user.

//E7 Random_Password
// Design a program that generates a random password with 6 characters, digits or symbols.

'use strict';
const possibleCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g",
  "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "!", "?", "&", "&", "#", "*"];
//console.log(possibleCharacters.length); //Check

let password = "";
let lengthOfPassword = 6;

function getRandomInt(max) {
  return Math.floor(Math.random() * possibleCharacters.length);
}

//console.log(getRandomInt()); //Check
for (let i = 0; i < lengthOfPassword; i++) {
    //console.log(i); //Check
  let randomArrayIndex = getRandomInt();
  // console.log(randomArrayIndex);
  //console.log(possibleCharacters[randomArrayIndex]);
  password += possibleCharacters[randomArrayIndex];

  //console.log(possibleCharacters[getRandomInt()]); // same for 102-104
}
console.log(password);
//console.log(possibleCharacters[possibleCharacters.length-1]);

//possibleCharacters.length;
//possibleCharacters[1];
//possibleCharacters.indexOf("a");


// E8 Random_Item
// Write a program that simulates item drops in a game. Define five different items, and randomly select an item for
// the player to acquire.

// E9 Random_Chance
// Write a program that has a 10% chance of showing a secret message. Otherwise it just displays a message saying to try
// again.
