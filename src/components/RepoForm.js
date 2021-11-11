import React, { useState } from "react";
import styled from "styled-components";
import { flexCenter, flexCenterDir } from "./utils/theme";

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
			box-shadow: 13px 14px white;
			transform: translateY(-10px);
			transition-duration: 0.4s;
		}
	}
`;

const RepoForm = ({ repo }) => {
	const [value, setValue] = useState("");
	const [result, setResult] = useState([]);

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
			alert(
				"선택하신 Repository가 저장되었습니다 \n최상단 로고를 눌러 이동해주세요"
			);
		} else {
			let boo = true;
			saveRepo.forEach((el) => {
				if (el.name === name) {
					alert("이미 등록된 Repository입니다");
					boo = false;
				}
			});
			if (saveRepo.length < 4 && boo) {
				localStorage.setItem(
					"repoRegister",
					JSON.stringify([...saveRepo, { name: name, url: url }])
				);
				alert(
					"선택하신 Repository가 저장되었습니다 \n최상단 로고를 눌러 이동해주세요"
				);
			} else if (saveRepo.length >= 4) {
				alert("Repository는 최대 4개까지 등록할 수 있습니다");
			}
		}
	};

	return (
		<RepoFormSection onChange={onChange}>
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
