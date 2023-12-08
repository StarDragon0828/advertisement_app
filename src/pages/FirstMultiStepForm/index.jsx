import React, { useState } from "react";
import Layout from "../../Layout/index";
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  LinearProgress,
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
import PartEight from "./Stages/eightStep/PartEight";
import PartNine from "./Stages/nineStep/PartNine";

const FirstMultiStepForm = () => {
  const [activeStage, setActiveStage] = useState(1);
  const totalStages = 9; // Update this based on the total number of steps

  const handleStageChanges = (updatedStage) => {
    setActiveStage(updatedStage);
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
    8: "Criar Anúncio",
    9: "Configurar Anúncio",
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
        {activeStage === 8 && (
          <PartEight handleStageChanges={handleStageChanges} />
        )}
        {activeStage === 9 && (
          <PartNine handleStageChanges={handleStageChanges} />
        )}
        {/* ... other steps */}
      </Container>
    </Layout>
  );
};

export default FirstMultiStepForm;
