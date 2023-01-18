import * as domElements from './fetchDomElements.js';
domElements.loanButton.addEventListener("click", takeLoan);
domElements.buyButton.addEventListener("click", purchaseItem);
console.log(domElements.currentDebt + " HERE")
console.log(domElements.getDebt()+ " HERERERERE");

/**
 * This is a sample function.
 * @param {string} name - The name of the person.
 * @returns {string} The greeting.
 */
function takeLoan(){
    let loanAmount = prompt('How much would you like to loan?')
    console.log(domElements.currentDebt)
    if(domElements.getDebt() > 0){
      
      alert('Sorry, you cant loan more than once!'+"\n"+'You have to pay back the current loan you have which is at: ')
      return;
    }
    if(!(Number(loanAmount) > Number(domElements.balance.innerHTML)*2)){
      domElements.balance.innerHTML = Number(domElements.balance.innerHTML)+Number(loanAmount);
      domElements.setDebt(Number(loanAmount));
    }else{
      alert('You can not take a loan that is more than two times larger than your current balance!');
    }
  }

  function purchaseItem(){
    if(Number(domElements.balance.innerHTML) >= Number(domElements.selectedComputerPrice.innerHTML)){
      domElements.balance.innerHTML = Math.abs(Number(domElements.balance.innerHTML) - Number(domElements.selectedComputerPrice.innerHTML));
      alert('Congratulations, you have bought the selected item!');
    }else{
      alert('Your balance is less than the item price!');
    }
  }