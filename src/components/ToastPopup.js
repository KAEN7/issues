import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { flexCenter, color } from "../components/utils/theme";

const ToastSection = styled.div`
	${flexCenter}
`;

const ToastPopup = ({ message }) => {
	const [ToastStatus, setToastStatus] = useState(false);

	const handleToast = (type) => {
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

	return (
		<ToastSection>
			<div>{message}</div>
		</ToastSection>
	);
};

export default ToastPopup;
