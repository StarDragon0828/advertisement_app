import React from "react"; // eslint-disable-line
import "./PartTwo.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDropDown";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Radio,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import CustomizedProgressBars from "../../../components/Common/LineProgress";

const PartTwo = (props) => {
  const submitForm = () => {
    props.handleStageChanges(3);
  };

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
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
                Ao criar um novo anúncio, é importante definir os parâmetros e
                preferências adequados para alcançar seu público-alvo e atingir
                seus objetivos de negócios.
              </Typography>
              <Typography
                padding={2}
                paddingY={0}
                component="p"
                align="center"
                className="step-content"
              >
                Tenha em mente que suas configurações selecionadas irão impactar
                diretamente o custo total do seu anúncio.
              </Typography>
            </Grid>
          </Grid>
        </div>

        <div className="radio-wrapper">
          <div className="inner-field-radio-wrapper">
            <div className="radio-wrapper-inner">
              <div className="radio-left">
                <Radio
                  checked={selectedValue === "a"}
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </div>
              <div className="radio-right">
                <h4>Importar Configuração de Anúncio</h4>
              </div>
            </div>

            <div className="radio-wrapper-inner">
              <div className="radio-left">
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
              </div>
              <div className="radio-right">
                <h4>Criar Nova</h4>
              </div>
            </div>
          </div>
        </div>

        <Grid className="single-field">
          <TextField
            id="Confirmar Email"
            label="Salvar como"
            variant="outlined"
            placeholder="Salvar como"
            className="txt"
            size="small"
          />
        </Grid>
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography
            padding={2}
            paddingBottom={0}
            component="p"
            align="center"
            className="step-content"
          >
            Selecione a opção abaixo para destacar o seu anúncio e obter maior
            visibilidade.
          </Typography>
        </Grid>
        <div className="field-wrapper">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Anúncio em destaque"
          />
        </div>
      </Grid>
      <Box className="formControl" sx={{ paddingBottom: 5 }}>
        <Grid>
          <Grid paddingTop={4}>
            <Typography
              textAlign={"center"}
              variant="h4"
              component={"h4"}
              className="step-2 step-sub-title"
            >
              Tempo de Veiculação
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              padding={2}
              paddingY={0}
              component="p"
              align="center"
              className="step-content"
            >
              Defina a duração da campanha. Poderá escolher dias específicos
              para a veiculação do seu anúncio.
            </Typography>
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
                    <IconButton style={{ height: "20px", width: "10px" }}>
                      <ArrowUpwardIcon fontSize="large" />
                    </IconButton>
                    <IconButton style={{ height: "20px", width: "10px" }}>
                      <ArrowDownwardIcon fontSize="large" />
                    </IconButton>
                  </div>
                ),
              }}
            />
          </Grid>

          <Grid paddingTop={4}>
            <Typography
              textAlign={"center"}
              variant="h4"
              component={"h4"}
              className="step-2 step-sub-title"
            >
              Gênero de Preferência
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
                    Todos
                  </InputLabel>
                  <Select
                    color="secondary"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="categoria principal"
                    size="small"
                  >
                    <MenuItem value={10}>Todos</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>

          <Grid paddingTop={4}>
            <Typography
              textAlign={"center"}
              variant="h4"
              component={"h4"}
              className="step-2 step-sub-title"
            >
              Endereço do Serviço
            </Typography>
          </Grid>
          <div className="field-wrapper">
            <Grid className="mainCategorySelectbox">
              <TextField
                id="Confirmar Email"
                label="CEP"
                variant="outlined"
                placeholder="CEP"
                className="txt"
                size="small"
              />
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
                  OK
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
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default PartTwo;
