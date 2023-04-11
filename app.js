//*******************1st Program**********************/

function sum(number1) {
    return function (number2) {
        console.log(number1+number2);
    }
}
let innerFaction1 = sum(5);
innerFaction1(5);