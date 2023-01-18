import * as domElements from "./fetchDomElements.js";
domElements.workButton.addEventListener("click", work);
domElements.transferButton.addEventListener("click", transferWorMoney);

/**
 * transferWorMoney function transfers money from salary to balance and pay off debt if any.
 * A 10% fee is applied when paying off debt.
 *
 * @param {none} none - This function does not accept any parameters.
 * @returns {none} This function does not return any value.
 */
function transferWorMoney() {
  let money = 0;
  if (domElements.currentDebt > 0) {
    domElements.setDebt(
      domElements.currentDebt - domElements.currentDebt * 0.1
    );
    money = domElements.getDebt() - Number(domElements.salary.innerHTML);
    domElements.setDebt(
      domElements.getDebt() - Number(domElements.salary.innerHTML)
    );
    alert(
      "Your current debt after transfering money (including 10% fee): " +
        domElements.getDebt()
    );
    domElements.balance.innerHTML =
      Number(domElements.balance.innerHTML) - Number(money);
  } else {
    money = Number(domElements.salary.innerHTML);
    domElements.balance.innerHTML =
      Number(domElements.balance.innerHTML) + Number(money);
  }
  domElements.salary.innerHTML = Number(0);
}

/**
 * each time you wor, the work function will increase your salary with +100.
 *
 * @param {none} none - This function does not accept any parameters.
 * @returns {none} This function does not return any value.
 */
function work() {
  domElements.salary.innerHTML =
    Number(domElements.salary.innerHTML) + Number(100);
}
