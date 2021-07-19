import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel2";/* eslint-disable jsx-a11y/anchor-is-valid */

import { Nav, Tab, Row, Col } from "react-bootstrap";
// import 'react-owl-carousel2/style.css'; //Allows for server-side rendering.

const HotProduct = (props) => {
  const options = {
    items: 4,
    nav: true,
    rewind: false,
    autoplay: false,
    navText: ["<", ">", "<", ">"],
  };

  const events = {
    onDragged: function (event) {},
    onChanged: function (event) {},
  };

  const [currentTab, setCurrentTab] = useState("1");

  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="container new-arrivals">
      <Tab.Container className="container new-arrivals" defaultActiveKey="first">
        <div className="heading heading-flex mb-3">
          <div className="heading-left">
            <h2 className="title">Hàng hot</h2>
            {/* End .title */}
          </div>
          <div className="heading-right">
            <Nav
              variant="pills"
              className="nav nav-pills nav-border-anim justify-content-center"
            >
              <Nav.Item>
                <Nav.Link href="/home" className="nav-link active">
                  Tất cả
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">TV</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2"> Máy tính</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2"> Điện thoại thông minh</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Đồng hồ</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Thiết bị âm thanh</Nav.Link>
              </Nav.Item>
              <Nav.Item></Nav.Item>
            </Nav>
          </div>
        </div>
        <div>
          <Col>
            <Tab.Content className="tab-content tab-content-carousel just-action-icons-sm">
              <Tab.Pane eventKey="first" className="tab-pane p-0   show active">
                <OwlCarousel
                  options={options}
                  events={events}
                  className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                >
                  {items.map((item, index) => {
                    return (
                      <div className="product product-2">
                        <figure className="product-media">
                          <span className="product-label label-circle label-new">
                            New
                          </span>
                          <a href="product.html">
                            <img
                              src="https://salt.tikicdn.com/cache/280x280/ts/product/c6/d6/43/5beaa2a6b934008e97eac20e2fc0580a.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <button
                              className="btn-product-icon btn-wishlist"
                              title="Add to wishlist"
                            />
                          </div>
                          {/* End .product-action */}
                          <div className="product-action">
                            <a
                              className="btn-product btn-cart" 
                              href="popup/quickView.html"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product btn-quickview"
                              title="Quick view"
                            >
                              <span>quick view</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a  href="javascript:void(0)"   >Tablets</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">
                              Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                            </a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">$899.99</div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div className="ratings-val" style={{ width: "80%" }} />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 4 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                          <div className="product-nav product-nav-dots">
                            <a href="javascript:void(0)" style={{ background: "#edd2c8" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="javascript:void(0)" style={{ background: "#eaeaec" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="active"
                              style={{ background: "#333333" }}
                            >
                              <span className="sr-only">Color name</span>
                            </a>
                          </div>
                          {/* End .product-nav */}
                        </div>
                        {/* End .product-body */}
                      </div>
                    );
                  })}
                </OwlCarousel>
              </Tab.Pane>
              <Tab.Pane eventKey="second">asd</Tab.Pane>
            </Tab.Content>
          </Col>
        </div>
      </Tab.Container>
    </div>
  );
};

export default HotProduct;
