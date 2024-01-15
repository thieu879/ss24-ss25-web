let n=parseInt(prompt("Nhap so:"));
let str = '';
let sum =0;
for(let i = 1;i<=n;i++){
    str+=i;
    console.log(str);
    sum+=Number(str);
}
console.log(sum);
