import React, { useState } from "react";
import "./PartThree.scss";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const PartThree = (props) => {
  const submitForm = () => {
    props.handleStageChanges(4);
  };

  const [values, setValues] = useState([
    ["restaurante", false],
    ["almoço", false],
    ["janta", false],
    ["churrasco", false],
    ["Criciúma", false],
    ["Santa Catarina", false],
    ["SC", false],
    ["litoral", false],
    ["Içara", false],
    ["Maracajá", false],
    ["Balneário Rincão", false],
    ["Araranguá", false],
  ]);

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
            Configurar Palavras-chave
          </Typography>
          <Typography
            padding={2}
            paddingBottom={0}
            component="p"
            align="center"
            className="step-content"
          >
            Defina as palavras-chave mais relevantes para o seu negócio e
            alcance o público-alvo com precisão.
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
            placeholder="Adicionar palavras-chave separadas por vírgula (restaurante, Criciúma, Santa Catarina, SC, ...)"
            variant="outlined"
          />
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          width={"100%"}
          paddingTop={3}
        >
          <Grid item className="checkbox-field-wrapper">
            <div className="list-inner">
              <div className="check-label">
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Sugestões:"
                />
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="center">
          <Grid item width={"350px"}>
            {values.map((element, idx) => (
              <Chip
                key={idx}
                label={element[0]}
                variant="outlined"
                style={{ margin: "4px" }}
                color={element[1] ? "primary" : "default"}
                clickable={true}
                onClick={() => {
                  setValues((prev) =>
                    prev.map((ele, _idx) => (_idx == idx ? [ele[0], !ele[1]] : ele))
                  );
                }}
              />
            ))}
          </Grid>
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

export default PartThree;
