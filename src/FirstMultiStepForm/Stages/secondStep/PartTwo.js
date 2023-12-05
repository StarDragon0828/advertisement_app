import React from "react"; 
import './PartTwo.scss';
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
    Typography
} from "@mui/material";


const PartTwo = (props) => {
    const submitForm = () => {
        props.handleStageChanges(3);
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
                        Informações para contato
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
                    {/* <Grid
                        className="selectInputDiv"
                        item
                        xs={10}
                        sx={{
                            marginTop: "15px",
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
                    </Grid> */}
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
                 <Grid className="single-field">
                    
                        <TextField
                id="Confirmar Email"
                label="Whatsapp"
                variant="outlined"
                 placeholder="Whatsapp"
                className="txt"
                size="small"
              />
                 </Grid>
                 <Grid className="single-field">
                   
                         <TextField
                id="Confirmar Email"
                label="Email"
                variant="outlined"
                 placeholder="Email"
                className="txt"
                size="small"
              />
                 </Grid>
                  <Grid className="single-field">
                    <TextField
                id="Confirmar Email"
                label="Site"
                variant="outlined"
                 placeholder="Site"
                className="txt"
                size="small"
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
                 <Grid sx={{
                            marginTop: "50px",
                        }}>
                    <Typography
                        textAlign={"center"}
                        variant="h4"
                        component={"h4"}
                        className="step-2 step-sub-title"
                    >
                        Suporte ao Cliente
                    </Typography>
                </Grid>
               <Grid className="single-field">
                    
                        <TextField
                id="Confirmar Email"
                label="Telefone"
                variant="outlined"
                 placeholder="Telefone"
                className="txt"
                size="small"
              />
                 </Grid>
                   <Grid className="single-field">
                    
                        <TextField
                id="Confirmar Email"
                label="Whatsapp"
                variant="outlined"
                 placeholder="Whatsapp"
                className="txt"
                size="small"
              />
                 </Grid>

                  <Grid className="single-field">
                    
                        <TextField
                id="Confirmar Email"
                label="Email"
                variant="outlined"
                 placeholder="Email"
                className="txt"
                size="small"
              />
                 </Grid>

<Grid className="single-field">
                    
                        <TextField
                id="Confirmar Email"
                label="Site"
                variant="outlined"
                 placeholder="Site"
                className="txt"
                size="small"
              />
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

export default PartTwo;
