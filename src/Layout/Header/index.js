import React from "react";
import Logo from "../../assets/img/logo.png";
import "./style.scss";

const Header = () => {
  return (
    <div className="header-bar">
      <div className="topbar-menu-mobile-container">
        <div className="sidebar-header d-flex justify-content-between align-items-center p-2">
          <div className="logo-item d-flex align-items-center">
            <img src={Logo} alt="Logo" />
            <div className="logo-text px-1">
              <b className="px-1 ">turismo</b>inteligente
            </div>
          </div>
          <div className="sidebar-item d-flex">
            <div className="itme-1">ANUNCIE AQUI</div>
            <div className="item-2">
              <i class="bi bi-cart2"></i>
            </div>
            <div className="item-3 d-flex">
              <i class="bi bi-person-circle"></i>
              <div className="profile-user">Entre | Cadastre-se</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
