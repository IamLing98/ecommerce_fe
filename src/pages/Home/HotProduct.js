import React from "react";
import OwlCarousel from "react-owl-carousel2";
// import 'react-owl-carousel2/style.css'; //Allows for server-side rendering.

const HotProduct = (props) => {
  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true,
  };

  const events = {
    onDragged: function (event) {},
    onChanged: function (event) {},
  };
  return (
    <OwlCarousel   options={options} events={events} className="owl-carousel owl-full carousel-equal-height carousel-with-shadow">
  <div className="product product-2">
  <figure className="product-media">
    <span className="product-label label-circle label-top">Top</span>
    <a href="product.html">
      <img src="https://salt.tikicdn.com/cache/280x280/ts/product/e1/1f/bc/fa056b1e5f54c36042b2755a642f11f4.jpg" alt="Product image" className="product-image" />
    </a>
    <div className="product-action-vertical">
      <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
    </div> 
    <div className="product-action">
      <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
      <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
    </div> 
  </figure> 
  <div className="product-body">
    <div className="product-cat">
      <a href="#">Laptops</a>
    </div> 
    <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
    <div className="product-price">
      $1,199.99
    </div> 
    <div className="ratings-container">
      <div className="ratings">
        <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
      </div> 
      <span className="ratings-text">( 4 Reviews )</span>
    </div> 
  </div> 
</div>  <div className="product product-2">
  <figure className="product-media">
    <span className="product-label label-circle label-top">Top</span>
    <a href="product.html">
      <img src="https://salt.tikicdn.com/cache/280x280/ts/product/e1/1f/bc/fa056b1e5f54c36042b2755a642f11f4.jpg" alt="Product image" className="product-image" />
    </a>
    <div className="product-action-vertical">
      <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
    </div> 
    <div className="product-action">
      <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
      <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
    </div> 
  </figure> 
  <div className="product-body">
    <div className="product-cat">
      <a href="#">Laptops</a>
    </div> 
    <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
    <div className="product-price">
      $1,199.99
    </div> 
    <div className="ratings-container">
      <div className="ratings">
        <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
      </div> 
      <span className="ratings-text">( 4 Reviews )</span>
    </div> 
  </div> 
</div>  <div className="product product-2">
  <figure className="product-media">
    <span className="product-label label-circle label-top">Top</span>
    <a href="product.html">
      <img src="https://salt.tikicdn.com/cache/280x280/ts/product/e1/1f/bc/fa056b1e5f54c36042b2755a642f11f4.jpg" alt="Product image" className="product-image" />
    </a>
    <div className="product-action-vertical">
      <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
    </div> 
    <div className="product-action">
      <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
      <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
    </div> 
  </figure> 
  <div className="product-body">
    <div className="product-cat">
      <a href="#">Laptops</a>
    </div> 
    <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
    <div className="product-price">
      $1,199.99
    </div> 
    <div className="ratings-container">
      <div className="ratings">
        <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
      </div> 
      <span className="ratings-text">( 4 Reviews )</span>
    </div> 
  </div> 
</div>  <div className="product product-2">
  <figure className="product-media">
    <span className="product-label label-circle label-top">Top</span>
    <a href="product.html">
      <img src="https://salt.tikicdn.com/cache/280x280/ts/product/e1/1f/bc/fa056b1e5f54c36042b2755a642f11f4.jpg" alt="Product image" className="product-image" />
    </a>
    <div className="product-action-vertical">
      <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
    </div> 
    <div className="product-action">
      <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
      <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
    </div> 
  </figure> 
  <div className="product-body">
    <div className="product-cat">
      <a href="#">Laptops</a>
    </div> 
    <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
    <div className="product-price">
      $1,199.99
    </div> 
    <div className="ratings-container">
      <div className="ratings">
        <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
      </div> 
      <span className="ratings-text">( 4 Reviews )</span>
    </div> 
  </div> 
</div>

 
    </OwlCarousel>
  );
};

export default HotProduct;
