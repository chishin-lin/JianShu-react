import React from "react";
import "../header.css";
import LogoImg from "../img/LOGO.jpg";

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img className="header-logo" src={LogoImg} alt="logo" />
      </a>
      <div className="header-middle">
        <a href="/" className="header-left active">
          首頁
        </a>
        <a href="/" className="header-left">
          下載APP
        </a>
        <input type="text" placeholder="搜尋" id="header-search" />
        <button type="submit">Submit</button>
        <a href="/" className="header-right">
          登入
        </a>
        <a href="/" className="header-right">
          Aa
        </a>
      </div>
      <div className="header-login">
        <button id="btn-ogr">註冊</button>
        <button>寫文章</button>
      </div>
    </div>
  );
};

export default Header;
