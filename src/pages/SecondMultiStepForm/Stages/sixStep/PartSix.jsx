import React from "react";
import "./PartSix.scss";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import {
  Box,
  Checkbox,
  FormLabel,
  FormControl,
  FormControlLabel,
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
      <Box className="formControl" sx={{ paddingY: 5 }}>
        <Grid>
          <Typography
            padding={2}
            paddingBottom={0}
            component="p"
            align="center"
            className="step-content"
          >
            Ative a opção de serviços adicionais e ofereça mais opções aos seus
            clientes.
          </Typography>
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
                  label="Serviços adicionais"
                />
              </div>
            </div>
          </Grid>
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
            placeholder="Descrição dos serviços adicionais"
            variant="outlined"
          />
        </Grid>

        <Grid>
          <Typography
            padding={2}
            paddingBottom={0}
            component="p"
            className="step-content"
            style={{width:350, fontSize:"18px"}}
          >
            Opções:
          </Typography>
        </Grid>

        <Grid className="single-field">
          <TextField
            id="Confirmar Email"
            label="Nome"
            variant="outlined"
            placeholder="Nome"
            className="txt"
            size="small"
          />
        </Grid>
        <Grid className="single-field">
          <TextField
            id="Confirmar Email"
            label="Valor (R$)"
            variant="outlined"
            placeholder="Valor (R$)"
            className="txt"
            size="small"
          />
        </Grid>
        <Grid className="single-field">
          <TextField
            id="Confirmar Email"
            label="Descrição do valor"
            variant="outlined"
            placeholder="Descrição do valor"
            className="txt"
            size="small"
          />
        </Grid>

        <Grid paddingY={3} className="add-area">
          <p>+ Adicionar outro</p>
        </Grid>

        <Grid
          xs={2}
          sx={{
            marginTop: "15px",
            marginBottom:"50px",
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

export default PartSix;
