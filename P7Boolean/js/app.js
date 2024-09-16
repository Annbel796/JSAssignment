//Goal:
// Output:You are a child: False
// Output:You are a teenager: False
// Output:You are an adult: True

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
