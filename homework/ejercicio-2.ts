// Si una variable no va a sufrir modificaciones entonces se usarán las constantes y se nombrarán en mayúscula.
// let kilometers -> const KILOMETERS
const KILOMETERS: number = 10
// Si una variable no va a sufrir modificaciones entonces se usarán las constantes y se nombrarán en mayúscula.
// let miles -> const MILES
const MILES: number = KILOMETERS * 0.62

console.log(`${KILOMETERS} kilómetros = ${MILES} millas`)
