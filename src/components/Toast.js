import React from "react";
import styled from "styled-components";
import { flexCenter, color } from "../components/utils/theme";

const ToastBox = styled.div`
	${flexCenter}

	width: 19rem;
	max-width: 19rem;
	background: ${color.point};
	box-sizing: border-box;
	margin: 1rem;
	padding: 1rem;
	border-radius: 2vh;
	color: white;
	z-index: 99;
`;

const Toast = ({ message }) => {
	return <ToastBox>{message}</ToastBox>;
};

export default Toast;
