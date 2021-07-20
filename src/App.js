import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { v5 as uuidv5 } from "uuid";
import { RecoilRoot } from "recoil";

import Layout from "./components/Layout";

import { APP_USER_IDENTIFIER } from "./util/contants";

import "./index.scss";
import "./assets/style.css";
function App() {
  const userIdentifier = window.localStorage.getItem(APP_USER_IDENTIFIER);

  // window.localStorage.removeItem(APP_USER_IDENTIFIER);

  const getIp = async () => {
    return await axios
      .get("https://api.ipify.org?format=jsonp&callback=getIP")
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  useEffect(async () => {
    if (userIdentifier) {
      console.log(userIdentifier);
    } else {
      console.log("Khong co user");
      let ip = await getIp();
      let userIdentifierRaw = JSON.stringify(ip) + new Date();
      const MY_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";
      let md5UserIdetifier = uuidv5(userIdentifierRaw, MY_NAMESPACE);
      console.log(md5UserIdetifier);
      window.localStorage.setItem(APP_USER_IDENTIFIER, md5UserIdetifier);
    }
  }, []);

  return (
    <RecoilRoot>
      <Router>
        <Layout />
      </Router>
    </RecoilRoot>
  );
}

export default App;
