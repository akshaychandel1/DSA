let i, j, k, l;

for(i = 1; i<= 5 ; i++){
    let row = "";
    for(k = 1 ; k <= 5-i ; k++ ){
        row += ' '
    }
    for(j = 1; j<=i ; j++){
        row += '*'
    }
    for(l = 2 ; l<=i ; l++){
        row += '*'
    }
    console.log(row)
}