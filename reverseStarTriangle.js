let i , j , k, l;

for(i = 5; i>=1; i--){
    let row = '';
    for(k = 0 ; k <= 4-i; k++){
        row += ' '
    }
    for(j = i ; j>=1; j--){
        row +='*'
    }
    for(l = i; l>=2; l--){
        row +='*'
    }
    console.log(row);
    
}