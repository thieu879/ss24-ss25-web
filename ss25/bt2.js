let a=parseInt(prompt("Nhap a:"));
let b=parseInt(prompt("Nhap b:"));
let sum_1 = 0;
let sum_2 = 0;
if(a<b){
    for(let i=a;i<b;i++){
        if(i%2===0){
            sum_1+=i;
        }else{
            sum_2+=i;
        }
    }
}else if(b<a){
    for(let i=b;i<a;i++){
        if(i%2===0){
            sum_1+=i;
        }else{
            sum_2+=i;
        }
    }
}else{
    console.log("m dua t a!!!!");
}
console.log(sum_1);
console.log(sum_2);