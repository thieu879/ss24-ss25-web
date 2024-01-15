function check(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let a = prompt("Nhap:");
let kq = check(a);

if (kq) {
    console.log(" là số nguyên tố");
} else {
    console.log(" không phải là số nguyên tố.");
}
