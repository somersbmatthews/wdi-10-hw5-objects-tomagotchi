// 1. Make an object called `clicker`, which has a `clickCount` property, and a `click` method.
// 2. Have the `click` method increment the `clickCount` by 1 each time it is called.

// define the clicker object
let clicker = {
   // set clickCount to zero
  clickCount: 0,
  // define click method
  click: function(){
    this.clickCount++;
  }
}

// 1. Create an object called `myInformation`.
// 2. Assign to it your name, your current age, and a fact about you.
// 3. Inside `myInformation`, create a method called `statement` that returns a statement about you including your name, this fact, and how old you will be in 10 years.
// 4. Inside `myInformation`, create another function that can be used to increment the value of your age by 1 each time that you call it.
// 5. It's your birthday! Call this new method that you made that will increase your age.
// 6. Create another function that can be used to change the value of your `name`.
// 7. You're feeling funky and decide that your new name is `Rumpelstiltskin`. Call the method that will update your name and assign this new name. Log your object to confirm the changes.

// define myInformation object
let myInformation = {
  name: 'Somers',
  age: 35,
  fact: 'hates avacado',
  // define statement method
  statement: function(){
    return this.name, this.fact, this.age + 10;
  },
  // define ageAYear method that ads one to year
  ageAYear: function(){
    this.age++;
  },
  // define changeName method that asks for your name and then saves
  changeName: function(){
    let name = prompt("what is your name?");
    this.name = name;
  },
  // define setNameToRumple method that sets the string "Rumplestiltskin"
  setNameToRumple: function(){
    this.name = "Rumpelstiltskin";
  }
}

// Create an object called greeter.
// Inside the greeter object, create a method called hello that takes a name as a parameter and returns a greeting message followed by the name parameter.
// Example: Oh hello there, Matthew
//
// Create another method inside greeter called goodbye that takes a name as a parameter and returns a farewell greeting followed by the name parameter.
// Example: Arrivederci, Matthew!
//
// Create a final method inside greeter called whoAreYou that takes a name as a parameter and returns "Oh right! ", followed by the name parameter, followed by " how could I forget...!"
// Example: Oh right! Matthew how could i forget...!
//
// Play around executing your functions by accessing them through the object.

// define the greeter object
let greeter = {
  // define hello method that says hello
  hello: function(name){
    console.log("Oh hello there, " + name);
  },
  // define goodbye function that says arrivederci
  goodbye: function(name){
    console.log("Arrivederci, " + name);
  },
  // define whoAreYou function that says "Oh right! ...
  whoAreYou: function(name){
    console.log("Oh right! " + name + " how could I forget...!");
  }
}

// Make an object called `stringCollector`, which has:
// 1. a `collection` property - an array to hold strings
// 2. a `collect` method which takes a string as a parameter
// 3. the string collector prefers the strings to be totally reversed in their collection, however, so make sure to reverse it before adding it to the collection
// 4. add an `admireCollection` method which prints out each string in the collection to the console, one line at a time

// define object stringCollector
let stringCollector = {
  collection: [],
  // define collect method that adds to the collection array
  collect: function(str){
    let newStr = str.split("").reverse().join("");
    this.collection.push(newStr);
  },
  // define admireCollection method that displays the collection array
  admireCollection: function(){
    for(let i = 0; i<this.collection.length; i++) {
      console.log(this.collection + "\n");
    }
  }
}


// Make an object called atm which has two properties:
//   totalCash, the total amount of cash in the atm
// dispenseTwenties, a method with takes a number of twenties and, if there is enough cash, returns the total number of cash it is giving out.
// If there is not enough cash, return null instead.

let atm = {
  totalCash: 4000,
  // define method that gives 20 dollar denominations
  dispenseTwenties: function(numOfTwenties){
    if((this.totalCash - (20*numOfTwenties))<0){
      return null;
    } else {
      return 20*numOfTwenties
    }

  }
}
//
// 1. Create an object called `Leonardo`.
// 2. Leonardo should have a name attribute of "Leonardo", a color attribute of "Blue", and a weapon attribute of "Katana".
// 3. Leonardo should also have a boolean property called pizzaEaten that is initially set to false.
// 4. Add a method to Leonardo called eatPizza() which does the following:
//     - If pizzaEaten is true, print out "Leonardo has already eaten pizza" and set pizzaEaten to false.
//     - If pizzaEaten is false, print out "Leonardo is eating pizza" and set pizzaEaten to true.

let Leonardo = {
  name: "Leonardo",
  color: "Blue",
  weapon: "Katana",
  pizzaEaten: false,
  // define method that sets pizzaeaten to false
  eatPizza: function(){
    if(this.pizzaEaten){
      console.log("Leaonard has already eaten Pizza.");
      this.pizzaEaten = false;
    } else {
      console.log("Leonardo is eating pizza");
      this.pizzaEaten = true;
    }
  }
}


// 1. Create an object called `calculator`
// 2. Create a property called `output`
// 3. Create a method inside your object that will multiply two numbers and change the `output` value to this current value. This method should also log the value of `output`.
// 4. Create a function that will divide two numbers. It should also change the `output` value to this current value. This method should also log the value of `output`.
// 5. Practice using your calculator with some pairs (10, 2), (-2, 8), (2, 2).
// 6. If there's additional time, add methods for `addition` and `subtraction`


let calculator = {
  output: 0,
  // define method that multiplies two numbers
  multiply: function(num1, num2){
    this.output = num1*num2;
    console.log(this.output);
  },
  // define method that divides two numbers
  divide: function(num1, num2){
    this.output = num1/num2;
    console.log(this.output);
  },
  // define method that adds two numbers
  addition: function(num1, num2){
    this.output = num1+num2;
    console.log(this.output);
  },
  // define method that subtracts two numbers
  substraction: function(num1, num2){
    this.output = num1-num2;
    console.log(this.output);
  }

}
