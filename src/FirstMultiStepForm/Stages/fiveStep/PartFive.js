import React from "react"; // eslint-disable-line
import "./PartFive.scss";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const PartFive = (props) => {
  const submitForm = () => {
    props.handleStageChanges(6);
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
            Atribuir Membros
          </Typography>
        </Grid>
        <div className="form-inner-wrapper">
          <div className="inner-field-wrapper">
            <TextField
              id="cc"
              label="Email do novo membro"
              variant="outlined"
              className="txt"
              size="small"
            />
            
          </div>
        </div>
        <div className="radio-group">
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Tipo de permissão:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="cupons" control={<Radio />} label="Validador de cupons" />
        <FormControlLabel value="admin" control={<Radio />} label="Administrador" />
        
      </RadioGroup>
    </FormControl>
    </div>

    <div className="add-area">
      <p>+ Adicionar outro</p>
    </div>
        
        
        
       
        
        
        
        

        

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
            AVANÇAR
          </Button>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default PartFive;
