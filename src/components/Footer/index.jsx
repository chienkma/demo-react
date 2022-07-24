import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer--col1'>
        <h3>CÔNG TY CỔ PHẦN CANIFA</h3>
        <p>
          Số ĐKKD: 0107574310, ngày cấp: 23/09/2016, nơi cấp: Sở Kế hoạch và đầu
          tư Hà Nội
        </p>
        <p>
          Trụ sở chính: Số 688, Đường Quang Trung, Phường La Khê, Quận Hà Đông,
          Hà Nội, Việt Nam
        </p>
        <p>
          Địa chỉ liên hệ: Phòng 301 Tòa nhà GP Invest, 170 La Thành, P. Ô Chợ
          Dừa, Q. Đống Đa, Hà Nội
        </p>
        <p>Số điện thoại: +8424 - 7303.0222</p>
        <p>Fax: +8424 - 6277.6419</p>
        <p>Địa chỉ email: hello@canifa.com</p>
      </div>
      <div className='footer--col2'>
        <h3>THUƠNG HIỆU</h3>
        <a href='#'>Giới thiệu</a>
        <a href='#'>Tin tức</a>
        <a href='#'>Tuyển dụng</a>
        <a href='#'>Với cộng đồng</a>
        <a href='#'>Hệ thống cửa hàng</a>
        <a href='#'>Liên hệ</a>
      </div>
      <div className='footer--col3'>
        <h3>HỖ TRỢ</h3>
        <a href='#'>Hỏi đáp</a>
        <a href='#'>Chính sách KHTT</a>
        <a href='#'>Chính sách vận chuyển</a>
        <a href='#'>Hướng dẫn chọn size</a>
        <a href='#'>Kiểm tra đơn hàng</a>
        <a href='#'>Quy định đổi hàng</a>
        <a href='#'>Tra cứu điểm thẻ</a>
        <a href='#'>Chính sách bảo mật</a>
      </div>
      <div className='footer-col4'>
        <h3>TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</h3>
        <div className='download'>
          <img src='https://canifa.com/assets/images/bancode.png' />
          <img src='https://canifa.com/assets/images/googleplay.png' />
          <img src='https://canifa.com/assets/images/appstore.png' />
        </div>
        <h3>PHƯƠNG THỨC THANH TOÁN</h3>
        <div className='payment'>
          <img src='https://canifa.com/assets/images/pay.svg' />
          <img src='https://canifa.com/assets/images/bocongthuong.png' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
