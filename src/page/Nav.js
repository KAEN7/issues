import React from "react";
import styled from "styled-components";
import { flexCenter, color } from "../components/utils/theme";
import { Link } from "react-router-dom";

const NavSection = styled.div`
	${flexCenter}

	width: 100%;
	height: 3rem;
	position: sticky;
	bottom: 0;

	background: rgba(23, 23, 23, 1);

	.btn:hover {
		text-decoration: underline 3px ${color.point};
		transition-duration: 0.7s;
	}
`;

const Nav = () => {
	return (
		<NavSection>
			<Link to="/" className="btn">
				Home
			</Link>
			<Link to="/repo" className="btn" style={{ margin: "0 1rem" }}>
				Repo
			</Link>
			<Link to="/issues" className="btn">
				Issues
			</Link>
		</NavSection>
	);
};

export default Nav;
