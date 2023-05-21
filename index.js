/* Bài 1: Quản lý tuyển sinh
+ Đề bài: Trong kỳ thi tuyển, 1 thí sinh sẽ trúng tuyển nếu có điểm tổng kết lớn hơn hoặc bằng điểm chuẩn và không có môn nào điểm 0.
    -Điểm tổng kết là tổng điểm của 3 môn thi và điểm ưu tiên.
    -Điểm ưu tiên bao gồm điểm ưu tiên theo khu vực và điểm ưu tiên theo đối tượng.
Viết chương trình nhập: điểm chuẩn của hội đồng,điểm 3 môn thi của thí sinh,khu vực và đối tượng dự thi.Cho biết thí sinh đó đậu hay rớt và tổng số điểm đạt được. 
*/
const khuVucA = "KvA";
const khuVucB = "KvB";
const khuVucC = "KvC";
function diemKhuVuc(khuVuc) {
    switch (khuVuc) {
        case khuVucA: {
            return 2;
        }
        case khuVucB: {
            return 1.5;
        }
        case khuVucC: {
            return 0.5;
        }
    }
};
const dt1 = "doiTuongMot";
const dt2 = "doiTuongHai";
const dt3 = "doiTuongBa";
function diemDoiTuong(doiTuong) {
    switch (doiTuong) {
        case dt1: {
            return 2.5;
        }
        case dt2: {
            return 1.5;
        }
        case dt3: {
            return 1;
        }
    }
};
const diemChuan = 28;
function diemTongBaMon() {
    var khuVuc = document.querySelector(".form-check input[name='selector']:checked").value;
    var doiTuong = document.querySelector(".lopDoiTuong input[name='selection']:checked").value;
    var diemToan = document.getElementById("monToan").value * 1;
    var diemVan = document.getElementById("monVan").value * 1;
    var diemHoa = document.getElementById("monHoa").value * 1;
    var diemThiBaMon = diemToan + diemVan + diemHoa;
    var khuVuc = diemKhuVuc(khuVuc);
    var doiTuong = diemDoiTuong(doiTuong);

    var diemTongKet = diemThiBaMon + khuVuc + doiTuong;
    if (diemTongKet >= diemChuan) {
        document.querySelector(".text-black").innerHTML = "Đậu" + " " + diemTongKet;
    } else {
        document.querySelector(".text-black").innerHTML = "Rớt" + " " + diemTongKet;
    }
};
/* Bài 2: Tính tiền điện
Viết chương trình nhập vào thông tin tiêu thụ điện (Tên,Số Kw)
Tính và xuất ra tiền trả theo quy tắc:
    - 50kw đầu : 500đ/kw
    - 50kw kế : 650đ/kw
    - 100kw kế : 850đ/kw
    - 150kw kế : 1100đ/kw
    - Còn lại: 1300đ/kw
*/
// const kw = 500;
const kw50Ke = 650;
const kw100Ke = 850;
const kw150Ke = 1100;
const kw350TroDi = 1300;
const soTienTrenKw = 500;
function tongTienDien() {
    var hoTen = document.getElementById("hoTen").value;
    // lấy số kw từ người dùng
    var soKw = document.getElementById("txt-kw").value * 1;
    var soKwBanDau = soKw * soTienTrenKw;
    console.log(soKwBanDau);
    var soKw50Ke = (soKw - 50) * kw50Ke;
    console.log(soKw50Ke);
    var soKw100Ke = (soKw - 100) * kw100Ke;
    var soKw200 = (soKw - 200) * kw150Ke;
    var soKwTren350 = (soKw - 350) * kw350TroDi;
    var tongTienKw = 0;
    // kiểm tra giá trị số kw từ người dùng
    if (soKw >= 1) {
        // tính toán số tiền
        if (soKw > 1 && soKw < 50) {
            tongTienKw = soKwBanDau;
        } else if (soKw >= 50 && soKw <= 100) {
            tongTienKw = soKw50Ke + (50 * soTienTrenKw);
            console.log(tongTienKw);
        }
        else if (soKw > 100 && soKw < 200) {
            tongTienKw = soKw100Ke + (50 * soTienTrenKw) + (50 * kw50Ke);
        }
        else if (soKw >= 200 && soKw < 350) {
            tongTienKw = soKw200 + (50 * soTienTrenKw) + (50 * kw50Ke) + (100 * kw100Ke);
        }
        else if (soKw >= 350) {
            tongTienKw = soKwTren350 + (50 * soTienTrenKw) + (50 * kw50Ke) + (100 * kw100Ke) + (150 * kw150Ke);
        }
        document.getElementById("divThanhTien").style.display = "block";
        document.getElementById("xuatTien").innerHTML = " Họ tên : " + hoTen + "," + " Số tiền tính theo kw là: " + tongTienKw;
    }
}

