import React, { useState, useEffect } from "react";

import { Nav } from "react-bootstrap";

import axios from "axios";

import Banner from "../../components/Banner";

import PopularCategories from "../../components/PopularCategories";

import RecomendedProduct from "./RecomendedProduct";

import ThreeProductBanner from "./Banner";

import HotProduct from './HotProduct'

const Home = (props) => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:6001/api/products")
      .then((res) => setProduct(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main">
      <Banner />
      {/* PopularCategories */}
      {/* <p>{JSON.stringify(products)}</p> */}
      <PopularCategories />
      {/* End .container */}
      <div className="mb-4" />
      {/* End .mb-4 */}
      <ThreeProductBanner />
      {/* End .container */}
      <div className="mb-3" />
      {/* End .mb-5 */}
      <div className="container new-arrivals">
        <div className="heading heading-flex mb-3">
          <div className="heading-left">
            <h2 className="title">Hàng hot</h2>
            <HotProduct/>
            {/* End .title */}
          </div>
          {/* End .heading-left */}
          <div className="heading-right">
            <Nav  className="nav nav-pills nav-border-anim justify-content-center" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${2}`)}>
              <Nav.Item>
                <Nav.Link href="/home" className="nav-link active">
                  Tất cả</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">TV</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">  Máy tính</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">  Điện thoại thông minh</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2"> 
                  Đồng hồ</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2"> 
                
                Thiết bị âm thanh</Nav.Link>
              </Nav.Item>
              <Nav.Item> 
              </Nav.Item>
            </Nav>
             
          </div>
          {/* End .heading-right */}
        </div>
        {/* End .heading */}
        <div className="tab-content tab-content-carousel just-action-icons-sm">
          <div
            className="tab-pane p-0 fade show active"
            id="new-all-tab"
            role="tabpanel"
            aria-labelledby="new-all-link"
          >
            <div
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                          "nav": true, 
                          "dots": true,
                          "margin": 20,
                          "loop": false,
                          "responsive": {
                              "0": {
                                  "items":2
                              },
                              "480": {
                                  "items":2
                              },
                              "768": {
                                  "items":3
                              },
                              "992": {
                                  "items":4
                              },
                              "1200": {
                                  "items":5
                              }
                          }
                      }'
            >
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">Top</span>
                  <a href="product.html">
                    <img
                      src="https://res.cloudinary.com/linkdoan/image/upload/v1625511231/ecommerces/demos/demo-4/products/product-1_jyqhvd.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">MacBook Pro 13" Display, i5</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$1,199.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-2.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Audio</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Bose - SoundLink Bluetooth Speaker</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$79.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">New</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-3.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Tablets</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Apple - 11 Inch iPad Pro with Wi-Fi 256GB </a>
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
                    <a href="#" style={{ background: "#edd2c8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" className="active" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">Top</span>
                  <span className="product-label label-circle label-sale">Sale</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-4.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Cell Phone</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Google - Pixel 3 XL 128GB</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$35.41</span>
                    <span className="old-price">Was $41.67</span>
                  </div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 10 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a href="#" className="active" style={{ background: "#edd2c8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">Top</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-5.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">TV &amp; Home Theater</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Samsung - 55" Class LED 2160p Smart</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$899.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 5 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">Top</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">MacBook Pro 13" Display, i5</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$1,199.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="new-tv-tab"
            role="tabpanel"
            aria-labelledby="new-tv-link"
          >
            <div
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                          "nav": true, 
                          "dots": true,
                          "margin": 20,
                          "loop": false,
                          "responsive": {
                              "0": {
                                  "items":2
                              },
                              "480": {
                                  "items":2
                              },
                              "768": {
                                  "items":3
                              },
                              "992": {
                                  "items":4
                              },
                              "1200": {
                                  "items":5
                              }
                          }
                      }'
            >
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">New</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-3.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Tablets</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Apple - 11 Inch iPad Pro with Wi-Fi 256GB </a>
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
                    <a href="#" style={{ background: "#edd2c8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" className="active" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-2.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Audio</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Bose - SoundLink Bluetooth Speaker</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$79.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">Top</span>
                  <span className="product-label label-circle label-sale">Sale</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-4.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Cell Phone</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Google - Pixel 3 XL 128GB</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$35.41</span>
                    <span className="old-price">Was $41.67</span>
                  </div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 10 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a href="#" className="active" style={{ background: "#edd2c8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">Top</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-5.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">TV &amp; Home Theater</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Samsung - 55" Class LED 2160p Smart</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$899.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 5 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">Top</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">MacBook Pro 13" Display, i5</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$1,199.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="new-computers-tab"
            role="tabpanel"
            aria-labelledby="new-computers-link"
          >
            <div
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                          "nav": true, 
                          "dots": true,
                          "margin": 20,
                          "loop": false,
                          "responsive": {
                              "0": {
                                  "items":2
                              },
                              "480": {
                                  "items":2
                              },
                              "768": {
                                  "items":3
                              },
                              "992": {
                                  "items":4
                              },
                              "1200": {
                                  "items":5
                              }
                          }
                      }'
            >
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">Top</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-5.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">TV &amp; Home Theater</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Samsung - 55" Class LED 2160p Smart</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$899.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 5 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">Top</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">MacBook Pro 13" Display, i5</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$1,199.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">New</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-3.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Tablets</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Apple - 11 Inch iPad Pro with Wi-Fi 256GB </a>
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
                    <a href="#" style={{ background: "#edd2c8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" className="active" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-2.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Audio</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Bose - SoundLink Bluetooth Speaker</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$79.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">Top</span>
                  <span className="product-label label-circle label-sale">Sale</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-4.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Cell Phone</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Google - Pixel 3 XL 128GB</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$35.41</span>
                    <span className="old-price">Was $41.67</span>
                  </div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 10 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a href="#" className="active" style={{ background: "#edd2c8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="new-phones-tab"
            role="tabpanel"
            aria-labelledby="new-phones-link"
          >
            <div
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                          "nav": true, 
                          "dots": true,
                          "margin": 20,
                          "loop": false,
                          "responsive": {
                              "0": {
                                  "items":2
                              },
                              "480": {
                                  "items":2
                              },
                              "768": {
                                  "items":3
                              },
                              "992": {
                                  "items":4
                              },
                              "1200": {
                                  "items":5
                              }
                          }
                      }'
            >
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">Top</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">MacBook Pro 13" Display, i5</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$1,199.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-2.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Audio</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Bose - SoundLink Bluetooth Speaker</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$79.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">New</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-3.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Tablets</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Apple - 11 Inch iPad Pro with Wi-Fi 256GB </a>
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
                    <a href="#" style={{ background: "#edd2c8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" className="active" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">Top</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-5.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">TV &amp; Home Theater</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Samsung - 55" Class LED 2160p Smart</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$899.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 5 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">Top</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">MacBook Pro 13" Display, i5</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$1,199.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">Top</span>
                  <span className="product-label label-circle label-sale">Sale</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-4.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Cell Phone</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Google - Pixel 3 XL 128GB</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$35.41</span>
                    <span className="old-price">Was $41.67</span>
                  </div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 10 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a href="#" className="active" style={{ background: "#edd2c8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="new-watches-tab"
            role="tabpanel"
            aria-labelledby="new-watches-link"
          >
            <div
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                          "nav": true, 
                          "dots": true,
                          "margin": 20,
                          "loop": false,
                          "responsive": {
                              "0": {
                                  "items":2
                              },
                              "480": {
                                  "items":2
                              },
                              "768": {
                                  "items":3
                              },
                              "992": {
                                  "items":4
                              },
                              "1200": {
                                  "items":5
                              }
                          }
                      }'
            >
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">Top</span>
                  <span className="product-label label-circle label-sale">Sale</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-4.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Cell Phone</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Google - Pixel 3 XL 128GB</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$35.41</span>
                    <span className="old-price">Was $41.67</span>
                  </div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 10 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a href="#" className="active" style={{ background: "#edd2c8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">Top</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">MacBook Pro 13" Display, i5</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$1,199.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-2.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Audio</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Bose - SoundLink Bluetooth Speaker</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$79.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">New</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-3.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Tablets</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Apple - 11 Inch iPad Pro with Wi-Fi 256GB </a>
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
                    <a href="#" style={{ background: "#edd2c8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" className="active" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="new-acc-tab"
            role="tabpanel"
            aria-labelledby="new-acc-link"
          >
            <div
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                          "nav": true, 
                          "dots": true,
                          "margin": 20,
                          "loop": false,
                          "responsive": {
                              "0": {
                                  "items":2
                              },
                              "480": {
                                  "items":2
                              },
                              "768": {
                                  "items":3
                              },
                              "992": {
                                  "items":4
                              },
                              "1200": {
                                  "items":5
                              }
                          }
                      }'
            >
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">Top</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">MacBook Pro 13" Display, i5</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$1,199.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">Top</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-5.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">TV &amp; Home Theater</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Samsung - 55" Class LED 2160p Smart</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$899.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 5 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">Top</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">MacBook Pro 13" Display, i5</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$1,199.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-2.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Audio</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Bose - SoundLink Bluetooth Speaker</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$79.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">New</span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-3.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart">
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
                    <a href="#">Tablets</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Apple - 11 Inch iPad Pro with Wi-Fi 256GB </a>
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
                    <a href="#" style={{ background: "#edd2c8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" className="active" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
        </div>
        {/* End .tab-content */}
      </div>
      {/* End .container */}
      <div className="mb-6" />
      {/* End .mb-6 */}
      <div className="container">
        <div
          className="cta cta-border mb-5"
          style={{ backgroundImage: "url(assets/images/demos/demo-4/bg-1.jpg)" }}
        >
          <img
            src="https://res.cloudinary.com/linkdoan/image/upload/v1625511230/ecommerces/demos/demo-4/camera_mhetjt.png"
            alt="camera"
            className="cta-img"
          />
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="cta-content">
                <div className="cta-text text-right text-white">
                  <p>
                    Shop Today’s Deals <br />
                    <strong>Awesome Made Easy. HERO7 Black</strong>
                  </p>
                </div>
                {/* End .cta-text */}
                <a href="#" className="btn btn-primary btn-round">
                  <span>Shop Now - $429.99</span>
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
              {/* End .cta-content */}
            </div>
            {/* End .col-md-12 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .cta */}
      </div>
      {/* End .container */}
      <div className="container">
        <div className="heading text-center mb-3">
          <h2 className="title">Deals &amp; Outlet</h2>
          {/* End .title */}
          <p className="title-desc">Today’s deal and more</p>
          {/* End .title-desc */}
        </div>
        {/* End .heading */}
        <div className="row">
          <div className="col-lg-6 deal-col">
            <div
              className="deal"
              style={{
                backgroundImage: 'url("assets/images/demos/demo-4/deal/bg-1.jpg")',
              }}
            >
              <div className="deal-top">
                <h2>Deal of the Day.</h2>
                <h4>Limited quantities. </h4>
              </div>
              {/* End .deal-top */}
              <div className="deal-content">
                <h3 className="product-title">
                  <a href="product.html">Home Smart Speaker with Google Assistant</a>
                </h3>
                {/* End .product-title */}
                <div className="product-price">
                  <span className="new-price">$129.00</span>
                  <span className="old-price">Was $150.99</span>
                </div>
                {/* End .product-price */}
                <a href="product.html" className="btn btn-link">
                  <span>Shop Now</span>
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
              {/* End .deal-content */}
              <div className="deal-bottom">
                <div className="deal-countdown daily-deal-countdown" data-until="+10h" />
                {/* End .deal-countdown */}
              </div>
              {/* End .deal-bottom */}
            </div>
            {/* End .deal */}
          </div>
          {/* End .col-lg-6 */}
          <div className="col-lg-6 deal-col">
            <div
              className="deal"
              style={{
                backgroundImage: 'url("assets/images/demos/demo-4/deal/bg-2.jpg")',
              }}
            >
              <div className="deal-top">
                <h2>Your Exclusive Offers.</h2>
                <h4>Sign in to see amazing deals.</h4>
              </div>
              {/* End .deal-top */}
              <div className="deal-content">
                <h3 className="product-title">
                  <a href="product.html">
                    Certified Wireless Charging Pad for iPhone / Android
                  </a>
                </h3>
                {/* End .product-title */}
                <div className="product-price">
                  <span className="new-price">$29.99</span>
                </div>
                {/* End .product-price */}
                <a href="login.html" className="btn btn-link">
                  <span>Sign In and Save money</span>
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
              {/* End .deal-content */}
              <div className="deal-bottom">
                <div className="deal-countdown offer-countdown" data-until="+11d" />
                {/* End .deal-countdown */}
              </div>
              {/* End .deal-bottom */}
            </div>
            {/* End .deal */}
          </div>
          {/* End .col-lg-6 */}
        </div>
        {/* End .row */}
        <div className="more-container text-center mt-1 mb-5">
          <a href="#" className="btn btn-outline-dark-2 btn-round btn-more">
            <span>Shop more Outlet deals</span>
            <i className="icon-long-arrow-right" />
          </a>
        </div>
        {/* End .more-container */}
      </div>
      {/* End .container */}
      <div className="container">
        <hr className="mb-0" />
        <div
          className="owl-carousel mt-5 mb-5 owl-simple"
          data-toggle="owl"
          data-owl-options='{
                  "nav": false, 
                  "dots": false,
                  "margin": 30,
                  "loop": false,
                  "responsive": {
                      "0": {
                          "items":2
                      },
                      "420": {
                          "items":3
                      },
                      "600": {
                          "items":4
                      },
                      "900": {
                          "items":5
                      },
                      "1024": {
                          "items":6
                      }
                  }
              }'
        >
          <a href="#" className="brand">
            <img src="assets/images/brands/1.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="assets/images/brands/2.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="assets/images/brands/3.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="assets/images/brands/4.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="assets/images/brands/5.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="assets/images/brands/6.png" alt="Brand Name" />
          </a>
        </div>
        {/* End .owl-carousel */}
      </div>
      {/* End .container */}
      <div className="bg-light pt-5 pb-6">
        <div className="container trending-products">
          <div className="heading heading-flex mb-3">
            <div className="heading-left">
              <h2 className="title">Trending Products</h2>
              {/* End .title */}
            </div>
            {/* End .heading-left */}
            <div className="heading-right">
              <ul
                className="nav nav-pills nav-border-anim justify-content-center"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="trending-top-link"
                    data-toggle="tab"
                    href="#trending-top-tab"
                    role="tab"
                    aria-controls="trending-top-tab"
                    aria-selected="true"
                  >
                    Top Rated
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="trending-best-link"
                    data-toggle="tab"
                    href="#trending-best-tab"
                    role="tab"
                    aria-controls="trending-best-tab"
                    aria-selected="false"
                  >
                    Best Selling
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="trending-sale-link"
                    data-toggle="tab"
                    href="#trending-sale-tab"
                    role="tab"
                    aria-controls="trending-sale-tab"
                    aria-selected="false"
                  >
                    On Sale
                  </a>
                </li>
              </ul>
            </div>
            {/* End .heading-right */}
          </div>
          {/* End .heading */}
          <div className="row">
            <div className="col-xl-5col d-none d-xl-block">
              <div className="banner">
                <a href="#">
                  <img
                    src="assets/images/demos/demo-4/banners/banner-4.jpg"
                    alt="banner"
                  />
                </a>
              </div>
              {/* End .banner */}
            </div>
            {/* End .col-xl-5col */}
            <div className="col-xl-4-5col">
              <div className="tab-content tab-content-carousel just-action-icons-sm">
                <div
                  className="tab-pane p-0 fade show active"
                  id="trending-top-tab"
                  role="tabpanel"
                  aria-labelledby="trending-top-link"
                >
                  <div
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                                      "nav": true, 
                                      "dots": false,
                                      "margin": 20,
                                      "loop": false,
                                      "responsive": {
                                          "0": {
                                              "items":2
                                          },
                                          "480": {
                                              "items":2
                                          },
                                          "768": {
                                              "items":3
                                          },
                                          "992": {
                                              "items":4
                                          }
                                      }
                                  }'
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-6.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
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
                          <a href="#">Headphones</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Bose - SoundSport wireless headphones</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$199.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: "100%" }} />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#69b4ff" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#ff887f" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
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
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-7.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
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
                          <a href="#">Video Games</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Microsoft - Refurbish Xbox One S 500GB
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$279.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: "60%" }} />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">New</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-8.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
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
                          <a href="#">Smartwatches</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple Watch Series 4 Gold Aluminum Case
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$499.99</div>
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
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
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
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-9.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
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
                          <a href="#">TV &amp; Home Theater</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Sony - Class LED 2160p Smart 4K Ultra HD
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$1,699.99</span>
                          <span className="old-price">Was $1,999.99</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: "80%" }} />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">New</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-3.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
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
                          <a href="#">Tablets</a>
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
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
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
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane p-0 fade"
                  id="trending-best-tab"
                  role="tabpanel"
                  aria-labelledby="trending-best-link"
                >
                  <div
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                                      "nav": true, 
                                      "dots": false,
                                      "margin": 20,
                                      "loop": false,
                                      "responsive": {
                                          "0": {
                                              "items":2
                                          },
                                          "480": {
                                              "items":2
                                          },
                                          "768": {
                                              "items":3
                                          },
                                          "992": {
                                              "items":4
                                          }
                                      }
                                  }'
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">New</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-3.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
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
                          <a href="#">Tablets</a>
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
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
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
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-2.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
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
                          <a href="#">Audio</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Bose - SoundLink Bluetooth Speaker</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$79.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: "60%" }} />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-4.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
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
                          <a href="#">Cell Phone</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Google - Pixel 3 XL 128GB</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$35.41</span>
                          <span className="old-price">Was $41.67</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: "100%" }} />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#edd2c8" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-5.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
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
                          <a href="#">TV &amp; Home Theater</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Samsung - 55" Class LED 2160p Smart</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$899.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: "60%" }} />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 5 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
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
                          <a href="#">Laptops</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$1,199.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: "100%" }} />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane p-0 fade"
                  id="trending-sale-tab"
                  role="tabpanel"
                  aria-labelledby="trending-sale-link"
                >
                  <div
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                                      "nav": true, 
                                      "dots": false,
                                      "margin": 20,
                                      "loop": false,
                                      "responsive": {
                                          "0": {
                                              "items":2
                                          },
                                          "480": {
                                              "items":2
                                          },
                                          "768": {
                                              "items":3
                                          },
                                          "992": {
                                              "items":4
                                          }
                                      }
                                  }'
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">New</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-8.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
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
                          <a href="#">Smartwatches</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple Watch Series 4 Gold Aluminum Case
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$499.99</div>
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
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
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
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">Top</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-6.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
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
                          <a href="#">Headphones</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Bose - SoundSport wireless headphones</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$199.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: "100%" }} />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#69b4ff" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#ff887f" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
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
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-7.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
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
                          <a href="#">Video Games</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Microsoft - Refurbish Xbox One S 500GB
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$279.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: "60%" }} />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">New</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-3.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
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
                          <a href="#">Tablets</a>
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
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
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
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
              </div>
              {/* End .tab-content */}
            </div>
            {/* End .col-xl-4-5col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .bg-light pt-5 pb-6 */}
      <div className="mb-5" />
      {/* End .mb-5 */}
      <RecomendedProduct products={products} />
      <div className="mb-4" />
      {/* End .mb-4 */}
      <div className="container">
        <hr className="mb-0" />
      </div>
      {/* End .container */}
      <div className="icon-boxes-container bg-transparent">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-rocket" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Miễn Phí Vận Chuyển</h3>
                  {/* End .icon-box-title */}
                  <p>Đơn hàng trên 3 triệu</p>
                </div>
                {/* End .icon-box-content */}
              </div>
              {/* End .icon-box */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-rotate-left" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Miễn Phí Đổi Trả</h3>
                  {/* End .icon-box-title */}
                  <p>Trong vòng 30 ngày</p>
                </div>
                {/* End .icon-box-content */}
              </div>
              {/* End .icon-box */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-info-circle" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Giảm Giá 5%</h3>
                  {/* End .icon-box-title */}
                  <p>Khi đăng nhập</p>
                </div>
                {/* End .icon-box-content */}
              </div>
              {/* End .icon-box */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-life-ring" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Hỗ Trợ</h3>
                  {/* End .icon-box-title */}
                  <p>24/7 </p>
                </div>
                {/* End .icon-box-content */}
              </div>
              {/* End .icon-box */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .icon-boxes-container */}
    </main>
  );
};

export default Home;
