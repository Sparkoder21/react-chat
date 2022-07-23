import React from "react";
import {Box, Typography, Icon} from "@material-ui/core";

function Footer(props){
    return (
        <Box position="fixed" left="0" bottom="0" width="100%">
            <Typography style={{backgroundColor: props.theme.palette.primary.main, userSelect: "none"}} variant="subtitle2" color="textSecondary" align="center"><Icon className="material-icons" fontSize="small"> copyright </Icon> 2022 QuickCoder. All Rights Reserved. </Typography>
        </Box>
    );
}

export default Footer;