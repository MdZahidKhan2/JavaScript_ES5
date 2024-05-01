/*-------====== VAR =====---------*/
var num = 'Moshahid';
num = 'Khan';
var num = 'Zahid';
var num = 'Any time can change / also use var all the time';
console.log(num);

/*-------====== LET =====---------*/
let num1 = 'Moshahid';
num1 = "Zahid";
num1 = 'Khan';
// let num1 = 'Md'; (You can't Use let 2nd time)
console.log(num1);

/*-------====== CONST =====---------*/
const num2 = 'Moshahid';
// num2 = 'Zahid'; (You can Use only One time , Not a 2nd Time any position)
// num2 = 'Prince';
// const num2 = 'Md';
console.log(num2);




/*-------====== SCOPE (3) =====---------*/
// 1. Block Scope
// 2. Function Scope
// 3. Global Scope


/*-------====== GLOBAL SCOPE =====---------*/
var FdName = 'Nuroddin';

console.log(FdName);

function me(){
    var num3 = 'Ami Zahid';
    console.log(num3);
}
me()




/*-------====== FUNCTION/LOCAL SCOPE =====---------*/
var FdName = 'Nuroddin';

console.log(FdName);

function me(){
    var num3 = 'Ami Zahid';
    console.log(num3);
}
me()
// console.log(num3); (Can't Like This) (This is FUNCTION / LOCAL SCOPE)



/*-------====== BLOCK SCOPE =====---------*/
{
    let tumi = 'Tomar Name Ki';
    console.log(tumi);
}
// console.log(tumi); (can't Work Out side)(All work Inside the Border)





/*-------====== HOSTING INTERVIEW QUS =====---------*/

/*-------====== VAR =====---------*/
// Mona MOna (var fdName = undefined;) obosthay thake.
fdName = 'ZAHID';//Assign

var fdName; //declear
console.log(fdName);

/*-------====== LET ==(ReferenceError)===---------*/
// Mona MOna (let fdName;) Dhora but (= undefined;) Dhora na tay (ReferenceError) Deba.
// fdName = 'ZAHID';//Assign

// let fdName; //Declare
// console.log(fdName);

/*-------====== CONST ==(SyntaxError)===---------*/
// Const Ak Kothar Manus . 2nd time Hoy na.
// fdName = 'ZAHID';//Assign

// const fdName; //Declare
// console.log(fdName);




/*-------========= Function Expression =======---------*/
var FunExpr =  function(){ //Anonymous function (Name hin function)
    console.log('This Is Md. Moshahid Zahid') 
}
FunExpr();

var FunExpr =  function(message, message1){
    console.log(message, message1) 
}
FunExpr('I Love JavaScript', 'I Love PHP');



/*-------=========INNER , OUTER Function Expression =======---------*/
function world(miss){ // Outer Function (Like Out side Function Call)

    function bangladesh(){ // Inner Function (like Inside)
        console.log(miss)
    }
    bangladesh()
}
world("hi bro")