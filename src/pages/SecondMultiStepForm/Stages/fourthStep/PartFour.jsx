import React from "react";
import "./PartFour.scss";
import Button from "@mui/material/Button";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ArrowUpwardIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDropDown";

import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

const PartFour = (props) => {
  const submitForm = () => {
    props.handleStageChanges(5);
  };
  return (
    <React.Fragment>
      <Box className="formControl" sx={{ paddingY: 5 }}>
        <Grid
          sx={{
            marginTop: "20px",
          }}
        >
          <Typography
            textAlign={"center"}
            variant="h4"
            component={"h4"}
            className="step-2 step-sub-title"
          >
            Reservas de Vagas
          </Typography>
        </Grid>

        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            className="custome-textarea"
            multiline
            rows={3}
            color="secondary"
            id="outlined-basic"
            name="shortDescription"
            placeholder="Descrição sobre as reservas de vagas"
            variant="outlined"
          />
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          width={"100%"}
          paddingY={3}
        >
          <Grid item className="checkbox-field-wrapper">
            <div className="list-inner">
              <div className="check-label">
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Reserva de vagas direto pela plataforma"
                />
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid className="single-field">
          <TextField
            id="Confirmar Email"
            label="Vagas por dia"
            variant="outlined"
            placeholder=""
            className="txt"
            size="small"
            InputProps={{
              endAdornment: (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    color: "#A9A9A9",
                  }}
                >
                  <IconButton style={{height: "20px", width:"10px"}}>
                    <ArrowUpwardIcon fontSize="large"/>
                  </IconButton>
                  <IconButton style={{height: "20px", width:"10px"}}>
                    <ArrowDownwardIcon  fontSize="large"/>
                  </IconButton>
                </div>
              ),
            }}
          />
        </Grid>
        <Grid container direction="row" justifyContent="center">
          <Grid item style={{ width: "350px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                slotProps={{ textField: { size: "small", fullWidth: true } }}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          width={"100%"}
          paddingY={3}
        >
          <Grid item className="checkbox-field-wrapper">
            <div className="list-inner">
              <div className="check-label">
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Possibilidade de Reagendamento"
                />
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid className="single-field">
          <TextField
            id="Confirmar Email"
            label="Dias de antecedência"
            variant="outlined"
            placeholder="Dias de antecedência"
            className="txt"
            size="small"
            InputProps={{
              endAdornment: (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    color: "#A9A9A9",
                  }}
                >
                  <IconButton style={{height: "20px", width:"10px"}}>
                    <ArrowUpwardIcon fontSize="large"/>
                  </IconButton>
                  <IconButton style={{height: "20px", width:"10px"}}>
                    <ArrowDownwardIcon  fontSize="large"/>
                  </IconButton>
                </div>
              ),
            }}
          />
        </Grid>

        <Grid
          xs={2}
          sx={{
            marginY: "50px",
            paddingLeft: "20%",
            paddingRight: "20%",
            color: "#707070",
          }}
        >
          <Typography
            textAlign={"center"}
            variant="h4"
            component={"h4"}
            style={{
              fontSize: "23px",
              fontWeight: "900",
            }}
          >
            R$ 100 para 10 dias
          </Typography>

          <div className="add-area">
            <span style={{ marginRight: "4px" }}>Gasto total</span>
            <AccessTimeIcon />
          </div>
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

export default PartFour;
