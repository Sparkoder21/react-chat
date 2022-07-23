import React, {useState, useEffect} from "react";
import {createTheme, ThemeProvider, CssBaseline} from "@material-ui/core";
import {setData} from "./backend";
import Note from "./Note";
import Header from "./Header";
import Chatbox from "./Chatbox";
import Footer from "./Footer";

const theme = createTheme({
    palette: {
        primary: {
            main: "#08d46c"
        },
        secondary: {
            main: "#03fc0f"
        }
    }
});

function App(){
	const [username, setUsername] = useState("");

	const [messages, setMessages] = useState([]);

	useEffect(() => {
		setData(setMessages);
	}, []);

    return (
        <ThemeProvider theme={theme}>
        	<CssBaseline/>
            <Header/>
        	<Note theme={theme} setUsername={setUsername}/>
        	<Chatbox theme={theme} username={username} messages={messages}/>
        	<Footer theme={theme}/>
        </ThemeProvider>
    );
}

export default App;