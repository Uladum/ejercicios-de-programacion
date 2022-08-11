let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier']

function largestNameOfArray(arg1: string[]) {
  let maxName = arg1[0]

  for (let i = 0; i < arg1.length; i++) {
    if (arg1[i] > maxName) {
      maxName = arg1[i]
    }
  }

  return maxName
}

let hero = largestNameOfArray(heroes)

console.log(hero)
