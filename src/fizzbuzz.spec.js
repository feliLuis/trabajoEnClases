import fizzbuzz from "./fizzbuzz.js";

describe("fizzbuzz", () => {
  it("deberia generar el mismo numero si el numero no sigue una regla", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });

  it("deberia generar el 1 si el numero no sigue una regla", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

  it("deberia generar Fizz si el numero es 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });

  it("deberia generar Fizz si el numero es 3 o multiplo de 3", () => {
    expect(fizzbuzz(6)).toEqual("Fizz");
  });

  it("deberia generar Buzz si el numero es 5", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });

  it("deberia generar Buzz si el numero es 5 o multiplo de 5", () => {
    expect(fizzbuzz(10)).toEqual("Buzz");
  });

  it("deberia generar FizzBuzz si el numero es multiplo de 3 y 5", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });
});