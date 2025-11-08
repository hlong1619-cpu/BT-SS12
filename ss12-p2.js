/*//Bai 1. Chuyen tu do C sang do F
let c = prompt("Nhap do C ma ban muon doi:");
console.log(`${c}°C = ${((c * 9) / 5 + 32).toFixed(1)}°F`);*/

/*//Bai 2. Chuyen tu met sang feet
let m = prompt("Nhap so met:");
console.log(`${m}m - ${(m * 3.28).toFixed(2)} feet`);*/

/*//Bai 3. Dien tich hinh vuong
let a = prompt("Nhap canh hinh vuong");
console.log(`Dien tich hinh vuong cua ban la: ${a * a}`);*/

/*//Bai 4. Dien tich hinh chu nhat
let a = prompt("Hay nhap chieu dai")
let b = prompt("Hay nhap chieu rong")
console.log(`Dien tich hinh chu nhat cua ban la: ${a * b}`);*/

/*//Bai 5. Dien tic tam giac vuong
let a = prompt("Nhap canh goc vuong thu nhat")
let b = prompt("Nhap canh goc vuong thu hai")
console.log(`Dien tic tam giac vuong cua ban la: ${(a * b / 2).toFixed(2)}`);*/

/*//Bai 6. Gia phuong trinh bac 1
let a = prompt("Nhap a:");
let b = prompt("Nhap b:");
console.log(
  a === 0 ? (b === 0 ? "Vo so nghiem" : "Vo nghiem") : `x = ${-b / a}`
);*/

/*//Bai 7. Giai phuong trinh bac 2
let a = prompt("Nhap a:");
let b = prompt("Nhap b:");
let c = prompt("Nhap c:");
let delta = b * b - 4 * a * c;
console.log(
  delta < 0
    ? "Vo nghiem"
    : delta === 0
    ? `x = ${-b / (2 * a)}`
    : `x1 = ${(-b + Math.sqrt(delta)) / (2 * a)}, x2 = ${
        (-b - Math.sqrt(delta)) / (2 * a)
      }`
);*/

/*//Bai 8. Kiem tra do tuoi
let age = prompt("Please input your age");
console.log(age > 0 && age < 120 ? "Valid" : "Invalid");*/
