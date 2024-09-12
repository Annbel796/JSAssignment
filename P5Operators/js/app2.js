//USING 2 VARIABLES
let firstNumber = 7;
let secondNumber = 2;
let answer = 0;

// 1 + 2 = 3
answer = firstNumber + secondNumber;
console.log (answer);

answer = firstNumber - secondNumber;
console.log(answer);

answer = firstNumber * secondNumber;
console.log(answer);

answer = firstNumber / secondNumber;
console.log(answer);

answer = firstNumber % secondNumber;
console.log(answer);

let gold = 50;
gold + 10;
console.log(gold); // 50

gold = gold + 10;
console.log(gold); // 60

gold += 10;
console.log(gold); // 70

gold *= 10;
console.log(gold); // 700

gold /=10;
console.log(gold); // 70

gold -=10;
console.log(gold); // 60

gold %= 2;
console.log(gold); // 0

let numberOfStudents = 0;

numberOfStudents += 1;
console.log(numberOfStudents); // 1

numberOfStudents ++;
console.log(numberOfStudents); // 2

++numberOfStudents;
console.log(numberOfStudents); // 3

console.log(numberOfStudents++); // 3 why
console.log(numberOfStudents); // 4 Why

console.log(++numberOfStudents); // 5

numberOfStudents --;
console.log(numberOfStudents); // 1

// Implement a program that takes an input for km/h and displays the result in m/s.
// ○ Input: 72
// ○ Output: 20

let speedKmh = 72;
let speedMs = convertKmHToMs(speedKmh);
console.log(speedMs);



