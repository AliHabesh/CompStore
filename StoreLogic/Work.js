import * as domElements from './fetchDomElements.js';
domElements.workButton.addEventListener("click", work);
domElements.transferButton.addEventListener("click", transferWorMoney);
function transferWorMoney(){
    let money = 0;
    if(domElements.currentDebt > 0){
      domElements.setDebt(domElements.currentDebt - (domElements.currentDebt * .10));
      money = domElements.getDebt() - Number(domElements.salary.innerHTML);
      domElements.setDebt(domElements.getDebt() - Number(domElements.salary.innerHTML));
      alert('Your current debt after transfering money (including 10% fee): '+domElements.getDebt())
      domElements.balance.innerHTML = Number(domElements.balance.innerHTML) - Number(money);
    }else{
      money = Number(domElements.salary.innerHTML);
      domElements.balance.innerHTML = Number(domElements.balance.innerHTML) + Number(money);
    }
    domElements.salary.innerHTML = Number(0);
  }
  
  function work(){
    domElements.salary.innerHTML = Number(domElements.salary.innerHTML) + Number(100);
  }