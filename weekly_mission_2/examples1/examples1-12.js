const scores12 = [
    { name: 'Alfredo', score: 95 },
    { name: 'José', score: 80 },
    { name: 'María', score: 50 },
    { name: 'Edmundo', score: 85 },
    { name: 'Miguel', score: 100 },
  ]
  
  const score_less_than_80 = scores12.find((user) => user.score < 80)
  console.log("Ejemplo 12. Name score found:" + score_less_than_80.name + " and the score is " + score_less_than_80.score)