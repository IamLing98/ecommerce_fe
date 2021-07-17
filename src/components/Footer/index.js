import React from "react"; 

const Footer = (props) => {
  return (
    <footer className="footer">
    <div
      className="cta bg-image bg-dark pt-4 pb-5 mb-0"
      style={{ backgroundImage: "url(assets/images/demos/demo-4/bg-5.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-8 col-lg-6">
            <div className="cta-heading text-center">
              <h3 className="cta-title text-white">Nhận ưu đãi mới nhất</h3>
              {/* End .cta-title */}
              <p className="cta-desc text-white">
                và <span className="font-weight-normal">10% giảm giá</span>{" "}
                cho lần mua đầu tiên
              </p>
              {/* End .cta-desc */}
            </div>
            {/* End .text-center */}
            <form action="#">
              <div className="input-group input-group-round">
                <input
                  type="email"
                  className="form-control form-control-white"
                  placeholder="Địa chỉ email..."
                  aria-label="Email Adress"
                  required
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">
                    <span>Đăng ký</span>
                    <i className="icon-long-arrow-right" />
                  </button>
                </div>
                {/* .End .input-group-append */}
              </div>
              {/* .End .input-group */}
            </form>
          </div>
          {/* End .col-sm-10 col-md-8 col-lg-6 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </div>
    {/* End .cta */}
    <div className="footer-middle">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="widget widget-about">
              <img
                src="https://res.cloudinary.com/linkdoan/image/upload/v1625765598/ecommerces/banners/logo_2_pdt9bs.png"
                className="footer-logo"
                alt="Footer Logo"
                width={250}
                height={25}
              /> 
              <div className="widget-call">
                <i className="icon-phone" />
                Hỗ trợ 24/7
                <a href="tel:#">+094708429</a>
              </div>
              {/* End .widget-call */}
            </div>
            {/* End .widget about-widget */}
          </div>
          {/* End .col-sm-6 col-lg-3 */}
          <div className="col-sm-6 col-lg-3">
            <div className="widget">
              <h4 className="widget-title">Đường dẫn</h4>
              {/* End .widget-title */}
              <ul className="widget-list">
                <li>
                  <a href="about.html">Cửa hàng</a>
                </li>
                <li>
                  <a href="#">Dịch vụ</a>
                </li>
                <li>
                  <a href="#">Mua hàng tại ClickShop</a>
                </li>
                <li>
                  <a href="faq.html">FAQ</a>
                </li>
                <li>
                  <a href="contact.html">Liên hệ</a>
                </li>
              </ul>
              {/* End .widget-list */}
            </div>
            {/* End .widget */}
          </div>
          {/* End .col-sm-6 col-lg-3 */}
          <div className="col-sm-6 col-lg-3">
            <div className="widget">
              <h4 className="widget-title">Chăm sóc khách hàng</h4>
              {/* End .widget-title */}
              <ul className="widget-list">
                <li>
                  <a href="#">Thanh toán</a>
                </li>
                <li>
                  <a href="#">Bảo hành</a>
                </li>
                <li>
                  <a href="#">Đổi trả sản phẩm</a>
                </li>
                <li>
                  <a href="#">Vận chuyển</a>
                </li>
                <li>
                  <a href="#">Điều khoản dịch vụ</a>
                </li>
                <li>
                  <a href="#">Chính sách pháp lý</a>
                </li>
              </ul>
              {/* End .widget-list */}
            </div>
            {/* End .widget */}
          </div>
          {/* End .col-sm-6 col-lg-3 */}
          <div className="col-sm-6 col-lg-3">
            <div className="widget">
              <h4 className="widget-title">Tài khoản</h4>
              {/* End .widget-title */}
              <ul className="widget-list">
                <li>
                  <a href="#">Đăng nhập</a>
                </li>
                <li>
                  <a href="cart.html">Giỏ hàng</a>
                </li>
                <li>
                  <a href="#">Yêu thích</a>
                </li>
                <li>
                  <a href="#">Theo dõi đơn hàng</a>
                </li>
                <li>
                  <a href="#">Trợ giúp</a>
                </li>
              </ul>
              {/* End .widget-list */}
            </div>
            {/* End .widget */}
          </div>
          {/* End .col-sm-6 col-lg-3 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </div>
    {/* End .footer-middle */}
    <div className="footer-bottom">
      <div className="container">
        <p className="footer-copyright">
          Copyright © 2021 ClickShop. All Rights Reserved.
        </p>
        {/* End .footer-copyright */}
        <figure className="footer-payments">
          <img
            src="https://res.cloudinary.com/linkdoan/image/upload/v1625510878/ecommerces/payments_kt6e0k.png"
            alt="Payment methods"
            width={272}
            height={20}
          />
        </figure>
        {/* End .footer-payments */}
      </div>
      {/* End .container */}
    </div>
    {/* End .footer-bottom */}
  </footer>
  );
};

export default Footer;
