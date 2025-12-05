function menuChinh() {
  let ten = "";
  let tuoi = 0;
  let luaChon = 0;

  do {
    // Hiển thị menu
    console.log("\n========== MENU CHƯƠNG TRÌNH ==========");
    console.log("1. Nhập tên người dùng");
    console.log("2. Nhập tuổi người dùng");
    console.log("3. In tên và tuổi");
    console.log("4. In bảng cửu chương");
    console.log("5. Kiểm tra chẵn lẻ");
    console.log("6. Tính tổng từ 1 đến N");
    console.log("7. In dãy số");
    console.log("8. Kiểm tra số nguyên tố");
    console.log("9. Đảo ngược chuỗi");
    console.log("10. Thoát chương trình");
    console.log("=====================================");

    luaChon = parseInt(prompt("Chọn chức năng (1-10):"));

    switch (luaChon) {
      case 1:
        ten = prompt("Nhập tên của bạn:");
        console.log(`✅ Đã lưu tên: ${ten}`);
        break;

      case 2:
        tuoi = parseInt(prompt("Nhập tuổi của bạn:"));
        console.log(`✅ Đã lưu tuổi: ${tuoi}`);
        break;

      case 3:
        if (ten === "" || tuoi === 0) {
          console.log("❌ Chưa nhập đủ thông tin!");
        } else {
          console.log(`👤 Tên: ${ten}, Tuổi: ${tuoi}`);
        }
        break;

      case 4:
        let soNhan = parseInt(prompt("Nhập số để in bảng cửu chương:"));
        console.log(`📊 Bảng cửu chương ${soNhan}:`);
        for (let i = 1; i <= 10; i++) {
          console.log(`${soNhan} × ${i} = ${soNhan * i}`);
        }
        break;

      case 5:
        let soKiemTra = parseInt(prompt("Nhập số để kiểm tra chẵn lẻ:"));
        console.log(
          soKiemTra % 2 === 0
            ? `✅ ${soKiemTra} là số CHẴN`
            : `✅ ${soKiemTra} là số LẺ`
        );
        break;

      case 6:
        let n = parseInt(prompt("Nhập số N:"));
        let tong = 0;
        for (let i = 1; i <= n; i++) {
          tong += i;
        }
        console.log(`📈 Tổng từ 1 đến ${n} là: ${tong}`);
        break;

      case 7:
        let daySo = prompt("Nhập dãy số (cách nhau bằng dấu phẩy):");
        let mangSo = daySo.split(",");
        console.log("🔢 Dãy số bạn nhập:");
        mangSo.forEach((so, index) => {
          console.log(`Số ${index + 1}: ${so.trim()}`);
        });
        break;

      case 8:
        let soNguyenTo = parseInt(prompt("Nhập số để kiểm tra số nguyên tố:"));
        let laSoNguyenTo = true;

        if (soNguyenTo < 2) {
          laSoNguyenTo = false;
        } else {
          for (let i = 2; i <= Math.sqrt(soNguyenTo); i++) {
            if (soNguyenTo % i === 0) {
              laSoNguyenTo = false;
              break;
            }
          }
        }

        console.log(
          laSoNguyenTo
            ? `✅ ${soNguyenTo} là SỐ NGUYÊN TỐ`
            : `❌ ${soNguyenTo} không phải số nguyên tố`
        );
        break;

      case 9:
        let chuoi = prompt("Nhập chuỗi cần đảo ngược:");
        let chuoiDaoNguoc = chuoi.split("").reverse().join("");
        console.log(`🔁 Chuỗi đảo ngược: ${chuoiDaoNguoc}`);
        break;

      case 10:
        console.log("👋 Tạm biệt! Hẹn gặp lại!");
        break;

      default:
        console.log("❌ Lựa chọn không hợp lệ! Vui lòng chọn 1-10");
    }
  } while (luaChon !== 10);
}

// Chạy chương trình
menuChinh();
