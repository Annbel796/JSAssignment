// Task1
const birthYear = 2030;
const curentYaer = 2024;
let ageOfPercent = curentYaer - birthYear;
console.log(ageOfPercent);

// Save to a let variable named isChild, when the age is from 0 till 10.
// 10 or lower
let isChild = (ageOfPercent >= 0) && (ageOfPercent <= 10);

// Save to a let variable named isTeenager, when the age is from 11 to 17
// <= 11. <= 17
let isTeenager = (ageOfPercent >= 11) && (ageOfPercent <= 17);

// Save to a let variable named isAdult, when the age is 18 or more.
// >= 18
let isAdult = ageOfPercent >= 18;

console.log(isChild);
console.log(isTeenager);
console.log(isAdult);

// Task2
let heigthFromGround = 20;
let playerTouchGround = heigthFromGround === 0;
let playerHasJetpack = true;

if (playerTouchGround) {
  // Runns when playerToucGround = true
  console.log("Player is on the ground.");
  console.log("Player can jump.");
}
else if (playerHasJetpack) {
  // Runnes when palyerHasJetpack = true;
  console.log("Player Jets Away!")
}
else {
  // Runns when playerToucGround = false && palyerHasJetpack = false;
  console.log("Player is not touching the ground.");
  console.log("You cannot jump right now.");
}

//console.log("Will you see this?");


