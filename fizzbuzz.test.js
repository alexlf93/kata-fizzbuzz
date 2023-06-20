const fizzBuzz = require("./fizzbuzz.js");

test("si No es un numero", () => {
  expect(fizzBuzz("valor")).toBe("no es un numero");
});

test("si es un multiplo de 3 que devuelva Fizz", () => {
  expect(fizzBuzz(9)).toBe("Fizz");
});

test("si es un multiplo de 5 que devuelva Buzz", () => {
  expect(fizzBuzz(25)).toBe("Buzz");
});

test("si es un numero multiplo de 3 y de 5", () => {
  expect(fizzBuzz(15)).toBe("Fizzbuzz");
});

test("si es un numero", () => {
  expect(fizzBuzz(11)).toBe(11);
});
