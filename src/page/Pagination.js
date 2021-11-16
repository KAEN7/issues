import React from "react";
import styled from "styled-components";
import { flexCenter, color } from "../components/utils/theme";

const PaginationSection = styled.ul`
	${flexCenter}

	width: 100%;

	li {
		margin: 1rem;
		cursor: pointer;

		&:hover {
			text-decoration: underline 3px ${color.point};
		}
	}
`;

const Pagination = ({ posts, totalPosts, paginate, currentPage }) => {
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
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "2rem",
						height: "2rem",
						background: `${currentPage === pageNum ? color.point : "none"}`,
						borderRadius: "50%",
					}}
				>
					{pageNum}
				</li>
			))}
		</PaginationSection>
	);
};

export default Pagination;
