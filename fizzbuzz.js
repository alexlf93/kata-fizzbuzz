function fizzBuzz(variable) {
  if (isNaN(variable)) {
    return "no es un numero";
  }

  if (variable % 5 === 0 && variable % 3 === 0) {
    return "Fizzbuzz";
  }

  if (variable % 3 === 0) {
    return "Fizz";
  }

  if (variable % 5 === 0) {
    return "Buzz";
  }

  if (!isNaN(variable)) {
    return variable;
  }
}

module.exports = fizzBuzz;
