//*******************1st Program**********************/

function sum(number1) {
    return function (number2) {
        console.log(number1+number2);
    }
}
let innerFaction1 = sum(5);
innerFaction1(5);
//***************5TH Program****************/

 function bgColorChange(refer,bgColor) {
   
let show = document.querySelector(refer);
show.innerHTML ="Hello !";
show.style.backgroundColor = bgColor;

}
 bgColorChange('#para',"Pink");

/******************Six Program******************/

let persons = [];
function saveObjectData(name1,age1,city1) {
    let std = {
        name : prompt("Enter Name"),
        age : +prompt("Enter Age"),
        city : prompt("Enter City Name"),
    }

    persons.push(std);
    console.log(persons);
    let stringifys = JSON.stringify(persons);
    localStorage.setItem("persons" , stringifys);
};


//********************7th Program**********************/

function returnObject(objectData) {

     console.log(localStorage.getItem(objectData));
      
}

returnObject("persons");

