import * as domElements from "./fetchDomElements.js";
domElements.loanButton.addEventListener("click", takeLoan);
domElements.buyButton.addEventListener("click", purchaseItem);

/**
 * takeLoan is a function that allows users to take a loan.
 * It prompts the user to enter the loan amount, then checks if the user has any outstanding debt.
 * If the user has outstanding debt, the function displays an alert and returns without processing the loan.
 * If the loan amount is not within the allowable limit, the function displays an alert and returns without processing the loan.
 *
 * @param {none} none - This function does not accept any parameters.
 * @returns {none} This function does not return any value.
 */
function takeLoan() {
  let loanAmount = prompt("How much would you like to loan?");
  console.log(domElements.currentDebt);
  if (domElements.getDebt() > 0) {
    alert(
      "Sorry, you cant loan more than once!" +
        "\n" +
        "You have to pay back the current loan you have which is at: "
    );
    return;
  }
  if (!(Number(loanAmount) > Number(domElements.balance.innerHTML) * 2)) {
    domElements.balance.innerHTML =
      Number(domElements.balance.innerHTML) + Number(loanAmount);
    domElements.setDebt(Number(loanAmount));
  } else {
    alert(
      "You can not take a loan that is more than two times larger than your current balance!"
    );
  }
}

/**
 * purchaseItem checks if the user's balance is enough to purchase the selected item,
 * and if true, updates the balance and alerts the user of the purchase.
 * Otherwise, it alerts the user of insufficient balance.
 *
 * @param {none} none - This function does not accept any parameters.
 * @returns {none} This function does not return any value.
 */
function purchaseItem() {
  if (
    Number(domElements.balance.innerHTML) >=
    Number(domElements.selectedComputerPrice.innerHTML)
  ) {
    domElements.balance.innerHTML = Math.abs(
      Number(domElements.balance.innerHTML) -
        Number(domElements.selectedComputerPrice.innerHTML)
    );
    alert("Congratulations, you have bought the selected item!");
  } else {
    alert("Your balance is less than the item price!");
  }
}
