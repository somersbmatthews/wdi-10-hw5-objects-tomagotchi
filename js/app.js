// 1. Make an object called `clicker`, which has a `clickCount` property, and a `click` method.
// 2. Have the `click` method increment the `clickCount` by 1 each time it is called.

let clicker = {
  clickCount: 0,
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

let myInformation = {
  name: 'Somers',
  age: 35,
  fact: 'hates avacado',
  statement: function(){
    return this.name, this.fact, this.age + 10;
  },
  ageAYear: function(){
    this.age++;
  },
  changeName: function(){
    let name = prompt("what is your name?");
    this.name = name;
  },
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

let greeter = {
  hello: function(name){
    console.log("Oh hello there, " + name);
  },
  goodbye: function(name){
    console.log("Arrivederci, " + name);
  },
  whoAreYou: function(name){
    console.log("Oh right! " + name + " how could I forget...!");
  }
}
