import React from "react";

const RecomendedProduct = (props) => {
  const formatNumber = (number) => {
    return new Intl.NumberFormat("ja-JP", { maximumSignificantDigits: 3 }).format(number);
  };
  return (
    <div className="container for-you">
      <div className="heading heading-flex mb-3">
        <div className="heading-left">
          <h2 className="title">Đề xuất cho bạn</h2>
          {/* End .title */}
        </div>
        {/* End .heading-left */}
        <div className="heading-right">
          <a href="#" className="title-link">
            Xem tất cả đề xuất <i className="icon-long-arrow-right" />
          </a>
        </div>
        {/* End .heading-right */}
      </div>
      {/* End .heading */}
      <div className="products">
        <div className="row justify-content-center">
          {props.products
            ? props.products.map((item, idex) => {
                return (
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-sale">
                          Khuyến mãi
                        </span>
                        <a href="product.html">
                          <img
                            src={item.thumbnail_url}
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
                            <span>Thêm giỏ hàng</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>Xem nhanh</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">{item.brand_name}</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">{item.name.split('(')[0]}</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">{formatNumber(item.price)} VND</span>
                          <span className="old-price">
                            {formatNumber((item.price * 130) / 100)} VND
                          </span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: "40%" }} />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">
                            {item.review_count} đánh giá
                          </span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#666666" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#ff887f" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#6699cc" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#f3dbc1" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                );
              })
            : ""}
        </div>
        {/* End .row */}
      </div>
      {/* End .products */}
    </div>
  );
};

export default RecomendedProduct;
