import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { flexCenterDir } from "./utils/theme";
import axios from "axios";
import ToastPopup from "./ToastPopup";

const NameFormSection = styled.form`
	${flexCenterDir}
`;

const NameForm = ({ changeHandler }) => {
	const [name, setName] = useState("");
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

	const onSubmit = async (e) => {
		e.preventDefault();
		localStorage.setItem("username", name);
		const username = localStorage.getItem("username");

		if (name === "") {
			setToastMsg("계정명을 입력해주세요!");
			handleToast();
		} else {
			await axios
				.get(`https://api.github.com/users/${username}/repos`, {
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
			<ToastPopup message={toastMsg} ToastStatus={ToastStatus} />
			<input
				placeholder="GitHub 계정명을 입력해주세요"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
		</NameFormSection>
	);
};

export default NameForm;
