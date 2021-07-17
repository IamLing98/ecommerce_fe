import React from 'react';

const Banner = props =>{

    return(
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="banner banner-overlay banner-overlay-light">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/linkdoan/image/upload/v1625510784/ecommerces/banners/banner-1_ksdwqh.jpg"
                  alt="Banner"
                />
              </a>
              <div className="banner-content">
                <h4 className="banner-subtitle">
                  <a href="#">Smart Offer</a>
                </h4>
                {/* End .banner-subtitle */}
                <h3 className="banner-title">
                  <a href="#">
                    Tiết kiệm 15%{" "}
                    <strong>
                      khi mua <br />
                      iPhone X
                    </strong>
                  </a>
                </h3>
                {/* End .banner-title */}
                <a href="#" className="banner-link">
                  Mua ngay
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
              {/* End .banner-content */}
            </div>
            {/* End .banner */}
          </div>
          {/* End .col-md-4 */}
          <div className="col-md-6 col-lg-4">
            <div className="banner banner-overlay banner-overlay-light">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/linkdoan/image/upload/v1625510784/ecommerces/banners/banner-2_sellmo.jpg"
                  alt="Banner"
                />
              </a>
              <div className="banner-content">
                <h4 className="banner-subtitle">
                  <a href="#">Deal giới hạn</a>
                </h4>
                {/* End .banner-subtitle */}
                <h3 className="banner-title">
                  <a href="#">
                    <strong>Bose SoundSport</strong> <br />
                    Deal giới hạn -30%
                  </a>
                </h3>
                {/* End .banner-title */}
                <a href="#" className="banner-link">
                  Mua ngay
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
              {/* End .banner-content */}
            </div>
            {/* End .banner */}
          </div>
          {/* End .col-md-4 */}
          <div className="col-md-6 col-lg-4">
            <div className="banner banner-overlay banner-overlay-light">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/linkdoan/image/upload/v1625510784/ecommerces/banners/banner-fullwidth_y86y7o.jpg"
                  alt="Banner"
                />
              </a>
              <div className="banner-content">
                <h4 className="banner-subtitle">
                  <a href="#">Clearance</a>
                </h4>
                {/* End .banner-subtitle */}
                <h3 className="banner-title">
                  <a href="#">
                    <strong>GoPro - Fusion 360</strong> <br />
                    Tiết kiệm đến 70%
                  </a>
                </h3>
                {/* End .banner-title */}
                <a href="#" className="banner-link">
                  Mua ngay
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
              {/* End .banner-content */}
            </div>
            {/* End .banner */}
          </div>
          {/* End .col-lg-4 */}
        </div>
        {/* End .row */}
      </div>
    )
}

export default Banner;