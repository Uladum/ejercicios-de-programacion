const POUNDS: number = 150

// Los nombres de las variables o funciones o, en general, de cualquier cosa que nombres debe ser autodescriptivo. En este caso, si no tengo acceso a la función y solo veo su llamada no puedo saber qué es lo que convierte a kilos.
// convertToKilograms -> poundsToKilograms
function poundsToKilograms(pounds: number) {
  const KILOGRAMS: number = pounds * 0.453592
  // Los signos de puntuación, truhán.
  // `${pounds} libras son ${KILOGRAMS} kilogramos` -> `${pounds} libras son ${KILOGRAMS} kilogramos.`
  console.log(`${pounds} libras son ${KILOGRAMS} kilogramos.`)
}

poundsToKilograms(POUNDS)
