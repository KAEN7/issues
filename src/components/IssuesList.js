import React from "react";
import styled from "styled-components";
import { flexCenterDir, color, overflowY } from "../components/utils/theme";

const IssueBox = styled.li`
	${flexCenterDir}

	align-items: flex-start;
	width: 30rem;
	min-height: 8rem;
	max-height: 15rem;
	margin: 2rem;
	padding: 1rem;
	box-sizing: border-box;
	background: black;
	cursor: pointer;

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

const IssuesList = ({ data, idx }) => {
	return (
		<IssueBox
			key={idx}
			onClick={() => window.open(`${data.html_url}`, "_blank")}
		>
			<h2>{data.title}</h2>
			<h4>{data.repo}</h4>
			<div>{data.body}</div>
		</IssueBox>
	);
};

export default IssuesList;
