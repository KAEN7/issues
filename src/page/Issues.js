import React, { useState } from "react";
import styled from "styled-components";
import { flexCenterDir, pageSetting, color } from "../components/utils/theme";
import axios from "axios";

const IssuesSection = styled.div`
	${pageSetting}
`;

const IssueBox = styled.div`
	${flexCenterDir}

	width: 30rem;
	height: 8rem;
	margin: 1rem;
	background: ${color.gray};
`;

const Isseus = () => {
	const [issue, setIssue] = useState([]);
	const username = localStorage.getItem("username");
	const repoRegister = JSON.parse(localStorage.getItem("repoRegister"));

	// repoRegister 개수만큼 요청 후 해당 이슈만큼 map으로 뿌려줌
	const testing = () => {
		repoRegister.forEach((data) => {
			const url = `https://api.github.com/repos/${username}/${data.name}/issues`;

			axios
				.get(url, {
					headers: {
						Accept: "application/vnd.github.nightshade-preview+json",
					},
				})
				.then((el) => console.log(el.data));
		});
	};

	// 제목, 레포지토리 명 기타 내 맘
	return (
		<IssuesSection>
			<button onClick={() => testing()}>asdfasdf</button>
			{/* {issue.map((data, idx) => (
				<IssueBox key={idx}>
					<h2>{data.title}</h2>
					<div>{data.body}</div>
					<div>{data.html_url}</div>
				</IssueBox>
			))} */}
		</IssuesSection>
	);
};

export default Isseus;
