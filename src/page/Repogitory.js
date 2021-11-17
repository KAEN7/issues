import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
	flexCenter,
	pageSetting,
	fadeIn,
	color,
} from "../components/utils/theme";
import { Link } from "react-router-dom";

// 이미지
import RepositoryIcon from "../img/Repository.svg";

// 컴포넌트
import RepoBox from "../components/RepoBox";
import ToastPopup from "../components/ToastPopup";

const RepoSection = styled.div`
	${pageSetting}

	padding: 1rem;

	.logo {
		${fadeIn}

		margin-top: 15rem;
	}

	img {
		@media ${(props) => props.theme.tablet} {
			height: 4rem;
		}
	}
`;

const RepoBtnBox = styled.div`
	${flexCenter}

	max-width: 70rem;
	margin: 1rem 0;
`;

const RepoDelBtn = styled.button`
	${flexCenter}

	padding: 0.7rem;
	margin: 0.5rem;
	background: ${color.point};
	border-radius: 2vh;
`;

const Repogitory = () => {
	const [toastMsg, setToastMsg] = useState("");
	const [ToastStatus, setToastStatus] = useState(false);

	// toast message fc
	const handleToast = () => {
		if (!ToastStatus) {
			setToastStatus(true);
		}
	};

	useEffect(() => {
		if (ToastStatus) {
			setTimeout(() => {
				setToastStatus(false);
			}, 1000);
		}
	}, [ToastStatus]);

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

		setToastMsg("계정정보가 삭제되었습니다");
		handleToast();
	};

	// 전체 레포지토리 삭제 핸들러
	const allRepoDel = () => {
		localStorage.removeItem("repoRegister");

		setToastMsg("모든 Repository가 삭제되었습니다");
		handleToast();
	};

	return (
		<RepoSection>
			<ToastPopup message={toastMsg} ToastStatus={ToastStatus} />

			<Link to="/" className="logo">
				<img src={RepositoryIcon} alt="Repository" />
			</Link>
			<RepoBtnBox>
				<RepoDelBtn onClick={usernameDel}>계정 정보 삭제</RepoDelBtn>
				<RepoDelBtn onClick={allRepoDel}>전체 Repository 삭제</RepoDelBtn>
			</RepoBtnBox>
			{repoRegister === null || repoRegister.length === 0 ? (
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
