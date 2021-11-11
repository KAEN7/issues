import React, { useState } from "react";
import styled from "styled-components";
import { flexCenter, flexCenterDir, color } from "./utils/theme";

const RepoListBox = styled.div`
	width: 30rem;
	height: 6rem;
	position: relative;
	margin: 2rem;
	cursor: pointer;
	&:hover {
		.RepoListOuter {
			transform: translateX(6rem);
			transition-duration: 0.2s;
		}
		.RepoListInner {
			z-index: 1;
		}
	}
`;

const RepoListOuter = styled.div`
	${flexCenter}

	width: 30rem;
	height: 6rem;
	background: #666667;
	border-radius: 0 4vh 4vh 0;
	font-size: 1.3rem;
`;

const RepoListInner = styled.div`
	${flexCenter}

	width: 6rem;
	height: 6rem;
	background: ${color.point};
	position: absolute;
	transform: translateY(-6rem);
	z-index: -1;
`;

const RepoBox = ({ data }) => {
	console.log(data);
	return (
		<RepoListBox>
			<RepoListOuter className="RepoListOuter">{data.name}</RepoListOuter>
			<RepoListInner className="RepoListInner">X</RepoListInner>
		</RepoListBox>
	);
};

export default RepoBox;
