let n = prompt("Nhập:");
let soDaoNguoc = '';
while (n > 0) {
    soDaoNguoc += n % 10;
    n = Math.floor(n / 10);
}
console.log(soDaoNguoc);
