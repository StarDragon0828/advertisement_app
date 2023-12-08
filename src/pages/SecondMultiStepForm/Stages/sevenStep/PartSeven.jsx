import React from "react";
import "./PartSeven.scss";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { Box, Grid, Typography } from "@mui/material";

const PartSeven = (props) => {
  const submitForm = () => {
    props.handleStageChanges(7);
  };
  return (
    <React.Fragment>
      <Box className="formControl" sx={{ paddingY: 5, color: "#707070" }}>
        <Grid>
          <Typography
            padding={2}
            paddingTop={0}
            component="p"
            align="center"
            className="step-content"
          >
            Veja abaixo o resumo e orçamento do seu anúncio.
          </Typography>
        </Grid>
        <Grid container direction="row" justifyContent="center">
          <Box
            sx={{
              border: "1px solid",
              boxShadow: 1,
              borderRadius: 2,
              width: "350px",
              paddingTop: "20px",
              paddingX: "20px",
            }}
          >
            {Array(5)
              .fill(0)
              .map((_, idx) => (
                <Grid
                  key={idx}
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  className="txt"
                >
                  <Grid item>Domingo</Grid>
                  <Grid item>R$ 20,00</Grid>
                </Grid>
              ))}

            <Grid
              item
              sx={{
                marginY: "50px",
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
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className="txt"
            >
              <Grid>
                <Grid item fontSize={"18px"}>
                  Créditos Disponíveis:
                </Grid>
                <Grid item fontSize={"16px"} fontWeight={"900"}>
                  R$ 200,00
                </Grid>
              </Grid>
              <Grid item>
                <Chip
                  label="Adicionar"
                  variant="outlined"
                  style={{ margin: "4px" }}
                  color={"default"}
                  clickable={true}
                ></Chip>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid className="form-inner-wrapper" marginY={5}>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={11}>
              Precisa de ajuda? Confira nossas Dicas e Sugestões
            </Grid>
            <Grid item xs={1}>
              <ArrowRightIcon />
            </Grid>
          </Grid>
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

export default PartSeven;
