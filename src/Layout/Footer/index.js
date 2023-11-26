import "./style.scss";
import React from "react";

const Footer = () => {
    return(
        <div className = "footer-bar">
            <div className = "footer-sidebar-container d-flex">
                <div className ="contact-item d-flex flex-column align-items-center">
                    <div>CONTATO</div>
                    <div>+55 48 99999-9999</div>
                    <div>+55 48 98888-8888</div>
                    <div>Contato@turismointeligente.com</div>
                </div>
                <div className ="service-item d-flex flex-column align-items-center">
                    <div>SERVICOS</div>
                    <div>CONTATO</div>
                    <div>Reservas & Pagamentos</div>
                    <div>Anucie aqui</div>
                    <div>SAC</div>
                    <div>FAQ</div>
                </div>
                <div className ="service-item d-flex flex-column align-items-center">
                    <div>SERVICOS</div>
                    <div>CONTATO</div>
                    <div>Reservas & Pagamentos</div>
                    <div>Anucie aqui</div>
                    <div>SAC</div>
                    <div>FAQ</div>
                </div>
                <div className ="info-item d-flex flex-column align-items-center">
                    <div>INFOMACQES</div>
                    <div>Sobre o Turismo Inteligente</div>
                    <div>Anucie aqui</div>
                    <div>Politicas de Privacidatde</div>
                    <div>Termos & Condicoes</div>
                </div>
                <div className = "social-item d-flex flex-column aling-items-center">
                    <i class="bi bi-whatsapp"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer;