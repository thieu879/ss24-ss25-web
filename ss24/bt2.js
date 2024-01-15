let a=parseInt(prompt("Nhap a:"));
let b=parseInt(prompt("Nhap b:"));
let sum = 0;
if(a<b){
    for(let i = a;i<b;i++){
        sum+=i;
    }
    console.log(sum);
}
if(b<a){
    for(let i = b;i<a;i++){
        sum+=i;
    }
    console.log(sum);
}
