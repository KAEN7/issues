import React, { useState } from "react";
import styled from "styled-components";
import { flexCenter, flexCenterDir } from "./utils/theme";

const RepoFormSection = styled.form`
	${flexCenterDir}

	width: 100%;
	height: 100%;
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
			box-shadow: 3px 4px white;
			transform: translateY(-10px);
			transition-duration: 0.7s;
		}
	}
`;

const RepoForm = ({ repo }) => {
	const [value, setValue] = useState("");
	const [result, setResult] = useState([]);

	const onSubmit = (e) => {
		e.preventDefault();
		const chooseRepo = repo.filter((data) => data.name.includes(value));
		setResult(chooseRepo);
	};

	return (
		<RepoFormSection onSubmit={onSubmit}>
			<input
				placeholder="레포지토리명을 입력해주세요"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>

			<RepoList>
				{result.map((data, idx) => (
					<li key={idx}>{data.name}</li>
				))}
			</RepoList>
		</RepoFormSection>
	);
};

export default RepoForm;
