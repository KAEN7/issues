import React, { useState } from "react";
import styled from "styled-components";
import { flexCenter, flexCenterDir, color } from "./utils/theme";

const RepoListBox = styled.div`
	width: 40rem;
	height: 8rem;
	position: relative;
	margin: 2rem;
	&:hover {
		.RepoListOuter {
			transform: translateX(8rem);
			transition-duration: 0.2s;
		}
		.RepoListInner {
			z-index: 1;
		}
	}
`;

const RepoListOuter = styled.div`
	${flexCenter}

	width: 40rem;
	height: 8rem;
	background: #c4c4c4;
	border-radius: 0 4vh 4vh 0;
`;

const RepoListInner = styled.div`
	${flexCenter}

	width: 8rem;
	height: 8rem;
	background: ${color.point};
	cursor: pointer;
	position: absolute;
	transform: translateY(-8rem);
	z-index: -1;
`;

const RepoBox = () => {
	return (
		<RepoListBox>
			<RepoListOuter className="RepoListOuter"></RepoListOuter>
			<RepoListInner className="RepoListInner">X</RepoListInner>
		</RepoListBox>
	);
};

export default RepoBox;
