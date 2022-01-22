import React, { Component } from "react";
import _ from "lodash";
import Table from "./commons/table";
import ItemsControl from "./commons/itemsControl";
import Pagination from "./commons/pagination";
import { products } from "../services/productsTest";
import { paginate } from "../utils/paginate";
class Products extends Component {
	state = {
		products: [],
		pageSize: 10,
		currentPage: 1,
		clicked: true, // all product activated
		filteredItemsDisplay: [],
	};

	componentDidMount = () => {
		this.setState({ products });
	};
	handlePageChange = (pageNumber) => {
		this.setState({ currentPage: pageNumber });
	};
	handleDisplayFilter = (filter) => {
		//
		console.log(filter);
	};
	handleFilter = (name) => {
		const items = [...this.state.products];

		if (name) this.state.filteredItemsDisplay.push(name);
		const filteredItemsDisplay = [...this.state.filteredItemsDisplay];

		const filteredItems = name
			? items.filter((item) =>
					item.category.toUpperCase() === filteredItemsDisplay[filteredItemsDisplay.length-1],
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
		const items = [...this.state.products]
		let filteredItems = [...this.state.filteredItems];
		let filteredItemsDisplay = [...this.state.filteredItemsDisplay];

		const index = filteredItemsDisplay.indexOf(filterName)
		filteredItemsDisplay.splice(index, 1);
		console.log(index)

		filteredItems = filterName
		? items.filter((item) =>
				item.category.toUpperCase() === filteredItemsDisplay[filteredItemsDisplay.length-1],
		  )
		: items;
		this.setState({ filteredItemsDisplay});

		filteredItemsDisplay.length === 0
			? this.setState({ clicked: true })
			: this.setState({ clicked: false });

		console.log('def', filterName)
	};
	render() {
		const {
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
		let items = filteredItemsDisplay.length !== 0 ? filteredItems : allProducts;
		const products = paginate(items, currentPage, pageSize);

		console.log(filteredItemsDisplay)

		return (
			<React.Fragment>
				<ItemsControl
					clicked={clicked}
					items={uniqItemsCategories}
					itemsDisplay={filteredItemsDisplay}
					filterName={filterName}
					onFilter={this.handleFilter}
					onDelete={this.handleDelete}
					onDisplayFilter={this.handleDisplayFilter}
				/>
				<div className="container">
					<Table items={products} />
					<Pagination
						currentPage={currentPage}
						pageSize={pageSize}
						itemCount={items.length}
						onPageChange={this.handlePageChange}
					/>
				</div>
				;
			</React.Fragment>
		);
	}
}

export default Products;
