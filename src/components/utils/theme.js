import { css } from "styled-components";

// 기기 사이즈
export const size = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px",
};

// 미디어 스타일
const theme = {
	mobileS: `(max-width: ${size.mobileS})`,
	mobileM: `(max-width: ${size.mobileM})`,
	mobileL: `(max-width: ${size.mobileL})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,
	laptopL: `(max-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktop})`,
};

// color
export const color = {
	white: "#ffffe7",
	gray: "#3c3c3d",
	point: "#F13A3A",
};

// flex 디자인
export const flexCenter = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const flexCenterDir = css`
	${flexCenter}

	flex-direction: column;
`;

export const pageSetting = css`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	box-sizing: border-box;
	padding: 3rem;
	overflow-y: auto;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const overflowY = css`
	overflow-y: auto;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const fadeIn = css`
	animation: fade-in 3s;

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export default theme;
