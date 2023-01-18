import * as domElements from "./fetchDomElements.js";
domElements.selectList.addEventListener("click", displayLaptopInformation);
let list;

/**
 * fillList function takes a list of items and creates and appends option elements to the select (drop down menu) html element.
 *
 * @param {Array} list - an array of items to be added to the select list.
 * @returns {none} This function does not return any value.
 */
function fillList(list) {
  for (var i = 0; i < list.length; i++) {
    var option = document.createElement("option");
    option.value = list[i];
    option.text = list[i].title;
    domElements.selectList.appendChild(option);
  }
}

/**
 * fetchData function retrieves data from Computer API endpoint and pass it to fillList function.
 * * @param {String} urlEndpoint - a url for the API endpoint.
 * @returns {Array} returns the retrieved data as an Array of objects.
 */
async function fetchData(urlEndpoint) {
  const response = await fetch(urlEndpoint);
  list = await response.json();

  fillList(list);
  return list;
}
fetchData("https://hickory-quilled-actress.glitch.me/computers");

async function displayLaptopInformation() {
  var e = document.getElementById("list");
  var value = e.value;
  var text = e.options[e.selectedIndex].text;
  console.log(text);
  findLaptopInfoBasedOnName(text);
}

/**
 * findLaptopInfoBasedOnName function retrieves data from the Computer API endpoint, filter the data by the provided name,
 * and updates the specified html elements with the information of the filtered data.
 *
 * @param {string} laptopName - The name of the laptop to filter the data by.
 * @returns {none} This function does not return any value.
 */
async function findLaptopInfoBasedOnName(laptopName) {
  const response = await fetch(
    "https://hickory-quilled-actress.glitch.me/computers"
  );
  list = await response.json();

  for (let i = 0; i < list.length; i++) {
    if (list[i].title == laptopName) {
      domElements.laptopInfoParagraph.innerText =
        list[i].specs[0] + "\n" + list[i].specs[1];
      domElements.computerImage.src =
        "https://hickory-quilled-actress.glitch.me/" + list[i].image;
      domElements.computerTitle.innerText = list[i].title;
      domElements.computerPrice.innerText = list[i].price;
      domElements.largeComputerDescription.innerText = list[i].description;
    }
  }
}
