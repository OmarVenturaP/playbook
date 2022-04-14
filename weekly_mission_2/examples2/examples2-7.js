class MissionCommander {
    constructor(name, mission){
        this.name = name
        this.mission = mission
        this.students = 0
        this.lives = 0
    }
    
    get getStudents(){
     return this.students
    }

    get getLives(){
     return this.lives
    }
  
    set setStudents(students){
      this.students = students
    }
  
    set setLives(lives){
      this.lives = lives
    }
    get getInfo(){
        return "In the mission " + this.mission + ", the Mission Comander " + this.name + " has " + this.students + " students and has made " + this.lives + " lives."
    }
  }
  
  console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
  const mcNode = new MissionCommander("Carlo Gilmar", "NodeJS")

  // actualizamos los atributos por medio de los setters
  mcNode.setStudents = 1000
  mcNode.setLives = 5
  
//   console.log(mcNode.getStudents) // toma los atributos ingresados con el setter
//   console.log(mcNode.getLives)// toma los atributos ingresados con el setter

  console.log(mcNode.getInfo)