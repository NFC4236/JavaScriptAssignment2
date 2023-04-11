//*******************1st Program**********************/

function sum(number1) {
    return function (number2) {
        console.log(number1+number2);
    }
}
let innerFaction1 = sum(5);
innerFaction1(5);
//****************3rd Program******************/

function setParagraph(element, content) {
   
    let elemCreate = document.createElement(element);
    elemCreate.innerText = content;
    document.body.appendChild(elemCreate);
}
  
setParagraph("p" ,"Sand and Sleep Both are Deep");
//******************4TH Program ********************/

function listAdd(idPara , listPara) {
    
    let addList = document.querySelector(idPara);
    addList.innerText = listPara;
    
}
listAdd  ( '#demo' ,prompt("Enter List Item"));

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

