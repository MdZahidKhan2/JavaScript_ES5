var friendsName = "This is Zahid";
console.log(typeof friendsName)


/*-----------strType--------*/
var strType = 'Nuroddin';
console.log(typeof strType)


/*-----------numType--------*/
var numType = 123456789;
console.log(typeof numType)


/*-------------String To Number Convert------*/
var num5 = 50;
var num6 = 100;

num7 = "" + num5 ;
console.log(typeof num7);


/*-----------BoolType--------*/
var BoolType = true;
console.log(typeof BoolType)


/*-----------toUpperCase--------*/
 var letter = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis repellendus iusto eius, dolorem quis necessitatibus ab pariatur illum architecto a, repellat esse excepturi, quae hic.";
 console.log(letter.toUpperCase())


/*-----------toLowerCase--------*/
var letter = "LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT. DEBITIS REPELLENDUS IUSTO EIUS, DOLOREM QUIS NECESSITATIBUS AB PARIATUR ILLUM ARCHITECTO A, REPELLAT ESSE EXCEPTURI, QUAE HIC.";
console.log(letter.toLowerCase())

/*-----------Split----(" ")----*/
var myFriend = 'Zahid Nuroddin Riad Rabbi Faruk Polash Hemal';
console.log(myFriend.split('Hemal'));

/*-----------indexOf-----(Position 39)---*/
var myFriend = 'Zahid Nuroddin Riad Rabbi Faruk Polash Hemal';
console.log(myFriend.indexOf('Hemal'));


/*-----------ParseFloat-----(string to Number)--(All Print)---*/
var num1 = "45.6525451"; 
var num2 = 100;

num3 = parseFloat(num1);

var mot = (num2 + num3);
console.log(mot);

/*-----------parseInt-----(string to Number)--(like 45 print)---*/
var num1 = '45.6525451';
var num2 = 100;

num3 = parseInt(num1);
var mot = (num2 + num3);

console.log(mot);

/*-------------String To Number Convert------*/
var num5 = 50;
var num6 = 100;

num7 = "" + num5 ;
console.log(typeof num7);

var total = num6 + num7;
console.log(total);

var total2 = num5 + num6;
console.log(total2);

/*-------------Predefined Function ------*/
/*-------------Predefined Function - Math (absolute)(- = +)------*/
var num1 = -20;
var sum = Math.abs(num1);
console.log(sum);

/*-------------Predefined Function - Math (Round)(0.545 = 1)------*/
var num1 = 1.5822;
var sum = Math.round(num1);
console.log(sum)

/*-------------Predefined Function - Math (ceil)(0.1545 = 1 up)------*/
var num1 = 3.1822;
var sum = Math.ceil(num1);
console.log(sum)

/*-------------Predefined Function - Math (floor)(0.9545 = 1 down)------*/
var num1 = 3.9822;
var sum = Math.floor(num1);
console.log(sum)

/*-------------Predefined Function - Math (Random())(Lottery)------*/
var Lottery1 = Math.random();
console.log(Lottery1)
var Lottery = Math.random() * 100;
console.log(Lottery)






