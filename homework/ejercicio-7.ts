function max(a: number, b: number, c: number) {
  let maxArgument = a

  if (b > maxArgument) {
    maxArgument = b
  } else if (c > maxArgument) {
    maxArgument = c
  }

  return maxArgument
}

let maxValue = max(5, 2, 6)
console.log(maxValue)
