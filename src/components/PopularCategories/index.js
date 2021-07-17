import React from 'react';

const PopularCategories = props =>{

    return (    <div className="container">
    <h2 className="title text-center mb-4">Khám phá các danh mục phổ biến</h2>
    {/* End .title text-center */}
    <div className="cat-blocks-container">
      <div className="row">
        <div className="col-6 col-sm-4 col-lg-2">
          <a href="category.html" className="cat-block">
            <figure>
              <span>
                <img
                  src="https://res.cloudinary.com/linkdoan/image/upload/v1625511230/ecommerces/demos/demo-4/cats/1_lzhbat.png"
                  alt="Category image"
                />
              </span>
            </figure>
            <h3 className="cat-block-title">Máy tính &amp; Laptop</h3>
            {/* End .cat-block-title */}
          </a>
        </div>
        {/* End .col-sm-4 col-lg-2 */}
        <div className="col-6 col-sm-4 col-lg-2">
          <a href="category.html" className="cat-block">
            <figure>
              <span>
                <img
                  src="https://res.cloudinary.com/linkdoan/image/upload/v1625511230/ecommerces/demos/demo-4/cats/2_ppyntw.png"
                  alt="Category image"
                />
              </span>
            </figure>
            <h3 className="cat-block-title">Camera</h3>
            {/* End .cat-block-title */}
          </a>
        </div>
        {/* End .col-sm-4 col-lg-2 */}
        <div className="col-6 col-sm-4 col-lg-2">
          <a href="category.html" className="cat-block">
            <figure>
              <span>
                <img
                  src="https://res.cloudinary.com/linkdoan/image/upload/v1625511231/ecommerces/demos/demo-4/cats/3_ksskqn.png"
                  alt="Category image"
                />
              </span>
            </figure>
            <h3 className="cat-block-title">Smart Phones</h3>
            {/* End .cat-block-title */}
          </a>
        </div>
        {/* End .col-sm-4 col-lg-2 */}
        <div className="col-6 col-sm-4 col-lg-2">
          <a href="category.html" className="cat-block">
            <figure>
              <span>
                <img
                  src="https://res.cloudinary.com/linkdoan/image/upload/v1625511231/ecommerces/demos/demo-4/cats/4_uli8hx.png"
                  alt="Category image"
                />
              </span>
            </figure>
            <h3 className="cat-block-title">Tivi</h3>
            {/* End .cat-block-title */}
          </a>
        </div>
        {/* End .col-sm-4 col-lg-2 */}
        <div className="col-6 col-sm-4 col-lg-2">
          <a href="category.html" className="cat-block">
            <figure>
              <span>
                <img
                  src="https://res.cloudinary.com/linkdoan/image/upload/v1625511231/ecommerces/demos/demo-4/cats/5_sgyop9.png"
                  alt="Category image"
                />
              </span>
            </figure>
            <h3 className="cat-block-title">Âm thanh</h3>
            {/* End .cat-block-title */}
          </a>
        </div>
        {/* End .col-sm-4 col-lg-2 */}
        <div className="col-6 col-sm-4 col-lg-2">
          <a href="category.html" className="cat-block">
            <figure>
              <span>
                <img
                  src="https://res.cloudinary.com/linkdoan/image/upload/v1625511231/ecommerces/demos/demo-4/cats/6_imzubc.png"
                  alt="Category image"
                />
              </span>
            </figure>
            <h3 className="cat-block-title">Phụ kiện thông minh</h3>
            {/* End .cat-block-title */}
          </a>
        </div>
        {/* End .col-sm-4 col-lg-2 */}
      </div>
      {/* End .row */}
    </div>
    {/* End .cat-blocks-container */}
  </div>)
}

export default PopularCategories;