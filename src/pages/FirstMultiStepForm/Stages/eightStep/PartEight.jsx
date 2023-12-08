import React from "react"; // eslint-disable-line
import "./PartEight.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import CustomizedProgressBars from "../../../components/Common/LineProgress";

const PartEight = (props) => {
  const submitForm = () => {
    props.handleStageChanges(9);
  };
  return (
    <React.Fragment>
      <Box className="formContant">
        <div className="formTopBar ">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography
                padding={2}
                component="p"
                align="center"
                className="step-content"
              >
                Para garantir o sucesso do seu anúncio, utilize termos ou
                palavras relevantes ao seu negócio e forneça informações
                verídicas. <br /> <br />
                Lembre-se, a qualidade do seu anúncio reflete diretamente em
                seus resultados.
              </Typography>
              <Typography
                padding={2}
                component="p"
                align="center"
                className="step-content"
              >
                Precisa de ajuda? Confira nossas Dicas e Sugestões
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>
      <Box className="formMainContant form-block-wrapper">
        

        <div className="form-block">
          <div className="block-title">
            <Grid item xs={6} className="fileUploadContent">
              <Grid>
                <Typography component={"p"}>Principal</Typography>
              </Grid>
            </Grid>
          </div>
          <div className="block-image">
            <Grid item xs={6} className="fileUploadContent">
              <Grid>
                <Typography component={"p"}>
                  <AddPhotoAlternateOutlinedIcon className="fileUploadPrincipal" />
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className="form-block">
          <div className="block-title">
            <Grid item xs={6} className="fileUploadContent">
              <Grid>
                <Typography component={"p"}>Outras</Typography>
              </Grid>
            </Grid>
          </div>
          <div className="block-image">
            <Grid item xs={6} className="fileUploadContent">
              <Grid>
                <Typography component={"p"}>
                  <AddPhotoAlternateOutlinedIcon className="fileUploadPrincipal" />
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </Box>
      <div className="form-heading">
            <Grid item xs={6} className="fileUploadContent">
              <Grid>
                <Typography component={"p"}>Informações</Typography>
              </Grid>
            </Grid>
          </div>
      <Box className="formControl first-stage" sx={{ padding: 5 }}>
        <Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <TextField
              className="txt"
              color="secondary"
              id="outlined-basic"
              name="adTitle"
              placeholder="Título do Anúncio"
              variant="outlined"
              size="small"
              marginBottom="10px"
            />
          </Grid>
          <div className="form-inner-wrapper">
          
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "0px",
              }}
            >
              <TextField
                className="custome-textarea"
                multiline
                rows={3}
                color="secondary"
                id="outlined-basic"
                name="shortDescription"
                placeholder="descrição curta"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "0px",
              }}
            >
              <TextField
                className="custome-textarea"
                multiline
                rows={3}
                color="secondary"
                id="outlined-basic"
                name="shortDescription"
                placeholder="Descrição Completa"
                variant="outlined"
              />
            </Grid>
            <div className="inner-field-wrapper">
              <TextField
                id="cc"
                label="Categoria Principal"
                variant="outlined"
                className="txt"
                size="small"
              />
            </div>
            <div className="form-heading-two">
            <Grid item xs={6} className="fileUploadContent">
              <Grid>
                <Typography component={"p"}>Informações</Typography>
              </Grid>
            </Grid>
          </div>
            <div className="inner-field-wrapper">
              <TextField
                id="cc"
                label="Categoria Principal"
                variant="outlined"
                className="txt"
                size="small"
              />
            </div>
            <Button
              variant={"contained"}
              className="advanceBtn btn-submit"
              onClick={() => {
                submitForm();
              }}
            >
              avançar
            </Button>
          </div>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default PartEight;
