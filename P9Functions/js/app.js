// console.log("Move Forward.");
// console.log("Turn Right.");

// walk three steps forward.
walkTreeSteps();

// then turn around and walk three steps forward
turnAround();
walkTreeSteps();

// then turn left and walk three steps forward.
turnLeft();
walkTreeSteps();

// then turn left and walk one step forward.
turnLeft();
stepForward();

// then turn around and walk one step forward.
turnAround();
stepForward();

function stepForward() {
  console.log("Move Forward.");
}
function turnRight() {
  console.log("Turn Right.");
}

function turnLeft() {
  turnRight()
  turnRight()
  turnRight()
}

function walkTreeSteps(){
  stepForward();
  stepForward()
  stepForward();
}

 function turnAround() {
   turnRight();
   turnRight()
 }



