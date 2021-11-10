import React, { useState } from "react";
import styled from "styled-components";
import { flexCenterDir } from "./utils/theme";
import axios from "axios";

const NameFormSection = styled.form`
	${flexCenterDir}
`;

const NameForm = ({ changeHandler }) => {
	const [name, setName] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();

		if (name === "") {
			alert("계정명을 입력해주세요!");
		} else {
			await axios
				.get(`https://api.github.com/users/${name}/repos`, {
					headers: {
						Accept: "application/vnd.github.nightshade-preview+json",
						// Authorization: `Token b6b4269b1...`,
					},
				})
				.then((el) => changeHandler(el.data));
		}
	};

	return (
		<NameFormSection onSubmit={onSubmit}>
			<input
				placeholder="GitHub 계정명을 입력해주세요"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
		</NameFormSection>
	);
};

export default NameForm;
