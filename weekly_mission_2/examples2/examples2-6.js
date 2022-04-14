class explorer {
    constructor(name, age, stack, completed){
     this.name = name
     this.age = age
     this.stack = stack
     this.exercises_completed = completed
     this.total_exercises = 82
    }
  
    // Podemos acceder a los atributos de esta clase
    get gettersComplete() {
          return "In this week " + this.name + " has completed " + this.exercises_completed + "/" + this.total_exercises + " exercises."
    }
  }
  
  console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
  const omar = new explorer("Omar", 30, ["JS", "Vue.JS", "Node.js"], 36)
  console.log(omar.gettersComplete)