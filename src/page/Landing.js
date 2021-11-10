import React, { useState } from "react";
import styled from "styled-components";
import { flexCenterDir } from "../components/utils/theme";

// 이미지
import issuesIcon from "../img/issues.svg";

// 컴포넌트
import NameForm from "../components/NameForm";
import RepoForm from "../components/RepoForm";

const LandingSection = styled.div`
	${flexCenterDir}

	width: 100vw;
	height: 100vh;
	overflow-y: auto;
	::-webkit-scrollbar {
		display: none;
	}

	img {
		height: 10rem;
		margin-top: 25rem;
		margin-bottom: 3rem;
	}

	input {
		width: 18rem;
		margin-bottom: 8rem;
	}
`;

const Landing = () => {
	const [repo, setRepo] = useState([]);
	const [toggle, setToggle] = useState(true);

	const changeHandler = (data) => {
		setRepo(data);
		setToggle(!toggle);
	};

	return (
		<LandingSection>
			<img src={issuesIcon} alt="issues" />
			{toggle ? (
				<NameForm changeHandler={changeHandler} />
			) : (
				<RepoForm repo={repo} />
			)}
		</LandingSection>
	);
};

export default Landing;
