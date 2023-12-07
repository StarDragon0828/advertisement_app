import React from "react"; // eslint-disable-line
import "./PartNine.scss";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";

const PartNine = (props) => {
  const submitForm = () => {
    props.handleStageChanges(10);
  };
  return (
    <React.Fragment>
      <Box className="formControl" sx={{ padding: 5 }}>
        <Typography component="p" align="center" className="step-content">
          Ao criar um novo anúncio, é importante definir os parâmetros e
          preferências adequados para alcançar seu público-alvo e atingir seus
          objetivos de negócios.
        </Typography>
        <Typography
          padding={2}
          component="p"
          align="center"
          className="step-content"
        >
          Tenha em mente que suas configurações selecionadas irão impactar
          diretamente o custo total do seu anúncio.
        </Typography>
        <div className="radio-group">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="cupons"
                control={<Radio />}
                label="Importar Configuração de Anúncio"
              />
              <FormControlLabel
                value="admin"
                control={<Radio />}
                label="Criar Nova"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="form-inner-wrapper">
          <div className="inner-field-wrapper">
            <TextField
              id="cc"
              label="Salvar como"
              variant="outlined"
              className="txt"
              size="small"
            />
          </div>
        </div>
        <Typography
          padding={2}
          component="p"
          align="center"
          className="step-content"
        >
          Selecione a opção abaixo para destacar o seu anúncio e obter maior
          visibilidade.
        </Typography>
        <div className="add-area">
          <p>
            <CheckBox /> Anúncio em destaque
          </p>
        </div>
        <div className="add-area">
          <h4>Tempo de Veiculação</h4>
        </div>
        <Typography
          padding={2}
          component="p"
          align="center"
          className="step-content"
        >
          Defina a duração da campanha. Poderá escolher dias específicos para a
          veiculação do seu anúncio.
        </Typography>
        <div className="number-box">
          <TextField
            label="Duração em dias"
            type="number"
            placeholder="Duração em dias"
          />

          <Box className="formControl" sx={{ padding: 5 }}>
            <Grid
            >
              <Typography
                textAlign={"center"}
                variant="h4"
                component={"h4"}
                className="step-2 step-sub-title"
              >
                Gênero de Preferência
              </Typography>
            </Grid>

            <div className="field-wrapper">
              <Grid className="mainCategorySelectbox">
                <TextField
                  id="Confirmar Email"
                  label="Categoria Principal"
                  variant="outlined"
                  placeholder="Todos"
                  className="txt"
                  size="small"
                />

                <Grid
                  item
                  xs={2}
                  sx={{
                    marginTop: "0px",
                  }}
                >
                  <Button
                    className="plusButton btn-add"
                    color="secondary"
                    variant="outlined"
                    size="small"
                  >
                    <AddIcon />
                  </Button>
                </Grid>
              </Grid>
            </div>

            <Grid>
              <Typography
                textAlign={"center"}
                variant="h4"
                component={"h4"}
                className="step-2 step-sub-title"
              >
                Endereço do Serviço
              </Typography>
            </Grid>
            <div className="form-inner-wrapper">
              <div className="inner-field-wrapper">
                <TextField
                  id="cc"
                  label="CEP"
                  variant="outlined"
                  className="txt"
                  size="small"
                />
                <button className="btn-ok">OK</button>
              </div>
            </div>

            <Grid
              item
              xs={2}
              sx={{
                marginTop: "50px",
                paddingLeft: "20%",
                paddingRight: "20%",
              }}
              className="sub-btn-wrapper"
            >
              <Button
                variant={"contained"}
                className="advanceBtn btn-submit"
                onClick={() => {
                  submitForm();
                }}
              >
                AVANÇAR
              </Button>
            </Grid>
          </Box>
        </div>
      </Box>
    </React.Fragment>
  );
};

export default PartNine;
