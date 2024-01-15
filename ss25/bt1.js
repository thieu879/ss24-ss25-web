let n=parseInt(prompt("Nhap so:"));
let sum = 0;
for(let i=1;i<=n;i++){
    console.log(i);
    sum+=i;
}
if(sum%2!=0){
    console.log(sum);
}else{
    console.log("tong khong la so le");
}