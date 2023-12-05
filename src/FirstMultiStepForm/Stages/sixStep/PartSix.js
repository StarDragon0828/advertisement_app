import React from "react";
import "./PartSix.scss";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const PartSix = (props) => {
  const submitForm = () => {
    props.handleStageChanges(7);
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
            Dados para repasse dos valores das vendas
          </Typography>
        </Grid>

        <div className="field-wrapper">
          <Grid className="mainCategorySelectbox">
            <Grid
              className="selectInputDiv"
              item
              xs={10}
              sx={{
                marginBottom: "10px",
              }}
            >
              <FormControl fullWidth>
                <InputLabel
                  color="secondary"
                  id="demo-simple-select-label"
                  size="small"
                >
                  Banco
                </InputLabel>
                <Select
                  color="secondary"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="categoria principal"
                  size="small"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </div>
        <Grid className="single-field">
          <TextField
            id="Confirmar Email"
            label="Agência"
            variant="outlined"
            placeholder="Agência"
            className="txt"
            size="small"
          />
        </Grid>
        <Grid className="single-field">
          <TextField
            id="Confirmar Email"
            label="Conta"
            variant="outlined"
            placeholder="Conta"
            className="txt"
            size="small"
          />
        </Grid>

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
      </Box>
    </React.Fragment>
  );
};

export default PartSix;
