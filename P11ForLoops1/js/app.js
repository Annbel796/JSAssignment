// Print 13 different random numbers between 1 and 6.
// ○ Output: 1 6 2 5 4 6 2 5 1 3 4 4 6

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (var i =0; i < 13; i++){
console.log(getRandomInt(6));
}

//Start at 1, multiply the number of each iteration by 2 and stop after 1024. Print each number
// to the console.
// ○ Output: 1 2 4 8 16 32 64 128 256 512 1024

for (let i = 1; i < 1024 ; i*2) {
  console.log(i);
}
