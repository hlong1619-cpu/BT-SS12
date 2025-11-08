/*//Bai 1. In day fibonacci (20 so dau)
function inFibonacci() {
  let a = 0,
    b = 1;
  let fibonacci = [a, b];

  for (let i = 2; i < 20; i++) {
    let next = a + b;
    fibonacci.push(next);
    a = b;
    b = next;
  }
  console.log("Day fibonacci (20 so dau) bao gom:");
  console.log(fibonacci.join(", "));
}

inFibonacci(); */

/* //Bai 2. Tinh giai thua
function tinhGiaiThua() {
  let n = prompt("Nhap so nguyen duong");

  if (n < 0) {
    console.log("Vui long nhap dung so nguyen duong!");
    return;
  }

  let giaiThua = 1;
  for (i = 1; i <= n; i++) {
    giaiThua *= i;
  }
  console.log(`${n}! = ${giaiThua}`);
}
tinhGiaiThua(); */

/* //Bai 3. Tam giac hinh vuong (4 loai)
function inTamGiacHinhVuong() {
  let height = 5;

  console.log("1. Tam giac vuong trai, tren:");
  for (let i = height; i >= 1; i--) {
    console.log("*".repeat(i));
  }

  console.log("\n2. Tam giac vuong trai, duoi:");
  for (let i = 1; i <= height; i++) {
    console.log("*".repeat(i));
  }

  console.log("\n3. Tam giac vuong phai, tren:");
  for (let i = height; i >= 1; i--) {
    console.log(" ".repeat(height - i) + "*".repeat(i));
  }
  console.log("\n4. Tam giac vuong phai, duoi:");
  for (let i = 1; i <= height; i++) {
    console.log(" ".repeat(height - i) + "*".repeat(i));
  }
}
inTamGiacHinhVuong(); */

// Bai 5. In hinh chu nhat rong
function tinhLaiNganHang() {
  // Nhập thông tin từ người dùng
  let tienGoc = parseFloat(prompt("Nhập số tiền gốc (VND):"));
  let soThang = parseInt(prompt("Nhập số tháng gửi:"));
  let laiSuatThang = parseFloat(prompt("Nhập lãi suất hàng tháng (%):")) / 100;

  // Kiểm tra đầu vào
  if (tienGoc <= 0 || soThang <= 0 || laiSuatThang <= 0) {
    console.log(" Vui lòng nhập số liệu hợp lệ!");
    return;
  }

  // Tính lãi kép
  let tienCuoiKy = tienGoc * Math.pow(1 + laiSuatThang, soThang);
  let tienLai = tienCuoiKy - tienGoc;

  // Hiển thị kết quả
  console.log(" KẾT QUẢ TÍNH LÃI KÉP ");
  console.log(`Tiền gốc: ${tienGoc.toLocaleString()} VND`);
  console.log(`Số tháng: ${soThang} tháng`);
  console.log(`Lãi suất: ${(laiSuatThang * 100).toFixed(2)}%/tháng`);
  console.log(`Tiền lãi: ${tienLai.toLocaleString()} VND`);
  console.log(`Tổng nhận được: ${tienCuoiKy.toLocaleString()} VND`);
}

// Chạy chương trình
tinhLaiNganHang();
