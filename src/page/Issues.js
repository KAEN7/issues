import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
	flexCenterDir,
	pageSetting,
	color,
	overflowY,
} from "../components/utils/theme";
import axios from "axios";
import Pagination from "./Pagination";

const IssuesSection = styled.div`
	${pageSetting}

	button {
		margin-top: 25rem;
	}
`;

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

const Isseus = () => {
	const [issue, setIssue] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	// repoRegister 개수만큼 요청 후 해당 이슈만큼 map으로 뿌려줌
	useEffect(() => {
		const username = localStorage.getItem("username");
		const repoRegister = JSON.parse(localStorage.getItem("repoRegister"));

		const getRepo = async () => {
			for (let i = 0; i < repoRegister.length; i++) {
				let url = `https://api.github.com/repos/${username}/${repoRegister[i].name}/issues`;

				axios
					.get(url, {
						headers: {
							Accept: "application/vnd.github.nightshade-preview+json",
						},
					})
					.then((res) => setIssue(res.data));
			}
		};

		getRepo();
	}, []);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = issue.slice(indexOfFirstPost, indexOfLastPost);
	console.log(currentPosts);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<IssuesSection>
			<ul>
				{currentPosts.map((data, idx) => (
					<IssueBox
						key={idx}
						onClick={() => window.open(`${data.html_url}`, "_blank")}
					>
						<h2>{data.title}</h2>
						<h4>{data.repo}</h4>
						<div>{data.body}</div>
					</IssueBox>
				))}
			</ul>
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={issue.length}
				paginate={paginate}
			/>
		</IssuesSection>
	);
};

export default Isseus;
