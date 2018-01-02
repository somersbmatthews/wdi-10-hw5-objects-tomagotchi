//
// 1. Make a file inside your `homework` folder for w02d05 called `iterator_answers.js`.
// 2. Write all of your code in `iterator_answers.js`.
//
// :elephant: Remember to test each of your answers!
// ## forEach
// `.forEach` is a basic iterator; all it does is step through each item in an array.
//
// 1. Using the array `words`, log each word in `words` in upper case using `.forEach.`
//
const words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];
function upperCaser(){
  words.forEach(function(word){
    // stores the uppercase word in each element of the array to the variable str
    let str = word.toUpperCase()
    // logs str
    console.log(str);
  });
};
upperCaser();

// ## Map
// `.map` is like `.forEach` but it returns a new array with the selections and / or transformations applied in the iterator. `.map` saves to a new array and does not alter the original array.
//
// 1. Map to a new array that stores only the first letter from each word in `more_words`.
const more_words = ["Joe", "Overeats", "Eggs"];
function arrayMapper() {

let newArray = more_words.map(function(word){

    return word.substring(0,1);

  });
  console.log(newArray); 
};

arrayMapper();
