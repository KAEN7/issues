import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
	flexCenterDir,
	pageSetting,
	color,
	overflowY,
} from "../components/utils/theme";
import axios from "axios";

// 컴포넌트
import Pagination from "./Pagination";
import Loading from "../components/Loading";
import IssuesList from "../components/IssuesList";

const IssuesSection = styled.div`
	${pageSetting}

	button {
		margin-top: 25rem;
	}
`;

const Isseus = () => {
	const [issue, setIssue] = useState([]);
	const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
	const [posts] = useState(10); // 페이지당 최대 게시글 수
	const [loading, setLoading] = useState(true);

	// repoRegister 개수만큼 요청 후 해당 이슈만큼 map으로 뿌려줌
	useEffect(() => {
		// 처음 불러올때 초기화
		let temp = [];
		const username = localStorage.getItem("username");
		const repoRegister = JSON.parse(localStorage.getItem("repoRegister"));

		if (repoRegister) {
			const getRepo = async () => {
				for (let i = 0; i < repoRegister.length; i++) {
					let url = `https://api.github.com/repos/${username}/${repoRegister[i].name}/issues`;

					await axios
						.get(url, {
							headers: {
								Accept: "application/vnd.github.nightshade-preview+json",
							},
						})
						.then((res) =>
							res.data.forEach((el) => {
								el.repo = repoRegister[i].name;
								temp.push(el);
							})
						);
				}

				setLoading(!loading);
				setIssue(temp);
			};

			getRepo();
		}
	}, []);

	// pagination 변수
	const lastPost = currentPage * posts;
	const firstPost = lastPost - posts;
	const currentPosts = issue.slice(firstPost, lastPost);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<IssuesSection>
			<Pagination
				posts={posts}
				totalPosts={issue.length}
				paginate={paginate}
				currentPage={currentPage}
			/>

			<ul>
				{loading ? (
					<Loading />
				) : (
					currentPosts.map((data, idx) => (
						<IssuesList data={data} idx={idx}></IssuesList>
					))
				)}
			</ul>
		</IssuesSection>
	);
};

export default React.memo(Isseus);
