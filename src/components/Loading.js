import React from "react";
import styled from "styled-components";
import { flexCenter, color } from "./utils/theme";

const LoadingSection = styled.div`
	${flexCenter}

	box-sizing: border-box;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 64px;
	height: 64px;
	margin-top: -32px;
	margin-left: -32px;
	border-radius: 50%;
	border: 3px solid transparent;
	border-top-color: ${color.white};
	border-bottom-color: ${color.point};
	animation: loading 0.8s ease infinite;

	@keyframes loading {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

const Loading = () => {
	return <LoadingSection />;
};

export default Loading;
