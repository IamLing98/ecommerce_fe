import React, { useState, useEffect } from "react";

import axios from "axios";

import { BASE_URL } from "../../util/contants";

const AsideMenu = (props) => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/categories`)
      .then((response) => {
        console.log(response.data.data);
        setItemList(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className="tab-pane fade"
      id="mobile-cats-tab"
      role="tabpanel"
      aria-labelledby="mobile-cats-link"
    >
      <nav className="mobile-cats-nav">
        <ul className="mobile-cats-menu">
          {itemList.map((item, index) => {
            return (
              <li>
                <a className="mobile-cats-lead" href="#">
                  {item.item.title}
                </a>
              </li>
            );
          })}

          <li>
            <a className="mobile-cats-lead" href="#">
              Gift Ideas
            </a>
          </li>
          <li>
            <a href="#">Beds</a>
          </li>
          <li>
            <a href="#">Lighting</a>
          </li>
          <li>
            <a href="#">Sofas &amp; Sleeper sofas</a>
          </li>
          <li>
            <a href="#">Storage</a>
          </li>
          <li>
            <a href="#">Armchairs &amp; Chaises</a>
          </li>
          <li>
            <a href="#">Decoration </a>
          </li>
          <li>
            <a href="#">Kitchen Cabinets</a>
          </li>
          <li>
            <a href="#">Coffee &amp; Tables</a>
          </li>
          <li>
            <a href="#">Outdoor Furniture </a>
          </li>
        </ul>
        {/* End .mobile-cats-menu */}
      </nav>
      {/* End .mobile-cats-nav */}
    </div>
  );
};

export default AsideMenu;
