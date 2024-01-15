function ucln(a,b){
    if(a<b){
        for(let i = b;i>b && i<0;i--){
            if(a%i==0 && b%i==0){
                let temp = i;
                break;
            }
        }
    }
}
function bcnn(a,b){
    return ((a*b)/ucln(a,b));
}
function timBcnn(a,b,c,d){
    let result = bcnn(a,b);
    result = bcnn(result,c);
    result = bcnn(result,d);
    return result;
}
let a = parseInt(prompt("Nhap a:"));
let b = parseInt(prompt("Nhap b:"));
let c = parseInt(prompt("Nhap c:"));
let d = parseInt(prompt("Nhap d:"));

let result = timBcnn(a,b,c,d);

console.log(result);


