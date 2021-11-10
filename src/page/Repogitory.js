import React, { useState } from "react";
import styled from "styled-components";
import { flexCenter, flexCenterDir } from "../components/utils/theme";

// 컴포넌트
import RepoBox from "../components/RepoBox";

const RepogitorySection = styled.div`
	${flexCenterDir}

	width: 100vw;
	height: 100vh;
	padding: 1rem;

	overflow-y: auto;
	::-webkit-scrollbar {
		display: none;
	}
`;

const Repogitory = () => {
	return (
		<RepogitorySection>
			<RepoBox />
			<RepoBox />
			<RepoBox />
			<RepoBox />
		</RepogitorySection>
	);
};

export default Repogitory;
