const pig  = {
    name : "Kie",
    type : "pig",
    age : 9,
    makeSound() {
      console.log(pig.name + " is a " + pig.age + " year old " + pig.type + " that goes Oink! "); 
    }
  };
  const sheep = {
    name : "Lama",
    type : "sheep",
    age : 6,
    makeSound() {
      console.log(sheep.name + " is a " + sheep.age + " year old " + sheep.type + " that goes Baaa! "); 
    }
  }
  const dog = {
    name : "Tiger",
    type : "dog",
    age : 4,
    makeSound() {
      console.log(dog.name + " is a " + dog.age + " year old " + dog.type + " that goes woof! "); 
    }
  }
  pig.makeSound();
  sheep.makeSound();
  dog.makeSound();