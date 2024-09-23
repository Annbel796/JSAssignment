let studentNames = ["Olivia", "Ethan", "Isabella", "Emma", "Anna", "Lukas"];
console.log("We have " + studentNames.length + " students");

studentNames [2] = "Michael";
studentNames.push("Ben");
console.log("We have " + studentNames.length + " students");

 for (let i =0; i <  studentNames.length; i++) {
console.log("Good morning " + studentNames[i] + "!");
}

 // ○ Roll 10 000 times for a number between 0 and 10 by using:
// ■ Math.floor(Math.random() * 11);
// ○ And count the number of times that you have rolled that specific number
// ○ : I rolled 2 a total of 998 times.

console.log("I will roll 10 000 numbers between 0 and 10:");

let randomNumberCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
randomNumberCount[0] += 1;

for (let i =0; i < 10000; i++){
let randomNumber = getRandomInt(10);
// Add a random number to box from 0 to 9
randomNumberCount[randomNumber] += 1;
//console.log(randomNumber);
}
function getRandomInt(max) {
return Math.floor(Math.random() * max);
}
//console.log(randomNumberCount);
for (let i =0; i < randomNumberCount.length; i++){
  console.log("I rolled " + i + " a total of " + randomNumberCount[i] + " times");
}


// let number = 0;
// for (let i = 0; i < number.length; i++) {
//   console.log("I rolled " + getRandomInt() + " a total of " + number + " times.");
// }
