const POUNDS: number = 150

function convertToKilograms(pounds: number) {
  const KILOGRAMS: number = pounds * 0.453592
  console.log(`${pounds} libras son ${KILOGRAMS} kilogramos`)
}

convertToKilograms(POUNDS)
