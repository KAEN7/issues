import React, { useState } from "react";
import styled from "styled-components";
import {
	flexCenterDir,
	pageSetting,
	color,
	overflowY,
} from "../components/utils/theme";
import axios from "axios";

const IssuesSection = styled.div`
	${pageSetting}

	button {
		margin-top: 25rem;
	}
`;

const IssueBox = styled.div`
	${flexCenterDir}

	align-items: flex-start;
	width: 30rem;
	min-height: 8rem;
	max-height: 15rem;
	margin: 2rem;
	padding: 1rem;
	box-sizing: border-box;
	background: black;

	overflow: hidden;
	${overflowY}

	&:hover {
		box-shadow: 13px 14px ${color.white};
		transform: translateY(-10px);
		transition-duration: 0.4s;
	}

	h2 {
		margin-bottom: 1rem;
		border-bottom: 2px solid ${color.white};
	}

	h4 {
		width: 100%;
		color: ${color.point};
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;
	}

	div {
		width: 100%;
	}
`;

const Isseus = () => {
	const [issue, setIssue] = useState([]);
	const username = localStorage.getItem("username");
	const repoRegister = JSON.parse(localStorage.getItem("repoRegister"));

	// repoRegister 개수만큼 요청 후 해당 이슈만큼 map으로 뿌려줌
	const onIssues = () => {
		repoRegister.forEach((data) => {
			const url = `https://api.github.com/repos/${username}/${data.name}/issues`;

			axios
				.get(url, {
					headers: {
						Accept: "application/vnd.github.nightshade-preview+json",
					},
				})
				.then((el) =>
					el.data.forEach((ele) => {
						ele.repo = data.name;
						setIssue([...issue, ele]);
					})
				);
		});
	};
	console.log(issue);
	return (
		<IssuesSection>
			<button onClick={() => onIssues()}>your issues</button>
			{issue.map((data, idx) => (
				<IssueBox
					key={idx}
					onClick={() => window.open(`${data.html_url}`, "_blank")}
				>
					<h2>{data.title}</h2>
					<h4>{data.repo}</h4>
					<div>{data.body}</div>
				</IssueBox>
			))}
		</IssuesSection>
	);
};

export default Isseus;
