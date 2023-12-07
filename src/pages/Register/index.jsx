import React from "react";
import "./style.scss";
import { Button } from "@mui/material";
import Layout from "../../Layout/index";
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


const Register = () => {
  return (
    <Layout>
      <div className="wrapper">
        <div className="register-wrapper">
          <h2 className="register-title">Cadastro de Anunciante</h2>
          <div className="register-block">
            <TextField
              id="nome"
              label="Nome completo"
              variant="outlined"
              className="txt"
              size="small"
            />

            <TextField
              id="email"
              label="Email"
              variant="outlined"
              className="txt"
              size="small"
            />

            <TextField
              id="confirmar"
              label="Confirmar email"
              variant="outlined"
              className="txt"
              size="small"
            />

            <TextField
              id="senha"
              label="Senha"
              variant="outlined"
              className="txt"
              size="small"
            />
            <FormControl className="gender-group">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Tipo de pessoa:
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Física"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Jurídica"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              id="telefone"
              label="Telefone"
              variant="outlined"
              className="txt"
              size="small"
            />

            <TextField
              id="cpf"
              label="CPF"
              variant="outlined"
              className="txt"
              size="small"
            />

             <TextField
              id="cc"
              label="Código CADASTUR"
              variant="outlined"
              className="txt"
              size="small"
            />

            

            <div className="form-inner-wrapper">
            <FormLabel id="demo-row-radio-buttons-group-label" className="form-label">Endereço:</FormLabel>
                <div className="inner-field-wrapper">
                    <TextField
                    id="cc"
                    label="CEP"
                    variant="outlined"
                    className="txt"
                    size="small"
                    />
                    <button>OK</button>
                </div>
            </div>

            <div className="form-field-group">
                <FormLabel id="demo-row-radio-buttons-group-label">Dados para repasse dos valores das vendas:</FormLabel>
                <FormControl fullWidth className="gender">
                    <InputLabel id="demo-simple-select-label" size="small">
                    Gênero
                    </InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Gênero"
                    size="small"
                    className="selectbox"
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                </div>
                <TextField
                id="cc"
                label="Agência"
                variant="outlined"
                className="txt"
                size="small"
                />
               
                <div className="terms">
                <span>
                  <FormControlLabel control={<Checkbox defaultChecked />} />
                </span>
                <span>
                  Concordar com <b>Termos de Uso e Políticas de Privacidade</b>
                </span>

                
              </div>
              <div className="register-btn-wrapper">
                <Button variant="contained" className="register-btn">
                FINALIZAR CADASTRO
              </Button>
              </div>
          </div>
        </div>


        
        {/* <div className="popup">
            <div className="popup-check">
                <span><img src={check} alt=""/></span>
            </div>
            <div className="popup-text">
                <p>Cadastro de Anunciante Concluído! Agora cadastre seu Negócio</p>
            </div>
            <div className="popup-btn">
                <Button variant="contained" className="register-btn">
                Cadastrar Meu Negócio
              </Button>
            </div>
            <div className="popup-text-cotent">
                <span>Deixar para depois</span>
            </div>
        </div> */}
    </div>
    </Layout>
  );
};
export default Register;
