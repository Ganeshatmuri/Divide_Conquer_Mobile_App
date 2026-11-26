export function factorial(number: number): number {
  if (
    !Number.isFinite(number) ||
    !Number.isInteger(number) ||
    number < 0
  ) {
    throw new Error("Factorial requires a non-negative integer");
  }

  if (number > 170) {
    throw new Error("Number too large");
  }

  let result = 1;

  for (let i = 2; i <= number; i++) {
    result = result * i;
  }

  return result;
}

export function squareRoot(number: number): number {
  if (!Number.isFinite(number) || number < 0) {
    throw new Error("Invalid number for square root");
  }

  return Math.sqrt(number);
}

export function calculate(
  first: number,
  second: number,
  operator: string
): number {
  switch (operator) {
    case "+":
      return first + second;

    case "-":
      return first - second;

    case "*":
      return first * second;

    case "/":
      if (second === 0) {
        throw new Error("Cannot divide by zero");
      }
      return first / second;

    case "%":
      return first % second;

    default:
      throw new Error("Invalid operator");
  }
}