/*-------------Break Statement --------*/
for(var i = 0; i <= 10; i ++ ){

    if( i == 5){
        console.log('Break Now');
        break;
    }
    console.log(i);
}

/*-------------Continue Statement --------*/

for(var i = 0; i <= 10; i ++ ){

    if( i == 5){
        console.log('You Can See 5 Replace');
        continue;
    }
    console.log(i);
}