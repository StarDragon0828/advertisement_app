import React from "react";
import "./style.scss";
import { Button } from "@mui/material";
import Layout from "../index";
// import check from '../../assets/check.png';
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";


const Advertise = () => {
  return (
    <Layout>
      <div className="wrapper">
        <div className="advertise-wrapper">
          <h2 className="advertise-title">Área do Anunciante</h2>
          <div className="advertise-block">
            <div className="advertise-group">
                <p className="ad-option">Meus Negócios</p>
                <span className="ad-arrow"></span>
            </div>
            <div className="advertise-group">
                <p className="ad-option">Meus Meus Anúncios</p>
                <span className="ad-arrow"></span>
            </div>
            <div className="advertise-group">
                <p className="ad-option">Adicionar Créditos</p>
                <span className="ad-arrow"></span>
            </div>
            <div className="advertise-group">
                <p className="ad-option">Validar Cupom</p>
                <span className="ad-arrow"></span>
            </div>
            <div className="advertise-group">
                <p className="ad-option">Políticas de Privacidade</p>
                <span className="ad-arrow"></span>
            </div>
            <div className="advertise-group">
                <p className="ad-option">Termos de Uso</p>
                <span className="ad-arrow"></span>
            </div>
         </div>
         <div className="btn-ad">
            <button className="btn-outline">CRIAR ANÚNCIO</button>
         </div>
         </div>
    </div>
    </Layout>
  );
};
export default Advertise;
