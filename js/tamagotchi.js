var tamagotchi1 = {
  name: "Simon",
  creatureType: "Dragon",
  food: 10,
  stamina: 10,
  health: 10,
  cry: function(){
    this.food--;
    console.log("Waaaaaa!");
    console.log("There is " + this.food + " in "+this.name+"'s tummy.");
  },
  puke: function(){
    this.health--;
    console.log(this.name + ": Bleeeeh :O~~");
    console.log(this.name +" has " +this.health+ " left.");
  },
  yawn: function(){
    this.stamina--;
    console.log(this.name + ": Yaaaawwwwn!");
    console.log(this.name +" has " +this.stamina+ " left.");
  }
}

// 2. Let's add a method of `cry` to our Tamagotchi that will log "Waaaaaa!!!" anytime the `cry` method is called.
//
// 3. Invoke the `cry` method to test that it works.

// 5. Write a method `yawn` into your Tamagotchi object that console.logs the Tamagotchi yawning when it is tired (example: `Yaaaawwwwn!`).
//
// 6. Invoke the `yawn` method.
// 7. Update the `yawn` and `puke` methods to output the Tamogatchi's name in the sentence with the yawn or puke action. Execute these methods to confirm the output.
// 8. Update the `cry` method to decrease the amount of food in the Tamagotchi's tummy.
// 9. In addition, the `cry` method should now also log a sentence that will tell us the amount of food in the Tamagotchi's tummy.

// Make it so that when puke is invoked, it decreases the object's health value by 1 and logs the new number to the console, and also logs the Tamagotchi's name
//
// Make it so that when yawn is invoked, it decreases the object's restedness value by 1 and logs the new number to the console, and also logs the Tamagotchi's name


var tamagotchi2 = {
  name: "Peter",
  creatureType: "Dragon",
  food: 10,
  stamina: 10,
  health: 10,
  cry: function(){
    this.food--;
    console.log("Waaaaaa!");
    console.log("There is " + this.food + " in "+this.name+"'s tummy.");
  },
  puke: function(){
    this.health--;
    console.log(this.name + ": Bleeeeh :O~~");
    console.log(this.name +" has " +this.health+ " left.");
  },
  yawn: function(){
    this.stamina--;
    console.log(this.name + ": Yaaaawwwwn!");
    console.log(this.name +" has " +this.stamina+ " left.");
  }
}

let player = {
  name: "Somers",
  sayName: function(){
    console.log("Hi, my name is "+this.name);
  },
  feedTamagotchi: function(name1, name2){
    name1.food++;
    name2.food++;
  },
  medicateTamagotchi: function(name1, name2){
    name1.health++;
    name2.health++;
  },
  knockOutTamagotchi: function(name1, name2){
    name1.stamina++;
    name2.stamina++;
  }
}
