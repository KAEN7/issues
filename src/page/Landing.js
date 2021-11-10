import React, { useState } from "react";
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

const NameForm = styled.form`
	${flexCenterDir}
`;

const RepoForm = styled.form`
	${flexCenterDir}
`;

const Landing = () => {
	const [name, setName] = useState("");
	// data.name으로 하면 이름만 나옴 ㅇㅋ? 유남쎙?
	const [repo, setRepo] = useState([]);
	const [toggle, setToggle] = useState(true);

	const onSubmit = async (e) => {
		e.preventDefault();

		if (name === "") {
			alert("계정명을 입력해주세요!");
		} else {
			await axios
				.get(`https://api.github.com/users/${name}/repos`, {
					headers: {
						Accept: "application/vnd.github.nightshade-preview+json",
						// Authorization: `Token b6b4269b1...`,
					},
				})
				.then((el) => setRepo(el.data));
			setToggle(!toggle);
		}
	};

	return (
		<LandingSection>
			<img src={issuesIcon} alt="issues" />
			{toggle ? (
				<NameForm onSubmit={onSubmit}>
					<input
						placeholder="GitHub 계정명을 입력해주세요"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button>입력하기</button>
				</NameForm>
			) : (
				<RepoForm>
					<input placeholder="레포지토리명을 입력해주세요" />
				</RepoForm>
			)}
		</LandingSection>
	);
};

export default Landing;
