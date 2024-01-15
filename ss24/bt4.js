let n=parseInt(prompt("Nhap so:"));
let sum =0;
let m=1;
for(let i = 1;sum<n;i++){
    if(i%2==0){
        m=i**2;
        sum+=m;
        console.log(m);
    }
}