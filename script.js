console.log('This is zahid'); // Show console panel
alert('Hello Zahid');  // Alert popup
document.write('Hello Mister Md. Moshahid Zahid Khan.' + "<br>"); // show widow output

let userOneValue = prompt('User Input Data One :'); // prompt('write') Anything Wright here Show Popup Name
let userTwoValue = prompt('User Input Data Two :');
userOneValue = parseInt(userOneValue); //Convert String to Integer
userTwoValue = parseInt(userTwoValue);

console.log(userOneValue); //Show Console Panel input client
document.write(userOneValue + "<br>");
document.write(userTwoValue + "<br>");



//============== First Project ==============
let OneValue = prompt('Input Data One :'); // prompt('write') Anything Wright here Show Popup Name
let TwoValue = prompt('Input Data Two :');
OneValue = parseInt(OneValue); //Convert String to Integer
TwoValue = parseInt(TwoValue);


const Result = OneValue + TwoValue;
const ResultTwo = OneValue - TwoValue;
const ResultThree = OneValue * TwoValue;
const ResultFour = OneValue / TwoValue;
const ResultFive = OneValue % TwoValue;

document.write('Output Add:' + Result + "<br>");
document.write('Output Two Remove:' + ResultTwo + "<br>");
document.write('Output Three:' + ResultThree + "<br>");
document.write('Output Four:' + ResultFour + "<br>");
document.write('Output Five:' + ResultFive + "<br>");