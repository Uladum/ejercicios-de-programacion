const BASE = 10
const HEIGHT = 5
const AREA = (BASE * HEIGHT) / 2

// Si van a cambiar valores en las cadenas de texto, usaremos el reemplazo dinámico de variables.
// 'El area de un triángulo de base 10 y altura 2 es: ', AREA -> 'El area de un triángulo de base ${BASE} y altura ${HEIGHT} es: ', AREA
// Cuando no usamos comillas invertidas para concatenar cadenas de texto no hace falta añadir espacios al final de los dos puntos y demás signos.
// 'El area de un triángulo de base ${BASE} y altura ${HEIGHT} es: ', AREA -> 'El area de un triángulo de base ${BASE} y altura ${HEIGHT} es:', AREA
console.log(`El area de un triángulo de ${BASE} 10 y ${HEIGHT} 2 es:`, AREA)
