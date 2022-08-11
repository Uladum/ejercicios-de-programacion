let heroes = [
  'Doom',
  'Dr. Strange',
  'Hulk',
  'She Hulk',
  'Spiderman',
  'Captain Marvel'
]

function heroesThatStartsWith(names: string[], letter: string) {
  let newHeroes: string[] = []

  for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith(letter)) {
      newHeroes.push(names[i])
    }
  }

  return newHeroes
}

let herosWithLetterS = heroesThatStartsWith(heroes, 'S')
console.log(herosWithLetterS)
