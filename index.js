// // Following along with examples.

// function Monday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
// }

// function runFiveMiles() {
//   console.log("Go for a five-mile run");
// }

// function liftWeights() {
//   console.log("Pump iron");
// }

// function swimFortyLaps() {
//   console.log("Swim 40 laps");
// }

// function Monday() {
//     exerciseRoutine(liftWeights);
//   }
  
//   function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
// }

// function morningRoutine(exercise) {
//   let breakfast;

//   if (exercise === liftWeights) {
//     breakfast = "protein bar";
//   } else if (exercise === swimFortyLaps) {
//     breakfast = "kale smoothie";
//   } else {
//     breakfast = "granola";
//   }

//   exerciseRoutine(exercise);

//   // we could give this function a name if we wanted to, but since
//   // it's only available _inside_ morningRoutine(), we don't need to
//   return function () {
//     console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//   };
// }
// morningRoutine()

// Actual code:
function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFunction() {
    console.log('This is a named function');
  };
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log('This is an anonymous function');
  };
}