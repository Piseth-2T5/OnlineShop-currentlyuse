const Pagination = ({ currentPage, pageSize, itemCount, onPageChange }) => {
	const pageNumber = Math.ceil(itemCount / pageSize);
	const pageRange = [...Array(pageNumber).keys()].map((num) => ++num);
	return (
		<nav>
			<ul className="pagination">
				<li className={currentPage === "prev" ? "page-item active" : "page-item "} onClick={() => onPageChange("prev")}>
					<a className="btn page-link">Previous</a>
				</li>
				{pageRange.map((page) => (
					<li key={page} className={currentPage === page ? "page-item active" : "page-item "} onClick={() => onPageChange(page)}>
						<a className="btn page-link">{page}</a>
					</li>
				))}
				<li className={currentPage === "next" ? "page-item active" : "page-item "} onClick={() => onPageChange("next")}>
					<a className="btn page-link">Next</a>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
