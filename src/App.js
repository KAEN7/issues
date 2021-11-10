import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Landing from "./page/Landing";

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		border: none;
		outline: none;
		list-style: none;
		text-decoration: none;
		font-family: Arial, sans-serif, "NotoSansKR";
    color: white;
	}
	
	body {
		background-color: #171717;
		height: 100%;
		width: 100%;
		overflow: hidden;
		-ms-overflow-style: none;
	}

	input {
		background-color: rgba(0, 0, 0, 0);
		border: none;
    font-size: 18px;
		color: #f5f5f3;
    padding: 13px;
    margin-bottom: 1rem;
		text-align: center;
    border: 3px solid #f5f5f3;
    border-radius: 2vh;
		
		&::placeholder {
			color: #f5f5f3;
			font-size: 18px;
      text-align: center;
		}
	}

	button {
		background: none;
		cursor: pointer;
	}

	#root {
		width: 100vw;
		height: 100vh;
		padding: 0;
	}
`;

function App() {
	return (
		<div className="App">
			<Router>
				<GlobalStyles />
				<Routes>
					<Route exact path="/" element={<Landing />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
