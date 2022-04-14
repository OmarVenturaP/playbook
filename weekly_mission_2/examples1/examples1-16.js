const users = [
    { name: 'A', age: 150 },
    { name: 'B', age: 50 },
    { name: 'C', age: 100 },
    { name: 'D', age: 22 },
  ]
  
  users.sort((positionA, positionB) => { // podemos invocar una función
    if (positionA.age > positionB.age) return -1
    if (positionA.age < positionB.age) return 1
    return 0
  })
  
  console.log("Ejemplo 16")
  console.log("Ordenando una lista de objetos de manera descendente por la edad")
  console.log(users) // sorted descending

  users.sort((positionA, positionB) => { // podemos invocar una función
    if (positionA.age < positionB.age) return -1
    if (positionA.age > positionB.age) return 1
    return 0
  })
  console.log("Ordenando una lista de objetos de manera ascendente por la edad")
  console.log(users) // sorted ascending