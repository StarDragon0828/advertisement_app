import React, { useState } from "react";
import Layout from "../../Layout/index";
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  IconButton,
  Dialog,
  DialogContent,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PartOne from "./Stages/firstStep/PartOne";
import PartTwo from "./Stages/secondStep/PartTwo";
import CustomizedProgressBars from "../../components/Common/LineProgress";
import PartThree from "./Stages/thirdStep/PartThree";
import PartFour from "./Stages/fourthStep/PartFour";
import PartFive from "./Stages/fiveStep/PartFive";
import PartSix from "./Stages/sixStep/PartSix";
import PartSeven from "./Stages/sevenStep/PartSeven";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const FirstMultiStepForm = () => {

  const [activeStage, setActiveStage] = useState(1);
  const [open, setOpen] = useState(false);
  const totalStages = 7; // Update this based on the total number of steps

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleStageChanges = (updatedStage) => {
    setActiveStage(updatedStage);
    if (activeStage == totalStages) setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
    window.location.href = "/second-multipart-form"
  };

  const progressValue = (activeStage / totalStages) * 100;

  const stepTitles = {
    1: "Criar Negocio",
    2: "Contato",
    3: "Local e Área",
    4: "Horário",
    5: "Membros",
    6: "Dados Bancários",
    7: "Complemento",
    // ... Add more titles for additional steps
  };

  return (
    <Layout>
      <Container
        maxWidth={"md"}
        sx={{
          bgcolor: "background.main",
          boxShadow: 1,
          borderRadius: 2,
          padding: 2,
          marginTop: 7,
          marginBottom: 10,
        }}
      >
        {/* Common Header */}
        <Grid container spacing={1}>
          <div className="step-header">
            <Grid item xs={1}>
              <IconButton
                color="primary"
                aria-label="back"
                onClick={() => handleStageChanges(activeStage - 1)}
                disabled={activeStage === 1}
              >
                <ArrowBackIosIcon />
              </IconButton>
            </Grid>
            <Grid item xs={11}>
              <Typography
                variant="h3"
                color="text.primary"
                component="h2"
                align="center"
                className="step-title"
              >
                {stepTitles[activeStage]}
              </Typography>
            </Grid>
          </div>
          <Grid item xs={12}>
            {/* Progress bar */}
            <CustomizedProgressBars currentStep={progressValue} />
          </Grid>
        </Grid>
        {/* Step Content */}
        {activeStage === 1 && (
          <PartOne handleStageChanges={handleStageChanges} />
        )}
        {activeStage === 2 && (
          <PartTwo handleStageChanges={handleStageChanges} />
        )}
        {activeStage === 3 && (
          <PartThree handleStageChanges={handleStageChanges} />
        )}
        {activeStage === 4 && (
          <PartFour handleStageChanges={handleStageChanges} />
        )}
        {activeStage === 5 && (
          <PartFive handleStageChanges={handleStageChanges} />
        )}
        {activeStage === 6 && (
          <PartSix handleStageChanges={handleStageChanges} />
        )}
        {activeStage === 7 && (
          <PartSeven handleStageChanges={handleStageChanges} />
        )}
        {/* ... other steps */}
      </Container>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        fullScreen={isMobile}
      >
        <DialogContent>
          <Box
            className="formControl"
            sx={{
              paddingY: 2,
              color: "#707070",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              minHeight: "100%",
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 65 }} color="primary" />

            <Grid>
              <Typography padding={1} component="h3" align="center">
                Negócio cadastrado com sucesso!
              </Typography>
            </Grid>
            <Grid>
              <Typography
                padding={1}
                component="p"
                align="center"
                className="step-content"
              >
                Estamos analisando os seus dados. Enquanto isso, que tal criar o
                seu anúncio?
              </Typography>
            </Grid>
            <Grid item width={"350px"} paddingTop={2}>
              <Button
                variant={"contained"}
                className="advanceBtn btn-submit primary"
                onClick={handleClose}
              >
                Cadastrar Meu Negócio
              </Button>
            </Grid>
            <Grid item width={"350px"} paddingTop={2}>
              <Button
                variant={"contained"}
                className="advanceBtn btn-submit secondary"
                onClick={handleClose}
              >
                Deixar para depois
              </Button>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default FirstMultiStepForm;
