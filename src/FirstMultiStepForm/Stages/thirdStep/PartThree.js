import React from "react"; // eslint-disable-line
import "./PartThree.scss";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const PartThree = (props) => {
  const submitForm = () => {
    props.handleStageChanges(4);
  };
  return (
    <React.Fragment>
      <Box className="formControl" sx={{ padding: 5 }}>
        <Grid>
          <Typography
            textAlign={"center"}
            variant="h4"
            component={"h4"}
            className="step-2 step-sub-title"
          >
            Local do seu Negócio
          </Typography>
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
            Área de Cobertura
          </Typography>
        </Grid>
        
        
          <div className="field-wrapper">
          <Grid className="mainCategorySelectbox">
            <TextField
              id="Confirmar Email"
              label="Categoria Principal"
              variant="outlined"
              placeholder="Categoria Principal"
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
            AVANÇAR
          </Button>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default PartThree;
