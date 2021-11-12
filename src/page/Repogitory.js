import React, { useState } from "react";
import styled from "styled-components";
import { flexCenter, flexCenterDir, color } from "../components/utils/theme";
import { Link } from "react-router-dom";

// 이미지
import RepositoryIcon from "../img/Repository.svg";

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
	// 삭제됬을때 재렌더링을 위해 상태로 관리
	const [repoRegister, setRepoRegister] = useState(
		JSON.parse(localStorage.getItem("repoRegister"))
	);

	// 등록된 레포지토리 변경 핸들러
	const repoSetHandler = (data) => {
		setRepoRegister(data);
	};

	// 계정 정보 삭제 핸들러
	const usernameDel = () => {
		localStorage.removeItem("username");
		localStorage.removeItem("repoData");
		localStorage.removeItem("repoRegister");

		alert("계정정보가 삭제되었습니다");
	};

	// 전체 레포지토리 삭제 핸들러
	const allRepoDel = () => {
		localStorage.removeItem("repoRegister");

		alert("모든 Repository가 삭제되었습니다");
	};

	return (
		<RepoSection>
			<Link to="/">
				<img src={RepositoryIcon} alt="Repository" />
			</Link>
			<RepoBtnBox>
				<RepoDelBtn onClick={usernameDel}>계정 정보 삭제</RepoDelBtn>
				<RepoDelBtn onClick={allRepoDel}>전체 Repository 삭제</RepoDelBtn>
			</RepoBtnBox>
			{repoRegister === null ? (
				<h3>현재 등록된 Repogitory가 없습니다</h3>
			) : (
				repoRegister.map((data, idx) => (
					<RepoBox key={idx} data={data} repoSetHandler={repoSetHandler} />
				))
			)}
		</RepoSection>
	);
};

export default Repogitory;
