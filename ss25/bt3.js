let n=parseInt(prompt("Nhap so:"));
let sum = 0;
let m = 0;
while(sum + m + 1<=n){
    m++;
    sum+=m;
}
console.log(m);