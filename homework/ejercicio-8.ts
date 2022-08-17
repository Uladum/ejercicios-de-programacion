// Si una variable no va a sufrir modificaciones entonces se usarán las constantes y se nombrarán en mayúscula.
// let heroes -> const HEROES
// Esas tildes, truhán.
// 'Ciclope' -> 'Cíclope'
const HEROES = ['Deadpool', 'Cíclope', 'Magneto', 'Profesor Charles Xavier']

function largestNameOfArray(arg1: string[]) {
  let maxName = arg1[0]

  for (let i = 0; i < arg1.length; i++) {
    if (arg1[i] > maxName) {
      maxName = arg1[i]
    }
  }

  return maxName
}

// Si una variable no va a sufrir modificaciones entonces se usarán las constantes y se nombrarán en mayúscula.
// let hero -> const HERO
const HERO = largestNameOfArray(HEROES)

console.log(HERO)
