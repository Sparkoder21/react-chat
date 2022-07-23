import React, {useState, useEffect, useRef} from "react";
import {Box, Card, Paper, TextField, IconButton, Container, Typography} from "@material-ui/core";
import {sendData} from "./backend";

function Chatbox(props){
	const [message, setMessage] = useState("");

	const chatRef = useRef();

	const chats = props.messages.map((value, index) => {
		return (
			<Card style={{marginLeft: "50%", marginBottom: "10px", padding: "10px", width: "95%", wordBreak: "break-word", transform: "translate(-50%, 0)"}} elevation={3} key={index}>
				<Container>
					<Typography variant="h6" align="center">
						{value.name}
					</Typography>
					<Typography variant="body1" align="center">
						{value.message}
					</Typography>
				</Container>
			</Card>
		);
	});

	function updateMessage(event){
		setMessage(event.target.value);
	}

	function sendMessage(){
		sendData(props.username, message);
		setMessage("");
	}

	useEffect(() => {
		const chatElement = chatRef.current;

		chatElement.scrollTo(0, chatElement.scrollHeight);
	}, [props.messages]);

	return (
		<Paper style={{position: "absolute", left: "50%", top: "100px", bottom: "50px", width: "80%", transform: "translate(-50%, 0)"}} elevation={10}>
			<Paper style={{position: "absolute", left: "50%", top: "1.8vw", bottom: "90px", paddingTop: "1.8vw", paddingBottom: "1.8vw", width: "95%", overflowY: "scroll", transform: "translate(-50%, 0)"}} elevation={5} ref={chatRef}>
				{chats}
			</Paper>
			<Box style={{transform: "translate(-50%, -25%)"}} position="absolute" left="50%" bottom="0" width="100%">
				<TextField style={{width: "50%", marginLeft: "22%"}} variant="outlined" value={message} onChange={updateMessage}/>
				<IconButton style={{marginLeft: "4px", marginTop: "3px", background: "#ededed"}} className="material-icons" color="primary" onClick={sendMessage}> send </IconButton>
			</Box>
		</Paper>
	);
}

export default Chatbox;