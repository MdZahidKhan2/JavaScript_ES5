/*--------IF Statement-----------*/
var a = 5;
var b = 10;
if(a < b){
    console.log('Math is all right. Exm: (a>b)/(a<b)');
}

/*--------IF And Else Statement-----------*/
var a = 11;
var b = 10;
if(a < b){
    console.log('Math is all right. Exm: (a>b)/(a<b)');
}else {
    console.log('A bigger than B')
}

/*--------Else If() Statement-----------*/
var a = 10;
var b = 10;
if(a > b){
    console.loge('A big');
} else if(a < b){
    console.log('B big');
}else {
    console.log('A and B both are Same');
}

/*--------Switch() Statement-----------*/
var a = 20;
switch(a){
    case 10:
        console.log('Hello World');
        break;
    case 20:
        console.log('stile now i am single');
        break;
    case 30:
        console.log('are you ok');
        break;
    default:
        console.log('Not found');  
}

/*-------------Date Objects-----------*/
var myDate = new Date();

console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());


/*-------------Array-----------*/
var fdName = ["eshan", "ahad", "tutyl"];

console.log(fdName);
console.log(fdName[1]);

/*----Change Name ------*/
fdName[1] = "20";
console.log(fdName);

/*----Push() (Last value Add) ------*/
var clName = ['harun','faruk','khan'];
clName.push('zahid');
console.log(clName);
/*----pop() (Last value Remove) ------*/
clName.pop();
console.log(clName);

/*----unshift() (first value Add) ------*/
var clFriend = ['Ruhol', 'polash', 'jubayer'];
clFriend.unshift('Rana');
console.log(clFriend);
/*----shift() (Last value Remove) ------*/
clFriend.shift();
console.log(clFriend);

/*----Slice() (Inside Value show)(last value messing) ------*/
var clFriend = ['Ruhol', 'polash', 'jubayer','harun','riad'];
console.log(clFriend.slice(1,3));
  
/*----splice() (Inside Value Remove)(All value Remove and Add new value) ------*/
var clFriend = ['Ruhol', 'polash', 'jubayer','harun','riad'];
clFriend.splice(1,3, 'This is Zahid');
console.log(clFriend);

/*-----------   Ternary Operator-------------------*/
var num = 5;
var MyCondition = (num < 10 ) ? 'Ami Tomar Thake boro Hote Parlam na' : 'Yea ami tomer Thake Boro Hoya Gassi';
console.log(MyCondition);










