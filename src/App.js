import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

// 컴포넌트
import Landing from "./page/Landing";
import Nav from "./page/Nav";
import Repogitory from "./page/Repogitory";
import Issues from "./page/Issues";

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		border: none;
		outline: none;
		list-style: none;
		text-decoration: none;
		font-family: Arial, sans-serif, "NotoSansKR";
    color: #ffffe7;
	}
	
	body {
		background-color: #171717;
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
    border-bottom: 4px solid #f5f5f3;
    
		
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
		<Router>
			<GlobalStyles />

			<Routes>
				<Route exact path="/" element={<Landing />} />
				<Route path="/repo" element={<Repogitory />} />
				<Route path="/issues" element={<Issues />} />
			</Routes>
			<Nav />
		</Router>
	);
}

export default App;
