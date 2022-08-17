// Si una variable no va a sufrir modificaciones entonces se usarán las constantes y se nombrarán en mayúscula.
// let numbers -> const NUMBERS
// Al realizar el anterior cambio, el programa da un error de ámbito. El nombre NUMBERS ya está asignado a una constante en el ejercicio anterior. Por esta razón debemos buscar otro nombre que diga lo mismo.
// const NUMBERS -> const MY_NUMBERS
const MY_NUMBERS = [1, 6, 8, 4, 2, 7, 10, 3, 5]

for (let i = 0; i < MY_NUMBERS.length; i++) {
  if (MY_NUMBERS[i] % 2 == 0) {
    console.log(MY_NUMBERS[i], 'es par')
  } else {
    console.log(MY_NUMBERS[i], 'es impar')
  }
}
