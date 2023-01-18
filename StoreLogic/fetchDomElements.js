let selectList = document.getElementById("list");
let laptopInfoParagraph = document.getElementById("laptop-info");
let computerImage = document.getElementById("compImage");
let computerTitle = document.getElementById("computerTitle");
let largeComputerDescription = document.getElementById(
  "largeComputerDescription"
);
let computerPrice = document.getElementById("computerPrice");
let workButton = document.getElementById("work");
let salary = document.getElementById("salary");
let transferButton = document.getElementById("transfer");
let workAmount = 0;
let balance = document.getElementById("currentBalance");
let loanButton = document.getElementById("getLoan");
let alreadyLoanedMoney = false;
let currentDebt = 0;
let buyButton = document.getElementById("buyNow");
let selectedComputerPrice = document.getElementById("computerPrice");

/**
 * This is a sample function.
 * @param {Number} value - The amount of debt you want currentDebt variable to store.
 * @returns {} Nothing.
 */
function setDebt(value) {
  currentDebt = value;
}

/**
 * This is a sample function.
 * @param {none} none accepts no parameter.
 * @returns {Number} the current debt.
 */
function getDebt() {
  return currentDebt;
}

export {
  selectList,
  laptopInfoParagraph,
  computerImage,
  setDebt,
  getDebt,
  computerTitle,
  largeComputerDescription,
  computerPrice,
  workButton,
  salary,
  transferButton,
  workAmount,
  balance,
  loanButton,
  alreadyLoanedMoney,
  currentDebt,
  buyButton,
  selectedComputerPrice,
};
