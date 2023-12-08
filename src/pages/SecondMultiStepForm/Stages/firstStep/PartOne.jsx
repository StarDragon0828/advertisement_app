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
// import CustomizedProgressBars from "../../../components/Common/LineProgress";

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
              <Typography
                padding={2}
                paddingBottom={0}
                component="p"
                align="center"
                className="step-content"
              >
                Para garantir o sucesso do seu anúncio, utilize termos ou
                palavras relevantes ao seu negócio e forneça informações
                verídicas.
              </Typography>
              <Typography
                padding={2}
                paddingY={0}
                component="p"
                align="center"
                className="step-content"
              >
                Lembre-se, a qualidade do seu anúncio reflete diretamente em
                seus resultados.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>

      <Grid className="form-inner-wrapper" marginY={2}>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={11}>
            Precisa de ajuda? Confira nossas Dicas e Sugestões
          </Grid>
          <Grid item xs={1}>
            <ArrowRightIcon />
          </Grid>
        </Grid>
      </Grid>

      <Grid>
        <Typography
          padding={2}
          paddingTop={0}
          component="p"
          align="center"
          className="step-content"
        >
          Crie agora seu anúncio e comece a atrair mais clientes!
        </Typography>
      </Grid>

      <Grid>
        <Typography
          textAlign={"center"}
          variant="h4"
          component={"h4"}
          className="step-2 step-sub-title"
        >
          Imagens
        </Typography>
      </Grid>
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

      <Box className="formControl first-stage" sx={{ paddingY: 5 }}>
        <Grid>
          <Grid>
            <Typography
              textAlign={"center"}
              variant="h4"
              component={"h4"}
              className="step-2 step-sub-title"
            >
              Informações
            </Typography>
          </Grid>
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

            <div className="field-wrapper">
              <Grid className="mainCategorySelectbox">
                <Grid
                  className="selectInputDiv"
                  item
                  xs={10}
                  sx={{
                    marginTop: "0px",
                  }}
                >
                  <FormControl fullWidth>
                    <InputLabel
                      color="secondary"
                      id="demo-simple-select-label"
                      size="small"
                    >
                      categoria principal
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
            <Grid
              sx={{
                marginTop: "50px",
              }}
            >
              <Typography
                textAlign={"center"}
                variant="h4"
                component={"h4"}
                className="step-2 step-sub-title"
              >
                Informações
              </Typography>
            </Grid>
            <div className="field-wrapper">
              <Grid className="mainCategorySelectbox">
                <Grid
                  className="selectInputDiv"
                  item
                  xs={10}
                  sx={{
                    marginTop: "0px",
                  }}
                >
                  <FormControl fullWidth>
                    <InputLabel
                      color="secondary"
                      id="demo-simple-select-label"
                      size="small"
                    >
                      categoria principal
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
            <Grid
              item
              xs={2}
              sx={{
                marginTop: "50px",
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
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default PartOne;
