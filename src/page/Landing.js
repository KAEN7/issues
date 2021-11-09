import React from "react";
import styled from "styled-components";
import { flexCenterDir } from "../components/utils/theme";
import axios from "axios";

import issuesIcon from "../img/issues.svg";

const LandingSection = styled.div`
	${flexCenterDir}

	width: 100vw;
	height: 100vh;

	img {
		height: 10rem;
		margin-bottom: 3rem;
	}

	input {
		width: 18rem;
	}
`;

const Landing = () => {
	// async function getRepos() {
	// 	// clear();
	// 	const
	// 	const url = "https://api.github.com/users/13akstjq/repos";
	// 	const response = await fetch(url, {
	// 		method: "GET",
	// 		headers: headers,
	// 	});
	// 	const result = await response.json();
	// 	console.log(result);
	// }
	const testing = () => {
		axios
			.get("https://api.github.com/users/kaen7/repos")
			.then((el) => console.log(el));
	};

	return (
		<LandingSection>
			<img src={issuesIcon} alt="issues" />
			<input placeholder="GitHub 계정명을 입력해주세요" />
			<input placeholder="레포지토리명을 입력해주세요" />
			<button onClick={testing}>asdfasdf</button>
		</LandingSection>
	);
};

export default Landing;
