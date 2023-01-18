let selectList = document.getElementById("list");
selectList.addEventListener("click", displayLaptopInformation);
let laptopInfoParagraph = document.getElementById('laptop-info');
let computerImage = document.getElementById('compImage');
let computerTitle = document.getElementById('computerTitle');
let largeComputerDescription = document.getElementById('largeComputerDescription');
let computerPrice = document.getElementById('computerPrice');
let workButton = document.getElementById('work');
let salary = document.getElementById('salary');
let transferButton = document.getElementById('transfer');
let workAmount = 0; 
let balance = document.getElementById('currentBalance'); 
let loanButton = document.getElementById('getLoan'); 
let alreadyLoanedMoney = false;
let currentDebt = 0;
let buyButton = document.getElementById('buyNow');
let selectedComputerPrice = document.getElementById('computerPrice');



//Computer store logic --------------------------------------------
workButton.addEventListener("click", work);
transferButton.addEventListener("click", transferWorMoney);
loanButton.addEventListener("click", takeLoan);
buyButton.addEventListener("click", purchaseItem);


function transferWorMoney(){
  let money = 0;
  if(currentDebt > 0){
    currentDebt = currentDebt - (currentDebt * .10);
    money = Math.abs(currentDebt - Number(salary.innerHTML));
    currentDebt = currentDebt - Number(salary.innerHTML);
    alert('Your current debt after transfering money (including 10% fee): '+Math.abs(currentDebt))
    balance.innerHTML = Number(balance.innerHTML) - Number(money);
  }else{
    money = Number(salary.innerHTML);
    balance.innerHTML = Number(balance.innerHTML) + Number(money);
  }
    salary.innerHTML = Number(0);
}

function work(){
  console.log(Number(salary.value))
  salary.innerHTML = Number(salary.innerHTML) + Number(100);
}

function purchaseItem(){
  if(Number(balance.innerHTML) >= Number(selectedComputerPrice.innerHTML)){
    balance.innerHTML = Math.abs(Number(balance.innerHTML) - Number(selectedComputerPrice.innerHTML));
    alert('Congratulations, you have bought the selected item!');
  }else{
    alert('Your balance is less than the item price!');
  }

}

function takeLoan(){
  let loanAmount = prompt('How much would you like to loan?')
  if(currentDebt > 0){
    alert('Sorry, you cant loan more than once!'+"\n"+'You have to pay back the current loan you have which is at: ')
    return;
  }
  if(!(Number(loanAmount) > Number(balance.innerHTML)*2)){
    balance.innerHTML = Number(balance.innerHTML)+Number(loanAmount);
    currentDebt = Number(loanAmount);
  }else{
    alert('You can not take a loan that is more than two times larger than your current balance!');
  }
}


//API data retrieval -----------------------------------------------------------
let list;
function fillList(list) {
  for (var i = 0; i < list.length; i++) {
    var option = document.createElement("option");
    option.value = list[i];
    option.text = list[i].title;
    selectList.appendChild(option);
  }
}
async function fetchData() {
  const response = await fetch(
    "https://hickory-quilled-actress.glitch.me/computers"
  );
  list = await response.json();
  
  fillList(list);
  return list;
}
fetchData();

async function displayLaptopInformation(){
  var e = document.getElementById("list");
  var value = e.value;
  var text = e.options[e.selectedIndex].text;
  console.log(text);
  findLaptopInfoBasedOnName(text);

}

async function findLaptopInfoBasedOnName(laptopName){
  const response = await fetch(
    "https://hickory-quilled-actress.glitch.me/computers"
  );
  list = await response.json();

  for(let i = 0; i < list.length; i++){
    if(list[i].title == laptopName){
      laptopInfoParagraph.innerText = list[i].specs[0] + "\n"+list[i].specs[1];
      computerImage.src = 'https://hickory-quilled-actress.glitch.me/'+list[i].image;
      computerTitle.innerText = list[i].title;
      computerPrice.innerText = list[i].price;
      largeComputerDescription.innerText = list[i].description;
    }
  }
}

async function fetchComputerImage(url, compName){
  const response = await fetch(
    "https://hickory-quilled-actress.glitch.me/computers"
  );
  list = await response.json();
  for(let i = 0; i < list.length; i++){
    if(list[i].title == compName){
      computerImage.src = url;
    }
  }
  computerImage.src = url;
}

