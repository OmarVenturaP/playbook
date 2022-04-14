const scores = [
    { name: 'Alfredo', score: 95 },
    { name: 'José', score: 98 },
    { name: 'María', score: 80 },
    { name: 'Edmundo', score: 50 },
    { name: 'Miguel', score: 85 },
    { name: 'Jimena', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((score) => score.score >= 80)
  console.log("Ejemplo 8: Filtrando elementos por score cuando son igual o mayores a 80")
  console.log(scoresGreaterEighty)