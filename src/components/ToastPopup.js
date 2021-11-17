import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { flexCenterDir, color } from "../components/utils/theme";

// 컴포넌트
import Toast from "./Toast";

// 얘가 전역으로 되어있어서 어디서든 import toastpopup(msg)만 하면 해당하는 메시지가 추가되게
const ToastSection = styled.div`
	${flexCenterDir}

	justify-content: flex-start;
	width: 20rem;
	height: 100vh;
	position: sticky;
	top: 0;
	z-index: 2;
	/* background: none; */
	background: white;
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
			<Toast />
		</ToastSection>
	);
};

export default ToastPopup;
