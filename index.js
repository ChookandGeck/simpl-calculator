let screenDisplay = document.querySelector(".screen");
let buttons = document.querySelectorAll("button");

let calculations = [];
let acumeCalc;

buttons.forEach((but) => but.addEventListener("click", () => calculate(but)));

function calculate(but) {
  let value = but.textContent;
  if (value === "c") {
    screenDisplay.textContent = ".";
    calculations = [];
  } else if (value === "=") {
    screenDisplay.textContent = eval(acumeCalc);
  } else {
    calculations.push(value);
    acumeCalc = calculations.join("");
    screenDisplay.textContent = acumeCalc;
  }
}
