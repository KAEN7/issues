import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ToastPopup from "./ToastPopup";
import { flexCenter, color } from "./utils/theme";

const RepoListBox = styled.div`
	width: 30rem;
	height: 6rem;
	position: relative;
	margin: 2rem;
	cursor: pointer;

	&:hover {
		.RepoListOuter {
			transform: translateX(6rem);
			transition-duration: 0.2s;
		}
		.RepoListInner {
			z-index: 1;
		}
	}

	@media ${(props) => props.theme.tablet} {
		width: 14rem;
	}
`;

const RepoListOuter = styled.div`
	${flexCenter}

	width: 30rem;
	height: 6rem;
	background: ${color.gray};
	font-size: 1.3rem;

	@media ${(props) => props.theme.tablet} {
		width: 14rem;
	}
`;

const RepoListInner = styled.div`
	${flexCenter}

	width: 6rem;
	height: 6rem;
	background: ${color.point};
	position: absolute;
	transform: translateY(-6rem);
	z-index: -1;
`;

const RepoBox = ({ data, repoSetHandler }) => {
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

	// 해당 레포지토리 삭제 핸들러
	const repoDel = () => {
		// 전체 배열에서 이름이 같은 요소만 제거후 다시 저장
		const repoRegister = JSON.parse(localStorage.getItem("repoRegister"));
		const newRepoRegister = repoRegister.filter((el) => el.name !== data.name);
		localStorage.setItem("repoRegister", JSON.stringify(newRepoRegister));
		repoSetHandler(newRepoRegister); // 재렌더링을 위한 상태 업데이트

		setToastMsg("해당 Repository가 삭제되었습니다");
		handleToast();
	};

	return (
		<RepoListBox>
			<ToastPopup message={toastMsg} ToastStatus={ToastStatus} />

			<RepoListOuter
				className="RepoListOuter"
				onClick={() => window.open(`${data.url}`, "_blank")}
			>
				{data.name}
			</RepoListOuter>
			<RepoListInner className="RepoListInner" onClick={repoDel}>
				X
			</RepoListInner>
		</RepoListBox>
	);
};

export default React.memo(RepoBox);
