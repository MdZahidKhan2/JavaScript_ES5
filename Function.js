/*----------- Function ------*/
function Fun(){
    var num1 = 50;
    var num2 = 50;
    console.log(num1 * num2);
}
Fun();
console.log('This is Zahid');
Fun();
Fun();

/*----------- Function ------*/
function New(num1, num2){
    var total = num1 + num2;
    console.log(total)
}
New(50, 50);
New(50, 70);

/*----------- Function (Return)------*/
function New(num1){
    var total = num1 + 10;
    return total;
}
var a = New(20);
var b = New(50);

console.log(a);
console.log(b);
console.log(a + b);


