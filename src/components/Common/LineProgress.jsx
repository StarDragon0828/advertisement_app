import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 4,
    // borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        // borderRadius: 5,
        backgroundColor: "#33d7af",
    },
}));

export default function CustomizedProgressBars(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <BorderLinearProgress
                variant="determinate"
                value={props.currentStep}
            />
        </Box>
    );
}
