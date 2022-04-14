const numbers4 = [1, 2, 3, 4, 5]
const numbersSquare = numbers4.map(function(num){ return num * num})
// También puedes escribir la función como fat arrow
//const numbersSquare = numbers4.map((num) => return num * num)
console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado")
console.log(numbersSquare)