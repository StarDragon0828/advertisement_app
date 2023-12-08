import React from "react"; 
import './PartSeven.scss';
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import {
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@mui/material";


const PartSeven = (props) => {
    const submitForm = () => {
        props.handleStageChanges(8);
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
                        Outras Informações
                    </Typography>
                </Grid>
               
                 <Grid className="single-field">
                    
                        <TextField
                id="Confirmar Email"
                label="Nome do Proprietário"
                variant="outlined"
                 placeholder="Nome do Proprietário"
                className="txt"
                size="small"
              />
                 </Grid>
                 <Grid className="single-field">
                   
                         <TextField
                id="Confirmar Email"
                label="Telefone do Proprietário"
                variant="outlined"
                 placeholder="Telefone do Proprietário"
                className="txt"
                size="small"
              />
                 </Grid>
                  <Grid className="single-field">
                    <TextField
                id="Confirmar Email"
                label="Email do Proprietário"
                variant="outlined"
                 placeholder="Email do Proprietário"
                className="txt"
                size="small"
              />
                 </Grid>

                 <Grid className="single-field">
                    <TextField
                id="Confirmar Email"
                label="CPF"
                variant="outlined"
                 placeholder="CPF"
                className="txt"
                size="small"
              />
                 </Grid>


                <Grid className="single-field">
                    <TextField
                id="Confirmar Email"
                label="CNPJ"
                variant="outlined"
                 placeholder="CNPJ"
                className="txt"
                size="small"
              />
                 </Grid>


<Grid className="single-field cada">
                    <TextField
                id="Confirmar Email"
                label="Código CADASTUR"
                variant="outlined"
                 placeholder="Código CADASTUR"
                className="txt"
                size="small"
              />
                 </Grid>





                   <div className="terms">
                <span>
                  <FormControlLabel control={<Checkbox defaultChecked />} />
                </span>
                <span>
                  Concordar com <b>Termos de Uso e Políticas de Privacidade</b>
                </span>
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
                        avançar
                    </Button>
                </Grid>
            </Box>
        </React.Fragment>
    );
};

export default PartSeven;
