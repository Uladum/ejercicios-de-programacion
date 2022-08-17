// Si una variable no va a sufrir modificaciones entonces se usarán las constantes y se nombrarán en mayúscula.
// let heroes -> const HEROES
// Al realizar el anterior cambio, el programa da un error de ámbito. El nombre HEROES ya está asignado a una constante en el ejercicio anterior. Por esta razón debemos buscar otro nombre que diga lo mismo.
// const HEROES -> const MY_HEROES
// Esos guiones, truhán.
// 'She Hulk' -> 'She-Hulk'
const MY_HEROES = [
  'Doom',
  'Dr. Strange',
  'Hulk',
  'She-Hulk',
  'Spiderman',
  'Captain Marvel'
]

// En la programación se suele confundir la palabra letter en algunos contextos. Para evitar ciertor malentendidos, al referirnos a una letra usamos char.
// letter: string -> char: string
function heroesThatStartsWith(names: string[], char: string) {
  let newHeroes: string[] = []

  for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith(char)) {
      newHeroes.push(names[i])
    }
  }

  return newHeroes
}

let herosWithLetterS = heroesThatStartsWith(MY_HEROES, 'S')
console.log(herosWithLetterS)
