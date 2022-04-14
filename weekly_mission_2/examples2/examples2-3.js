class Student {
    // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    constructor(name, lastName, age, hardSkills){
      this.name = name
      this.lastName = lastName
      this.age = age
      this.hardSkills = hardSkills
      }
  }
// Crear un objeto de la clase Student (esto se le llama instanciación)
const omarStudent = new Student("Omar", "Ventura", 25, ["JavaScript", "Vue.JS", "NodeJs"])
console.log("Ejemplo 3: Instanciar un objeto con atributos")
console.log(omarStudent)