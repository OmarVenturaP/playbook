const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
console.log("1.- Nombres de Explorers")
explorers.forEach(nombre => console.log(nombre.name));
console.log("")
console.log("2.- Nombres de Stack")
explorers.forEach(stack => console.log(stack.stack));
console.log("")
console.log("3.- Nueva lista de Stack")
const explorersStack = explorers.map((stack) => stack.stack)
console.log(explorersStack);
console.log("")
console.log("4.- Filtrando Stacks 'JS'")
const explorersStackJS = explorers.filter((stack) => stack.stack.includes('js'))
console.log(explorersStackJS);
console.log("")
console.log("5.- Filtrando explorers que viven en CDMX")
const explorersCDMX = explorers.filter((stack) => stack.city === 'CDMX')
console.log(explorersCDMX);
console.log("")
console.log("6.- Usar reduce para sumar los ejercicios completados")
const sumaEjercicios = explorers.reduce((acumulador, completed) => acumulador + completed.exercises_completed, 0)
console.log(sumaEjercicios);
console.log("")
console.log("7.- Validar si al menos un explorer ha finalizado sus ejercicios usando Some")
const finishedFrondend = explorers.some((mission) => mission.missions.frontend.exercisesFinished === true)
console.log(finishedFrondend);
console.log("")
console.log("8.- Validar si al menos un explorer ha finalizado sus ejercicios usando Every")
const finishedOnboarding = explorers.every((mission) => mission.missions.onboarding.exercisesFinished === true)
console.log(finishedOnboarding);