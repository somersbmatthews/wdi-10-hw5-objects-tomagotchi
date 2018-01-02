var tamagotchi1 = {
  name: "Simon",
  creatureType: "Dragon",
  food: 10,
  stamina: 10,
  health: 10,
  cry: function(){
    this.food--;
    console.log("Waaaaaa!");
    console.log("There is " + this.food + " in the tamagotchi's tummy.");
  },
  puke: function(){
    console.log(this.name + ": Bleeeeh :O~~");
  },
  yawn: function(){
    console.log(this.name + ": Yaaaawwwwn!");
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
