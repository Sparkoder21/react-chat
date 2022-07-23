import React from "react";
import {AppBar, Toolbar, Container, Icon, Typography} from "@material-ui/core";

function Header(){
	return (
		<AppBar style={{userSelect: "none"}} position="fixed">
			<Toolbar>
				<Icon style={{color: "#fff", fontSize: "32px", marginRight: "-25px"}} className="material-icons"> chat </Icon> 
				<Container>
					<Typography style={{color: "#fff", fontSize: "32px"}} variant="h6" align="center"> React Chat </Typography>
				</Container>
			</Toolbar>
		</AppBar>
	);
}

export default Header;