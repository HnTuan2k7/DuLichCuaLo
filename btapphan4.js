let giaPhong = 0;
const dsNutDatPhong = document.querySelectorAll(".btn-dat-phong");
const tenKhachSan = document.getElementById("tenKhachSan");
const hoTen = document.getElementById("hoTen");
const soDienThoai = document.getElementById("soDienThoai");
const ngayNhan = document.getElementById("ngayNhan");
const soDem = document.getElementById("soDem");
const tongTien = document.getElementById("tongTien");
const btnXacNhan = document.getElementById("btnXacNhan");
dsNutDatPhong.forEach(function (nut) {
  nut.addEventListener("click", function () {
    tenKhachSan.innerText = nut.dataset.ten;
    giaPhong = Number(nut.dataset.gia);
    hoTen.value = "";
    soDienThoai.value = "";
    ngayNhan.value = "";
    soDem.value = "";
    tongTien.innerText = "0";
  });
});
soDem.addEventListener("input", function () {
  let so = Number(soDem.value);
  if (so > 0) {
    tongTien.innerText = (giaPhong * so).toLocaleString("vi-VN");
  } else {
    tongTien.innerText = "0";
  }
});
btnXacNhan.addEventListener("click", function () {
  let ten = hoTen.value.trim();
  let sdt = soDienThoai.value.trim();
  let ngay = ngayNhan.value;
  let so = Number(soDem.value);
  if (ten === "" || sdt === "" || ngay === "") {
    alert("Vui lòng nhập đầy đủ họ tên, số điện thoại và ngày nhận phòng!");
  } else if (so <= 0 || !Number.isInteger(so)) {
    alert("Số đêm không hợp lệ, vui lòng nhập lại (số nguyên lớn hơn 0)!");
  } else {
    alert("Đặt phòng thành công tại " + tenKhachSan.innerText +
          "!\nTổng tiền: " + tongTien.innerText + " đ");
    bootstrap.Modal.getInstance(document.getElementById("modalDatPhong")).hide();
  }
});