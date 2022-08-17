function max(a: number, b: number, c: number) {
  let maxArgument = a

  if (b > maxArgument) {
    maxArgument = b
  } else if (c > maxArgument) {
    maxArgument = c
  }

  return maxArgument
}

// Si una variable no va a sufrir modificaciones entonces se usarán las constantes y se nombrarán en mayúscula.
// let maxValue -> const MAX_VALUE
const MAX_VALUE = max(5, 2, 6)
console.log(MAX_VALUE)
