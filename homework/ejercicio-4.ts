let numbers: number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5]
let maxNumber: number = numbers[0]

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i]
  }
}

console.log('El mayor es: ', maxNumber)
