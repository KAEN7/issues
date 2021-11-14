import React from "react";
import styled from "styled-components";
import { flexCenter, color } from "../components/utils/theme";

const PaginationSection = styled.ul`
	${flexCenter}

	background-color: gray;
	width: 100%;
	overflow: visible;

	li {
		margin: 1rem;
		cursor: pointer;
	}
`;

const Pagination = ({ posts, totalPosts, paginate }) => {
	const pageNumber = [];

	// Math.ceil: 올림
	for (let i = 1; i <= Math.ceil(totalPosts / posts); i++) {
		pageNumber.push(i);
	}

	return (
		<PaginationSection>
			{pageNumber.map((pageNum) => (
				<li
					key={pageNum}
					className="pagination_item"
					onClick={() => paginate(pageNum)}
				>
					{pageNum}
				</li>
			))}
		</PaginationSection>
	);
};

export default Pagination;
