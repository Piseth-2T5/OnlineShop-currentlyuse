import Table from "./commons/table";
import Pagination from "./commons/pagination";

const Products = ({
	products,
	currentPage,
	pageSize,
	itemCount,
	onPageChange,
}) => {
	return (
		<div className="container">
			<Table items={products} />
			<Pagination
				currentPage={currentPage}
				pageSize={pageSize}
				itemCount={itemCount}
				onPageChange={onPageChange}
			/>
		</div>
	);
};

export default Products;
