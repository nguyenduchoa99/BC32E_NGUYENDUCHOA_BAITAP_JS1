// Bài 1: Tính tiền lương nhân viên
/**
 * Mô hình 3 khối
 * - Đầu vào:
 *      + Lương 1 ngày = 100.000
 *      + Số ngày làm = 26
 * 
 * - Xử lý:
 *      + Tạo biến cho lương 1 ngày
 *      + Tạo biến cho số ngày làm và tổng tiền lương
 *      + Gán giá trị cho lương 1 ngày và tổng số ngày làm
 *       + Tổng tiền lương = lương 1 ngày * tổng số ngày làm
 * 
 * - Đầu ra:
 *      + tongLuong = ?
 */

var luong1Ngay = 0;
var ngayLam = 0;
var tongLuong = 0;
luong1Ngay = 100000;
ngayLam = 26;
tongLuong = luong1Ngay * ngayLam;
tongLuong = tongLuong.toLocaleString();
console.log("Tong luong: " + tongLuong);

// Bài 2: Tính giá trị trung bình
/**
 * Mô hình 3 khối
 * - Đầu vào:
 *      + Các số thực: 2, 4, 5, 19, 98
 * 
 * - Xử lý:
 *      + Tạo biến cho từng số thực
 *      + Tạo biến cho số trung bình của 5 số thực
 * 
 *      + trungBinh = (n1 + n2 + n3 + n4 + n5)/5
 * 
 * - Đầu ra:
 *      + trungBinh = ?
 */

var n1 = 2;
var n2 = 4;
var n3 = 5;
var n4 = 19;
var n5 = 98;
var trungBinh = 0;
trungBinh = (n1 + n2 + n3 + n4 + n5)/5;
console.log("Gia tri trung binh: " + trungBinh);

// Bài 3: Quy đổi tiền
/**
 * Mô hình 3 khối
 * - Đầu vào:
 *      + Giá USD hiện tại = 23.500 VNĐ
 *      + Số tiền quy đổi = 37 USD
 * - Xử lý:
 *      + Tạo biến cho usd giá trị là 23.500
 *      + Tạo biến cho tienDoi giá trị là 37
 *      + tongTien = usd * tienDoi
 * 
 * - Đầu ra:
 *      + tongTien = ?
 */

var usd = 23500;
var tienDoi = 37;
var tongTien = 0;
tongTien = usd * tienDoi;
tongTien = tongTien.toLocaleString();
console.log("So tien sau khi quy doi: " + tongTien);

// Bài 4: Tính diện tích và chu vi hình chữ nhật
/**
 * Mô hình 3 khối
 * - Đầu vào:
 *      + chieuDai
 *      + chieuRong
 * 
 * - Xử lý:
 *      + Tạo biến cho chieuDai giá trị = 10
 *      + Tạo biến cho chieuRong giá trị = 5
 *      + Tạo biến cho chuVi giá trị = 0
 *      + Tạo biến cho dienTich giá trị  = 0
 * 
 *      + dienTich = chieuDai * chieuRong
 *      + chuVi = (chieuDai + chieuRong)*2
 * 
 * - Đầu ra:
 *      + dienTich = ?
 *      + chuVi = ?
 */


var chieuDai = 10;
var chieuRong = 5;
var dienTich = 0;
var chuVi = 0;
dienTich = chieuDai * chieuRong;
chuVi = (chieuDai +chieuRong)*2;
console.log("Dien tich hinh chu nhat la: " + dienTich);
console.log("Chu vi hinh chu nhat la: " + chuVi);

// Bài 5: Tính tổng 2 ký số
/**
 * Mô hình 3 khối
 * Giả sử:
 *      n = 19 => 1 + 9 => total = 10 
 *
 * - Đầu vào:
 *      + n = 19
 * 
 * - Xử lý:
 *      + Tách lấy hàng chục => n / 10 => làm trong số Math.floor(n/10)
 *      + Tách lấy số hàng đơn vị => n % 10
 * 
 *      + Tổng = hàng chục + hàng đơn vị
 * 
 * - Đầu ra:
 *      + Tổng = ?
 * 
 */

var n = 19;

var hangChuc = Math.floor(n / 10);
var donVi = n % 10;

var tong2KySo = hangChuc + donVi;

console.log("Tong 2 ky so: " + tong2KySo);