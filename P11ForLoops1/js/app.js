// Print 13 different random numbers between 1 and 6.
// ○ Output: 1 6 2 5 4 6 2 5 1 3 4 4 6

for (let i =0; i < 13; i++){
  console.log(getRandomInt(6));
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Start at 1, multiply the number of each iteration by 2 and stop after 1024. Print each number
// to the console.
// ○ Output: 1 2 4 8 16 32 64 128 256 512 1024

for (let i = 1; i <= 1024 ; i*=2) {
  console.log(i);
}

//Start at 10 and count down until 0. Print each number to the Console.
// ○ Output: 10 9 8 7 6 5 4 3 2 1 0

for (let i = 10; i >= 0 ; i--) {
  console.log(i);
}

//Write a function that has 2 number as parameters and returns the first number to the
// power of the second number
// ○ Input: 4, 24
// ○ Output: 281474976710656


function power (firstNumber, exponent){
  // cache result
  let result = firstNumber;
  for (let i = 1; i < exponent; i++){
  // multiply the result by the first Number
    result *= firstNumber;
  }
  return result;
}
console.log(power(4,24));

let result = Math.pow(4, 24)
console.log(result);

console.log(Math.pow(4,24));

//○ Output: 999 green bottles hanging on the wall. 999 green bottles hanging on
// the wall.
// ○ Output: And if one green bottle, should accidentally fall, there will be 998
// green bottles hanging on the wall.
// ○ Output… Until 0 bottles are remaining.

for (let i = 9; i >= 0; i--){
  console.log("There are " + i + "green bottles hanging on the wall " + i + "green bottles hanging on the wall. And if one green bottle, should accidentally fall, there will be " + i + "green bottles hanging on the wall");
}
