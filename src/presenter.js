import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const firstMult = document.querySelector("#primerMulti-numero");
const secondMult = document.querySelector("#segundoMulti-numero");
const formMult = document.querySelector("#multi-form");
const divMult = document.querySelector("#resultado-divMulti");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

formMult.addEventListener("submitMulti", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstMult.value);
  const secondNumber = Number.parseInt(secondMult.value);

  divMult.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
