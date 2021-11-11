import React, { useState } from "react";
import styled from "styled-components";
import { flexCenter, flexCenterDir, color } from "../components/utils/theme";
import { Link } from "react-router-dom";

// 이미지
import issuesIcon from "../img/issues.svg";

// 컴포넌트
import RepoBox from "../components/RepoBox";

const RepoSection = styled.div`
	${flexCenterDir}

	width: 100vw;
	height: 100vh;
	padding: 1rem;

	overflow-y: auto;
	::-webkit-scrollbar {
		display: none;
	}
`;

const RepoBtnBox = styled.div`
	${flexCenter}

	max-width: 70rem;
	overflow-x: auto;
	margin: 1rem 0;
`;

const RepoDelBtn = styled.button`
	${flexCenter}

	padding: 0.7rem;
	margin: 0.5rem;
	background: ${color.point};
	border-radius: 2vh;

	// 액티브시 안쪽 그림자 넣어서 들어게 하면 어떰
`;

const Repogitory = () => {
	const repoRegister = JSON.parse(localStorage.getItem("repoRegister"));

	// 계정 정보 삭제 핸들러
	const usernameDel = () => {
		localStorage.removeItem("username");
		localStorage.removeItem("repoData");
		localStorage.removeItem("repoRegister");
	};

	// 전체 레포지토리 삭제 핸들러
	const allRepoDel = () => {
		localStorage.removeItem("repoRegister");
	};

	return (
		<RepoSection>
			<Link to="/">
				<img src={issuesIcon} alt="issues" />
			</Link>
			<RepoBtnBox>
				<RepoDelBtn onClick={usernameDel}>계정 정보 삭제</RepoDelBtn>
				<RepoDelBtn onClick={allRepoDel}>전체 Repository 삭제</RepoDelBtn>
			</RepoBtnBox>
			{repoRegister.map((data, idx) => (
				<RepoBox key={idx} data={data} />
			))}
		</RepoSection>
	);
};

export default Repogitory;
