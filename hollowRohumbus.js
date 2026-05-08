let i,j,k,l;

for(i = 5; i >= 1; i--){
    let row = '';
    for( j = i; j>= 1; j--){
        row += '*'
    }
    for(k = 1 ; k <= 5-i; k++){
        row += ' '
    }
    for(k = 2 ; k <= 5-i; k++){
        row += ' '
    }
    for(l = 1; l<=i; l++){
        row += '*'
    }
   
    console.log(row);
}
for(i = 1 ; i <= 5; i++){
    let row = ''
    for(j = 1; j <= i; j++){
        row += '*'
    }
    for(k =1; k <= 5-i; k++){
        row += ' '
    }
     for(k =2; k <= 5-i; k++){
        row += ' '
    }
    for(l = 1; l <= i; l++){
        row += '*'
    }
    console.log(row)
}