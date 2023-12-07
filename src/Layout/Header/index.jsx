import React from "react";
import Logo from "../../assets/img/advertisement-logo.png";
import "./style.scss";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <div className="header-bar">
      <div className="topbar-menu-mobile-container">
        <div className="sidebar-header  d-flex justify-content-between align-items-center p-2 col-12 d-none d-lg-flex">
          <div className="logo-item d-flex align-items-center">
            <img src={Logo} alt="Logo" />
            <div className="logo-text px-1">
              <b>turismo</b>inteligente
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
        <div className="col-11 d-flex justify-content-center m-auto">
          <div className="d-lg-none py-2 col-12 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              
                <MenuIcon className="burger" id="burger" style={{ color: 'white', fontSize: '40px' }}></MenuIcon>
              

              <div className="mobile-logo-container  d-flex align-items-center">
                <img src={Logo} alt="Logo" style={{ width: '40px' }} />
                <div>
                  <p>tursimo</p>
                  <p>inteligente</p>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-4">
              <i style={{ color: 'white', fontSize: '25px', fontWeight: '500' }} class="bi bi-cart2"></i>
              <i style={{ color: 'white', fontSize: '25px', fontWeight: '500' }} class="bi bi-person-circle"></i>
            </div>
          </div>

          
        </div>


    {/* this section is used for mobile sidebar */}
        <header className="header d-lg-none">
          <div className="container">
            <nav className="navbar">
              <span className="overlay" />
              <div className="menu" id="menu">
                <ul className="menu-inner">
                  {/* <li className="menu-item"><a className="menu-link" href="#">Home</a></li>
                  <li className="menu-item"><a className="menu-link" href="#">About</a></li>
                  <li className="menu-item"><a className="menu-link" href="#">Service</a></li>
                  <li className="menu-item"><a className="menu-link" href="#">Project</a></li>
                  <li className="menu-item"><a className="menu-link" href="#">Support</a></li> */}
                </ul>
              </div>
            </nav>
          </div>
        </header>


        {/* <header className="header">
          <div className="container">
            <nav className="navbar">
              <div className="burger" id="burger">
                <span className="burger-line" />
                <span className="burger-line" />
                <span className="burger-line" />
              </div>
              <span className="overlay" />
              <div className="menu" id="menu">
                <ul className="menu-inner">
                  <li className="menu-item"><a className="menu-link" href="#">Home</a></li>
                  <li className="menu-item"><a className="menu-link" href="#">About</a></li>
                  <li className="menu-item"><a className="menu-link" href="#">Service</a></li>
                  <li className="menu-item"><a className="menu-link" href="#">Project</a></li>
                  <li className="menu-item"><a className="menu-link" href="#">Support</a></li>
                </ul>
              </div>

            </nav>
          </div>
        </header> */}

      </div>
    </div>
  );
};

export default Header;
