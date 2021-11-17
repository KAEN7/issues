import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ToastPopup from "./ToastPopup";
import { flexCenter, flexCenterDir, color } from "./utils/theme";

const RepoFormSection = styled.form`
	${flexCenterDir}

	width: 100%;
`;

const RepoList = styled.ul`
	${flexCenter}

	flex-wrap: wrap;

	li {
		${flexCenter}

		cursor: pointer;
		width: 240px;
		height: 150px;
		background: black;
		margin: 1rem;
		border-radius: 2vh;

		&:hover {
			box-shadow: 13px 14px ${color.white};
			transform: translateY(-10px);
			transition-duration: 0.4s;
		}
	}
`;

const RepoForm = ({ repo }) => {
	const [value, setValue] = useState("");
	const [result, setResult] = useState([]);
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

	const onChange = (e) => {
		e.preventDefault();
		const repoData = JSON.parse(localStorage.getItem("repoData"));
		const chooseRepo = repoData.filter((data) => data.name.includes(value));
		setResult(chooseRepo);
	};

	const onSaveRepo = (name, url) => {
		let saveRepo = JSON.parse(localStorage.getItem("repoRegister"));

		if (!saveRepo) {
			const repoRegister = JSON.stringify([{ name: name, url: url }]);
			localStorage.setItem("repoRegister", repoRegister);
			setToastMsg(
				"선택하신 Repository가 저장되었습니다 \n최상단 로고를 눌러 이동해주세요"
			);
			handleToast();
		} else {
			let boo = true;
			saveRepo.forEach((el) => {
				if (el.name === name) {
					setToastMsg("이미 등록된 Repository입니다");
					handleToast();
					boo = false;
				}
			});
			if (saveRepo.length < 4 && boo) {
				localStorage.setItem(
					"repoRegister",
					JSON.stringify([...saveRepo, { name: name, url: url }])
				);
				setToastMsg(
					"선택하신 Repository가 저장되었습니다 \n최상단 로고를 눌러 이동해주세요"
				);
				handleToast();
			} else if (saveRepo.length >= 4) {
				setToastMsg("Repository는 최대 4개까지 등록할 수 있습니다");
				handleToast();
			}
		}
	};

	return (
		<RepoFormSection onChange={onChange}>
			<ToastPopup message={toastMsg} ToastStatus={ToastStatus} />

			<input
				placeholder="레포지토리명을 입력해주세요"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				autoFocus
			/>

			<RepoList>
				{result.map((data, idx) => (
					<li key={idx} onClick={() => onSaveRepo(data.name, data.html_url)}>
						{data.name}
					</li>
				))}
			</RepoList>
		</RepoFormSection>
	);
};

export default RepoForm;
