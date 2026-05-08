let i , j, k;

for (i = 1 ; i <=5; i ++ ){
    let row = ""
    for(k=1 ;k<=5-i; k++){
        row += ' '
    }
    for(j = 1; j<=i ; j++){
        row += '*'
    }
    console.log(row);
}