import React, { Component } from "react";
import _ from "lodash";
import Table from "./commons/table";
import Pagination from "./commons/pagination";
import ItemsControl from "./commons/itemsControl";
import EmptyPage from "./commons/emtpyPage";
import { products , deleteProduct} from "../services/productsTest";
import { paginate } from "../utils/paginate";
import "../main.style.css";

class Products extends Component {
	state = {
		products: [],
		pageSize: 10,
		columnSort: { path: "_id", order: "desc" },
		currentPage: 1,
		clicked: true,
		filteredItemsDisplay: [],
	};
	columns = [
		{ name: "Name", path: "name" },
		{ name: "Category", path: "category" },
		{ name: "Price", path: "price" },
		{ name: "IN Stock", path: "inStock" },
		{ name: "Rate", path: "rate" },

	];
	componentDidMount = () => {
		this.setState({ products });
	};
	handlePageChange = (pageNumber) => {
		this.setState({ currentPage: pageNumber });
	};
	handleDisplayFilter = (filter) => {
		const products = [...this.state.products];
		const filteredItems = products.filter(
			(product) => product.category.toUpperCase() === filter,
		);
		this.setState({ filteredItems });
	};
	handleFilter = (name) => {
		const items = [...this.state.products];

		if (name) this.state.filteredItemsDisplay.push(name);
		const filteredItemsDisplay = [...this.state.filteredItemsDisplay];
		const filteredItems = name
			? items.filter(
					(item) =>
						item.category.toUpperCase() ===
						filteredItemsDisplay[filteredItemsDisplay.length - 1],
			  )
			: items;
		this.setState({
			filteredItems: filteredItems,
			currentPage: 1,
			clicked: true,
			filteredItemsDisplay,
		});
		name
			? this.setState({ clicked: false })
			: this.setState({ filteredItemsDisplay: [] });
	};
	handleDelete = (filterName) => {
		const items = [...this.state.products];
		let filteredItems = [...this.state.filteredItems];
		let filteredItemsDisplay = [...this.state.filteredItemsDisplay];

		filteredItemsDisplay = filteredItemsDisplay.filter(
			(item) => item !== filterName,
		);

		filteredItems = filterName
			? items.filter(
					(item) =>
						item.category.toUpperCase() ===
						filteredItemsDisplay[filteredItemsDisplay.length - 1],
			  )
			: items;
		this.setState({ filteredItemsDisplay, filteredItems });

		filteredItemsDisplay.length === 0
			? this.setState({ clicked: true })
			: this.setState({ clicked: false });
	};
	handleSort = (columnSort) => {
		this.setState({ columnSort });
	};
	handleDeleteProduct=(id) =>{
		let products = [...this.state.products]
		products = deleteProduct(id )
		this.setState({products})
	}
	handleEdit= id =>{
		console.log(id)
	}
	render() {
		const {
			columnSort,
			clicked,
			filterName,
			currentPage,
			pageSize,
			products: allProducts,
			filteredItems,
			filteredItemsDisplay,
			
		} = this.state;

		const uniqItemsCategories = _.uniq(
			allProducts.map((filterName) => filterName.category.toUpperCase()),
		);
		const items =
			filteredItemsDisplay.length !== 0 ? filteredItems : allProducts;
		const sortItems = _.orderBy(items, [columnSort.path], [columnSort.order]);
		const products = paginate(sortItems, currentPage, pageSize);
		return this.state.products.length ==0? <EmptyPage/> :(
			<div className="container-fluid">
				<ItemsControl
					clicked={clicked}
					items={uniqItemsCategories}
					itemsDisplay={filteredItemsDisplay}
					filterName={filterName}
					onFilter={this.handleFilter}
					onDelete={this.handleDelete}
					onDisplayFilter={this.handleDisplayFilter}
				/>
				<Table
					items={products}
					onSort={this.handleSort}
					columnSort={columnSort}
					columns={this.columns}
					onDelete={this.handleDeleteProduct}
					onEdit={this.handleEdit}
				/>
				<Pagination
					currentPage={currentPage}
					pageSize={pageSize}
					itemCount={items.length}
					onPageChange={this.handlePageChange}
				/>
			</div>
		);
	}
}

export default Products;
