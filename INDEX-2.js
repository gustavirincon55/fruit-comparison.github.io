
/*  XMLHttpRequest request  */
let fruitsData;

let requestURL = 'fruitsData.json';

let request = new XMLHttpRequest();

request.responseType = "json";

request.open("GET", requestURL);

request.send();

request.onload = function () {


    fruitsData = request.response;

    addButtons();

    console.log("loaded");
};


/*  main code */


function populateCard(element) {
//pop

    let currentFruit = element.id;

    let current = element.parentElement.parentElement.parentElement;
    let fruitProp = current.getElementsByClassName("fruit-prop")[0];

    //change the name of the dropdown button

    element.parentElement.parentElement.firstElementChild.innerHTML = currentFruit.charAt(0).toUpperCase() + currentFruit.slice(1);

    fruitProp.innerHTML = "";

    //   add event listeners
    for (let propertie in fruitsData.fruits[currentFruit][1]) {
        let newLI = document.createElement("li");

        if (propertie === "Source") {

            newLI.innerHTML = `<a class='sourceLink' href='${fruitsData.fruits[currentFruit][1][propertie]}' >Source</a>`;

            newLI.style.textDecoration = "none";
            newLI.style.color = "white";

        } else {

            newLI.innerHTML = propertie + ": " + fruitsData.fruits[currentFruit][1][propertie] + ".";
        }

        fruitProp.appendChild(newLI);
    }
}



function addButtons() {

    dropdowns = document.querySelectorAll(".dropdown-menu");

    for (let dropdown of dropdowns) {

        dropdown.innerHtml = "";

        for (let fruit in fruitsData.fruits) {
            dropdown.innerHTML += `<button id="${fruit}" onclick="populateCard(this)" class="selector dropdown-item" type="button">${fruit.charAt(0).toUpperCase() + fruit.slice(1)}</button>`;

        }
    }
}









