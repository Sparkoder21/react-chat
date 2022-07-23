import React, {useState, useEffect} from "react";
import {Modal, Paper, Typography, TextField, Button} from "@material-ui/core";

function Note(props){
	const [name, setName] = useState("");

	const [open, setOpen] = useState(false);

	function openModal(){
		setOpen(true);
	}

	function closeModal(){
		setOpen(false);
	}

	function updateName(event){
		setName(event.target.value);
	}

	function handleName(){
		if (name){
			props.setUsername(name);
		}
		else{
			props.setUsername("UnknownUser");
		}
		closeModal();
	}

	useEffect(() => {
		openModal();
	}, []);

	return (
		<Modal open={open} disableAutoFocus disableEnforceFocus disableEscapeKeyDown>
			<Paper style={{position: "absolute", left: "50%", top: "50%", width: "300px", height: "260px", border: "3px solid #000", transform: "translate(-50%, -50%)"}} elevation={5}>
				<Typography style={{margin: "15px", fontSize: "24px"}} variant="h6" align="center"> Welcome to <span style={{color: props.theme.palette.primary.main}}>React Chat</span>!</Typography>
				<Typography style={{marginTop: "40px", fontSize: "16px"}} variant="h5" align="center"> Please enter a username: </Typography>
				<TextField style={{marginLeft: "50%", marginTop: "10px", transform: "translate(-50%, 0)"}} value={name} onChange={updateName}/>
				<Button style={{marginLeft: "50%", marginTop: "30px", transform: "translate(-50%, 0)"}} variant="contained" color="primary" onClick={handleName}> Enter </Button>
			</Paper>
		</Modal>
	);
}

export default Note;