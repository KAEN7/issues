import React from "react";
import styled from "styled-components";
import { flexCenterDir } from "../components/utils/theme";

// 컴포넌트
import Toast from "./Toast";

// 얘가 전역으로 되어있어서 어디서든 import toastpopup(msg)만 하면 해당하는 메시지가 추가되게
const ToastSection = styled.div`
	${flexCenterDir}

	justify-content: flex-start;
	width: 20rem;
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	z-index: -1;
	background: none;
`;

const ToastPopup = ({ message, ToastStatus }) => {
	return (
		<ToastSection>{ToastStatus && <Toast message={message} />}</ToastSection>
	);
};

export default ToastPopup;
