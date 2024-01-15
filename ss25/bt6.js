let n = parseInt(prompt("nhap:"));
let a=0;
let b=1;
let c=0;
for(let i = 1;i<=n;i++){
    c = a+b;
    a=b;
    b=c;
}
console.log(c);