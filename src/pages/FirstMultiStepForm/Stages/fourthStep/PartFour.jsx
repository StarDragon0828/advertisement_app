import React from "react"; // eslint-disable-line
import "./PartFour.scss";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const PartFour = (props) => {
  const submitForm = () => {
    props.handleStageChanges(5);
  };

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <React.Fragment>
      <Box className="formControl" sx={{ padding: 5 }}>
        <Grid>
          <Typography
            textAlign={"center"}
            variant="h4"
            component={"h4"}
            className="step-2 step-sub-title"
          >
            Horário de Atendimento
          </Typography>
        </Grid>
        <div className="radio-wrapper">
          <div className="inner-field-radio-wrapper">
            <div className="radio-wrapper-inner">
              <div className="radio-left">
                <Radio
                  checked={selectedValue === "a"}
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </div>
              <div className="radio-right">
                <h4>Aberto com horário normal</h4>
                <p>Mostrar quando seu Negócio está aberta</p>
              </div>
            </div>

            <div className="radio-wrapper-inner">
              <div className="radio-left">
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
              </div>
              <div className="radio-right">
                <h4>Aberto com horário normal</h4>
                <p>Não mostrar horário de funcionamento</p>
              </div>
            </div>

            <div className="checkbox-field-wrapper">
              <ul>
                <li>
                  <span>Domingo</span>
                  <div className="check-label">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Fechado"
                    />
                  </div>
                </li>

                <li>
                  <span>Segunda-feira</span>
                  <div className="check-label">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Fechado"
                    />
                  </div>
                </li>

                <li>
                  <span>Terça-feira</span>
                  <div className="check-label">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Fechado"
                    />
                  </div>
                </li>

                <li>
                  <span>Quarta-feira</span>
                  <div className="check-label">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Fechado"
                    />
                  </div>
                </li>

                <li className="with-textbox">
                  <div className="list-inner">
                    <span>Quinta-feira</span>
                    <div className="check-label">
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Fechado"
                      />
                    </div>
                  </div>
                  <Grid className="single-field step-four">
                    
                        <TextField
                id="Confirmar Email"
                label="Abre à(s)"
                variant="outlined"
                 placeholder="Abre à(s)"
                className="txt"
                size="small"
              />
                 </Grid>
                  <div className="field-wrapper step-four">
                    <Grid className="mainCategorySelectbox">
                      <TextField
                        id="Confirmar Email"
                        label="Fecha à(s)"
                        variant="outlined"
                        placeholder="Fecha à(s)"
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
                </li>

                <li className="with-textbox">
                  <div className="list-inner">
                    <span>Sexta-feira</span>
                    <div className="check-label">
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Fechado"
                      />
                    </div>
                  </div>
                  <Grid className="single-field step-four">
                    
                        <TextField
                id="Confirmar Email"
                label="Abre à(s)"
                variant="outlined"
                 placeholder="Abre à(s)"
                className="txt"
                size="small"
              />
                 </Grid>
                  <div className="field-wrapper step-four">
                    <Grid className="mainCategorySelectbox">
                      <TextField
                        id="Confirmar Email"
                        label="Fecha à(s)"
                        variant="outlined"
                        placeholder="Fecha à(s)"
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
                </li>

                 <li className="with-textbox">
                  <div className="list-inner">
                    <span>Sexta-feira</span>
                    <div className="check-label">
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Fechado"
                      />
                    </div>
                  </div>
                  <Grid className="single-field step-four">
                    
                        <TextField
                id="Confirmar Email"
                label="Abre à(s)"
                variant="outlined"
                 placeholder="Abre à(s)"
                className="txt"
                size="small"
              />
                 </Grid>
                  <div className="field-wrapper step-four">
                    <Grid className="mainCategorySelectbox">
                      <TextField
                        id="Confirmar Email"
                        label="Fecha à(s)"
                        variant="outlined"
                        placeholder="Fecha à(s)"
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
                </li>
              </ul>
              <Grid
                    item
                    xs={2}
                    sx={{
                        marginTop: "15px",
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
                        avançar
                    </Button>
                </Grid>
            </div>
            
          </div>
        </div>
      </Box>
    </React.Fragment>
  );
};

export default PartFour;
