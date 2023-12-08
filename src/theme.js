import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            default: "#ebebeb",
            main: "#FFF",
        },
        primary: {
            main: "#00CD9B",
        },
        secondary: {
            main: "#33d7af",
        },
        highlight: {
            main: "#00ba91",
        },
        error: {
            main: red.A400,
        },
        text: {
            primary: "#313041",
        },
        gray: {
            main: "#808080",
        },
    },
});

export default theme;