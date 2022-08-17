// Si una variable no va a sufrir modificaciones entonces se usarán las constantes y se nombrarán en mayúscula.
// let numbers -> const NUMBERRS
const NUMBERS: number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5]
let maxNumber: number = NUMBERS[0]

for (let i = 0; i < NUMBERS.length; i++) {
  if (NUMBERS[i] > maxNumber) {
    maxNumber = NUMBERS[i]
  }
}

// Cuando no usamos comillas invertidas para concatenar cadenas de texto no hace falta añadir espacios al final de los dos puntos y demás signos.
// 'El mayor es: ' -> 'El mayor es:'
console.log('El mayor es:', maxNumber)
