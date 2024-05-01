/*----------- Object ------*/
var MyInfo = {YourName:'Moshahid', village:'Badalgachi', PhoneNo:'01316563588'}

console.log(MyInfo);
console.log(MyInfo.YourName);

var newIn = MyInfo['PhoneNo'];
console.log(newIn)

/*----------- Object ------*/
function MyInfo(YourName,village,PhoneNo){
    this.YourName = YourName;
    this.village = village;
    this.PhoneNo = PhoneNo;
}
var NewObj1 = new MyInfo('zahid','Gajannathpur','01316563588');
var NewObj2 = new MyInfo('Riad','Gajannathpur','01317180160');
console.log(NewObj1);
console.log(NewObj2);
console.log(NewObj2.YourName);

/*----------- Object ------*/
function MyInfo(YourName,village,PhoneNo){
    this.YourName = YourName;
    this.village = village;
    this.PhoneNo = PhoneNo;
    this.ShowMe = function(){
        console.log(this.YourName); 
        console.log(this.village); 
        console.log(this.PhoneNo); 
    }
}
var NewObj1 = new MyInfo('zahid','Gajannathpur','01316563588');
var NewObj2 = new MyInfo('Riad','Gajannathpur','01317180160');

NewObj1.ShowMe();
NewObj2.ShowMe();