/* Bài 3: Tính thuế thu nhập cá nhân
+ Viết chương trình nhập vào thông tin của 1 cá nhân ( Họ tên,tổng thu nhập năm,số người phụ thuộc). Tính và xuất thuế thu nhập cá nhân phải trả theo quy định sau: Thu nhập chịu thuế = Tổng thu nhập năm - 4tr - Số người phụ thuộc * 1.6tr */
const thueDuoi60Tr = 0.05;
const thue60TrDen120tr = 0.1;
const thue120TrDen210Tr = 0.15;
const thue210TrDen384Tr = 0.2;
const thue384TrTroDi = 0.25;
const motNguoi = 80000;
const haiNguoi = 160000;
const baNguoi = 240000;
function thuNhapSauThue() {
    // lấy thông tin từ người dùng 
    var hoTenKH = document.getElementById("txt-hoTen").value;
    var thuNhap = document.getElementById("thuNhapNam").value * 1;
    var nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
    // kiểm tra thông tin nhập vào, bước xử lý
    // var soNPT = nguoiPhuThuoc * nPhuThuoc;
    // var so1NPT = (nguoiPhuThuoc - 1) * motNguoi;
    // var so2NPT = (nguoiPhuThuoc - 2) * haiNguoi;
    var tongThuNhap;
    var soNguoiPhuThuoc;
    if (thuNhap >= 1000) {
        // tính thuế
        if (thuNhap <= 60000000 && nguoiPhuThuoc >= 0) {
            tongThuNhap = thuNhap * thueDuoi60Tr;
        } else if (thuNhap > 60000000 && thuNhap <= 120000000) {
            tongThuNhap = thuNhap * thue60TrDen120tr;
        }
        else if (thuNhap > 120000000 && thuNhap <= 210000000) {
            tongThuNhap = thuNhap * thue120TrDen210Tr;
        }
        else if (thuNhap > 210000000 && thuNhap <= 384000000) {
            tongThuNhap = thuNhap * thue210TrDen384Tr;
        }
        else if (thuNhap > 384000000) {
            tongThuNhap = thuNhap * thue384TrTroDi;
        }
        if (nguoiPhuThuoc == 0) {
            soNguoiPhuThuoc = tongThuNhap;
        } else if (nguoiPhuThuoc == 1) {
            soNguoiPhuThuoc = tongThuNhap - motNguoi;
        }
        else if (nguoiPhuThuoc == 2) {
            soNguoiPhuThuoc = tongThuNhap - haiNguoi;
        } else if (nguoiPhuThuoc >= 3) {
            soNguoiPhuThuoc = tongThuNhap - baNguoi;
        }
        document.getElementById("thueThuNhap").innerHTML = "Họ tên : " + hoTenKH + "," + " Thuế : " + (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(soNguoiPhuThuoc));
    }
};
/* Bài 4: Tính tiền cáp:
+ Viết chương trình hóa đơn khách hàng cho 1 công ty cáp. Có 2 loại khách hàng: Nhà dân và Doanh Nghiệp. Có 2 mức giá tiền cáp:
    - Nhà dân:
        Phí xử lý hóa đơn: 4.5$
        Phí dịch vụ cơ bản: 20.5$
        Thuê kênh cao cấp : 7.5/kênh
    - Doanh nghiệp:
        Phí xử lý hóa đơn: 15$
        Phí dịch vụ cơ bản: 75$ cho tổng 10 kết nối đầu, mỗi kết nối thêm 5$/ kết nối
        Thuê kênh cao cấp : 50/kênh
Chương trình cho phép nhập vào mã khách hàng, loại khách hàng,số kết nối,số kênh cao cấp. Nếu chọn loại khách hàng là doanh nghiệp số kết nối sẽ hiện lên, nếu loại khách hàng là Nhà Dân ô kết nối sẽ ẩn đi
*/
const khNhaDan = "nhaDan";
const khDoanhNghiep = "doanhNghiep";
const kenhDVXuLyHd = "xuLyHD";
const kenhDVCoBan = "dichVuCoBan";
const kenhDVCaoCap = "dichVuCaoCap";
function phiCapXuLyHD(loaiKH) {
    switch (loaiKH) {
        case khNhaDan: {
            return 4.5;
        }
        case khDoanhNghiep: {
            return 15;
        }
    }
};
function phiCapCoBan(loaiKH) {
    switch (loaiKH) {
        case khNhaDan: {
            return 20;
        }
        case khDoanhNghiep: {
            return 75;
        }
    }
};
function phiCapCaoCap(loaiKH) {
    switch (loaiKH) {
        case khNhaDan: {
            return 7.5;
        }
        case khDoanhNghiep: {
            return 50;
        }
    }
};
function tongTienCap() {
    // đi lấy dữ liệu từ người dùng
    var maKH = document.getElementById("maKhachHang").value;
    var loaiKH = document.querySelector(".loaiKhachHang input[name='select']:checked").value;
    var capXLHD = phiCapXuLyHD(loaiKH);
    var capCoBan = phiCapCoBan(loaiKH);
    var capDVCC = phiCapCaoCap(loaiKH);

    // lấy giá trị cáp từ người dùng
    var kenh = document.getElementById("kenhCaoCap").value;
    // console.log(kenh);
    var tienCap;
    if (loaiKH == khNhaDan) {
        if (kenh == kenhDVXuLyHd) {
            tienCap = capXLHD;
        }
        else if (kenh == kenhDVCoBan) {
            tienCap = capCoBan;
        }
        else if (kenh == kenhDVCaoCap) {
            tienCap = capDVCC;
        }
    } else if (loaiKH == khDoanhNghiep) {
        if (kenh == kenhDVXuLyHd) {
            tienCap = capXLHD;
        }
        else if (kenh == kenhDVCoBan) {
            tienCap = capCoBan;
        }
        else if (kenh == kenhDVCaoCap) {
            tienCap = capDVCC;
        }
    }
    document.getElementById("tienCap").innerHTML = " Mã khách hàng : " + maKH + ", tiền cáp : " + (new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(tienCap));
}