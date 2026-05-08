let i , j;
let num = 1;

for(i=1; i<=5; i++){
    let row = ''
    for(j=1; j<i; j++){
        row += num + ''
        num++
    }
    console.log(row);    
}