/*  XMLHttpRequest request  */
let fruitsData;

let requestURL = 'fruitsData.json';

let request = new XMLHttpRequest();

request.responseType = "json";

request.open("GET",requestURL);

request.send();

request.onload = function() {


    fruitsData = request.response;
    
    addEvents();

    console.log("loaded");
};


/*  main code */


function populateFruit() {


    let currentFruit = this.id;
    let current = this.parentElement.parentElement.parentElement;
    current.getElementsByClassName("fruit-title")[0].innerHTML =  fruitsData[this.id].Name; 
    current.getElementsByClassName("fruit-description")[0].innerHTML =  fruitsData[this.id].Description; 

    let fruitProp = current.getElementsByClassName("fruit-prop")[0];

    //change the name of the dropdown button

    this.parentElement.parentElement.firstElementChild.innerHTML = fruitsData[this.id].Name;

      fruitProp.innerHTML = "";

    //   add event listeners

     for( let i = 2; i < fruitsData.Standar_properties.length; i++ ){

        let propertie = fruitsData.Standar_properties[i];

        let newLI = document.createElement("li");

        if(propertie === "Source") {
           
            newLI.innerHTML =  "<a class='sourceLink' href='"+fruitsData[currentFruit][propertie]+ "' >Source</a>";
            
            newLI.style.textDecoration = "none"; newLI.style.color = "white";

        } else {
        
        newLI.innerHTML =  propertie + ": " + fruitsData[currentFruit][propertie]+".";
        }


        fruitProp.appendChild(newLI);

        // add the image

        let imgContainer = current.querySelectorAll(".card-img-top")[0];

        imgContainer.src = "images/" + currentFruit + ".jpg"
     }





}



//multiply the comparison container

function getMoreComparisonContainers() {

let element = document.getElementById("comparison-container");



}



// adding the event listener to the buttons
function addEvents(){
let selector = document.querySelectorAll(".selector");

for(let x of selector) {
    
    x.addEventListener("click",populateFruit)};

}









// selector[1].addEventListener("touchstart", event);
// selector[1].addEventListener("click", event);
// selector[1].addEventListener("", event);
// function event(e) {this.innerHTML = e        }