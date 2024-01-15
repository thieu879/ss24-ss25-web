let n=parseInt(prompt("Nhap so:"));
let tich = 1;
for(let i = 1;i<n;i++){
    if(i%2==0){
        tich=i*i;
        console.log(tich);
    }
}