import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel2"; /* eslint-disable jsx-a11y/anchor-is-valid */
import _ from "lodash";
import axios from "axios";

import { BASE_URL } from "../../util/contants";

import { Nav, Tab, Row, Col } from "react-bootstrap";

import { formatNumber } from "../../util/format";
// import 'react-owl-carousel2/style.css'; //Allows for server-side rendering.

const HotProduct = (props) => {
  const [data, setData] = useState([]);

  const options = {
    items: 4,
    // nav: true,
    rewind: false,
    navText: ["<", ">", "<", ">"],
    startPosition: 0,
    lazyLoad: true,
    loop: false,
    margin: 30,
    stagePadding: 1,
  };

  const events = {
    onDragged: function (event) {},
    onChanged: function (event) {
      console.log(event);
    },
  };

  const [currentTab, setCurrentTab] = useState("home");

  const categories = {
    home: "",
    "link-1": "Tivi",
    "link-2": "Laptop",
    "link-3": "Điện Thoại - Máy Tính Bảng",
    "link-4": "Đồng hồ",
    "link-5": "Âm thanh",
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/products?hot=true&category=${categories[currentTab]}`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => console.log(err));
  }, [currentTab]);

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
              onSelect={(value) => {
                console.log(value);
                setCurrentTab(value);
              }}
              activeKey={currentTab}
            >
              <Nav.Item>
                <Nav.Link
                  eventKey="home"
                  key={"home"}
                  className={currentTab === "home" ? "active" : ""}
                >
                  Tất cả
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" key={"nav-1 "}>
                  TV
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" key={"nav-2 "}>
                  {" "}
                  Máy tính
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3" key={"nav-3 "}>
                  {" "}
                  Điện thoại thông minh
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4" key={"nav-4 "}>
                  Đồng hồ
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-5" key={"nav-5 "}>
                  Thiết bị âm thanh
                </Nav.Link>
              </Nav.Item>
              <Nav.Item></Nav.Item>
            </Nav>
          </div>
        </div>
        <div>
          <Col>
            <Tab.Content className="tab-content tab-content-carousel just-action-icons-sm">
              <Tab.Pane eventKey="first" className="tab-pane p-0   show active">
                {data.length ? (
                  <OwlCarousel
                    options={options}
                    events={events}
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                  >
                    {data.map((item, index) => {
                      return (
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-new">
                              Hot
                            </span>
                            <a href="product.html">
                              <img
                                src={item.thumbnail_url}
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <button
                                className="btn-product-icon btn-wishlist"
                                title="Thêm vào giỏ hàng"
                              />
                            </div>
                            {/* End .product-action */}
                            <div className="product-action">
                              <a
                                className="btn-product btn-cart"
                                href="popup/quickView.html"
                                title="Add to cart"
                              >
                                <span>Thêm vào giỏ hàng</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>Xem </span>
                              </a>
                            </div>
                            {/* End .product-action */}
                          </figure>
                          {/* End .product-media */}
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="javascript:void(0)">
                                {_.get(item, ["categories", "name"])}
                              </a>
                            </div>
                            {/* End .product-cat */}
                            <h3 className="product-title">
                              <a
                                href="product.html"
                                style={{ textOverflow: "ellipsis " }}
                              >
                                {item.name}
                              </a>
                            </h3>
                            {/* End .product-title */}
                            <div className="product-price">
                              {formatNumber(item.price)} VND
                            </div>
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
                              <a
                                href="javascript:void(0)"
                                style={{ background: "#edd2c8" }}
                              >
                                <span className="sr-only">Color name</span>
                              </a>
                              <a
                                href="javascript:void(0)"
                                style={{ background: "#eaeaec" }}
                              >
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
                ) : (
                  ""
                )}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </div>
      </Tab.Container>
    </div>
  );
};

export default HotProduct;
