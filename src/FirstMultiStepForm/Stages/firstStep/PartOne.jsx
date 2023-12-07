import React from "react"; // eslint-disable-line
import "./PartOne.scss";
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
import CustomizedProgressBars from "../../../components/Common/LineProgress";

const PartOne = (props) => {
  const submitForm = () => {
    props.handleStageChanges(2);
  };
  return (
    <React.Fragment>
      <Box className="formContant">
        <div className="formTopBar ">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <h2 className="step-sub-title">Sobre sua Negócio</h2>
              <Typography
                padding={2}
                component="p"
                align="center"
                className="step-content"
              >
                Preencha o formulário com as informações do seu negócio e faça
                parte da nossa rede de arceiros. Vamos juntos alavancar seu
                crescimento!
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
                <Typography component={"p"}>Logotipo</Typography>
              </Grid>
            </Grid>
          </div>
          <div className="block-image round">
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
        {/* <Grid
                    container
                    direction="row"
                    
                >
                    <Grid item xs={6} className="fileUploadContent">
                        <Grid>
                            <Typography component={"p"}>Hello</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} className="fileUploadContent">
                        <Grid>
                            <Typography component={"p"}>Principal</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} className="fileUploadContent">
                        <Grid>
                        <Typography component={"p"}>Outras</Typography>
                        </Grid>
                    </Grid>
                </Grid> */}

        {/* <Grid
                    container
                    direction="row"
                    
                >
                    
                    <Grid item xs={6} className="fileUploadContent">
                        <Grid>
                            <Typography component={"p"}>
                                <AddPhotoAlternateOutlinedIcon className="fileUploadPrincipal" />
                            </Typography>
                        </Grid>
                    </Grid>
                      <Grid item xs={6} className="fileUploadContent">
                        <Grid>
                            <Typography component={"p"}>
                                <AddPhotoAlternateOutlinedIcon className="fileUploadPrincipal" />
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} className="fileUploadContent">
                        <Typography component={"p"}>
                            <AddPhotoAlternateOutlinedIcon className="fileUploadPrincipal" />
                        </Typography>
                    </Grid>
                </Grid> */}
      </Box>
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
              placeholder="Título do anúncio"
              variant="outlined"
              size="small"
              marginBottom="10px"
            />
          </Grid>
          <div className="form-inner-wrapper">
            <div className="inner-field-wrapper">
              <TextField
                id="cc"
                label="categoria principal"
                variant="outlined"
                className="txt"
                size="small"
              />
              <button className="btn-ok">OK</button>
            </div>
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

export default PartOne;
