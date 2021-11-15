import React, { useState } from "react";
import styled from "styled-components";
import { pageSetting, fadeIn } from "../components/utils/theme";
import { Link } from "react-router-dom";

// 이미지
import issuesIcon from "../img/issues.svg";

// 컴포넌트
import NameForm from "../components/NameForm";
import RepoForm from "../components/RepoForm";

const LandingSection = styled.div`
	${pageSetting}

	.logo {
		${fadeIn}

		margin-top: 15rem;
		margin-bottom: 3rem;
	}

	img {
		height: 10rem;

		@media ${(props) => props.theme.tablet} {
			height: 7rem;
		}
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
		const repoData = JSON.stringify(data);
		localStorage.setItem("repoData", repoData);
		setToggle(!toggle);
	};

	const username = localStorage.getItem("username");

	return (
		<LandingSection>
			<Link to="/repo" className="logo">
				<img src={issuesIcon} alt="issues" />
			</Link>
			{toggle && !username ? (
				<NameForm changeHandler={changeHandler} />
			) : (
				<RepoForm repo={repo} />
			)}
		</LandingSection>
	);
};

export default Landing;
