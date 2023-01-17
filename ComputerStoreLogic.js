let selectList = document.getElementById("list");

function fillList(list) {
  for (var i = 0; i < list.length; i++) {
    var option = document.createElement("option");
    option.value = list[i];
    option.text = list[i].title;
    selectList.appendChild(option);
  }
}

//API data retrieval

let list;
async function fetchData() {
  const response = await fetch(
    "https://hickory-quilled-actress.glitch.me/computers"
  );
  list = await response.json();
  fillList(list);
  return list;
}

let lists = await fetchData();
console.log(lists);
