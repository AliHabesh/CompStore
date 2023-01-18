import * as domElements from './fetchDomElements.js';
domElements.selectList.addEventListener("click", displayLaptopInformation);
let list;
function fillList(list) {
  for (var i = 0; i < list.length; i++) {
    var option = document.createElement("option");
    option.value = list[i];
    option.text = list[i].title;
    domElements.selectList.appendChild(option);
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
      domElements.laptopInfoParagraph.innerText = list[i].specs[0] + "\n"+list[i].specs[1];
      domElements.computerImage.src = 'https://hickory-quilled-actress.glitch.me/'+list[i].image;
      domElements.computerTitle.innerText = list[i].title;
      domElements.computerPrice.innerText = list[i].price;
      domElements.largeComputerDescription.innerText = list[i].description;
    }
  }
}