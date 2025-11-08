/*//Bai 1.
function sochiahetcho5() {
  let a = parseFloat(prompt(15));
  let b = parseFloat(prompt(5));

  if (a % b === 0) {
    console.log(`${a} chia het cho ${b}`);
  } else {
    console.log(`${a} khong chia het cho ${b}`);
    console.log(`So du la: ${a % b}`);
  }
}*/
/*//Bai 2.
function kiemTraTuoi() {
  console.log("Kiem tra do tuoi vao lop 10");

  let tuoi = parseInt(prompt(""));

  if (isNaN(tuoi)) {
    alert("Ban phai nhap so tuoi");
    return;
  }

  if (tuoi < 15) {
    alert(
      `Tuổi ${tuoi}: KHÔNG đủ điều kiện vào lớp 10\n Còn nhỏ quá, đợi thêm ${
        15 - tuoi
      } năm nữa nha!`
    );
  } else if (tuoi > 16) {
    alert(`Tuổi ${tuoi}: KHÔNG đủ điều kiện vào lớp 10`);
  } else {
    alert(`🎉 Tuổi ${tuoi}: ĐỦ điều kiện vào lớp 10`);
  }
}

// Chạy hàm ngay khi trang load
kiemTraTuoi();*/

/*//Bai 3.
let number = parseInt(prompt("Nhap mot so nguyen"));
console.log(number > 0 ? "So lon hon 0" : number < 0 ? "So nho hon 0" : "= 0");*/

/*//Bai 4.
let a = parseInt(prompt("So thu nhat"));
let b = parseInt(prompt("So thu hai"));
let c = parseInt(prompt("So thu ba"));
console.log("so lon nhat la: " + Math.max(a, b, c));*/

/*//Bai 5.
let diemKT = parseFloat(prompt("Vui long nhap so diem de kiem tra"));
let diemGK = parseFloat(prompt("Vui long nhap so diem giua ky"));
let diemCK = parseFloat(prompt("Vui long nhap so diem cuoi ky"));
let diemTB = (diemKT + diemGK + diemCK) / 3;
let hocluc;

if (diemTB >= 9) hocluc = "Xuat sac";
else if (diemTB >= 8) hocluc = "Gioi";
else if (diemTB >= 6.5) hocluc = "Kha";
else if (diemTB >= 5) hocluc = "Trung Binh";
else hocluc = "yeu, khong du diem len lop :((";

console.log("Diem TB: " + diemCK.toFixed(2) + ": Xep loai: " + hocluc);*/
