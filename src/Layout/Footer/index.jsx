import "./style.scss";
import React from "react";
import {Typography} from "@mui/material";

const Footer = () => {
  return (
    <div className="footer-bar">
      
      <div className=" social-item d-flex align-items-center col-12 d-lg-none justify-content-center">
          <i class="bi bi-whatsapp"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-facebook"></i>
        </div>
      <div className=" d-flex">
        
        <div className="footer-sidebar-container d-flex  col-11 flex-wrap align-items-center flex-column flex-md-row">
          <div className="contact-item d-flex flex-column align-items-center">
            <div>CONTATO</div>
            <div>+55 48 99999-9999</div>
            <div>+55 48 98888-8888</div>
            <div>contato@turismointeligente.com</div>
          </div>
          <div className="service-item d-flex flex-column align-items-center">
            <div>SERVICOS</div>
            <div>CONTATO</div>
            <div>Reservas & Pagamentos</div>
            <div>Anucie aqui</div>
            <div>SAC</div>
            <div>FAQ</div>
          </div>
          <div className="info-item d-flex flex-column align-items-center">
            <div>INFOMACQES</div>
            <div>Sobre o Turismo Inteligente</div>
            <div>Anucie aqui</div>
            <div>Politicas de Privacidatde</div>
            <div>Termos & Condicoes</div>
          </div>
        </div>
        <div className=" social-item d-flex flex-column aling-items-center col-1 d-none d-lg-flex">
          <i class="bi bi-whatsapp"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-facebook"></i>
        </div>
      </div>
      <div className="col-12">
        <Typography align="center" className="footer-credits">© 2023 Turismo Inteligente</Typography>
      </div>
    </div>

  );
};

export default Footer;
