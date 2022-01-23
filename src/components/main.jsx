import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import _ from "lodash";
import Nav from "./nav";
import Products from "./products";
import ItemsControl from "./commons/itemsControl";
import "../main.style.css";
import { products } from "../services/productsTest";
import { paginate } from "../utils/paginate";

class Main extends React.Component {
	state = {
		products: [],
		pageSize: 10,
		currentPage: 1,
		clicked: true,
		filteredItemsDisplay: [],
		menus: [
			{ id: 1, name: "Products", path: "/products" },
			{ id: 2, name: "Costumers", path: "/costumers" },
			{ id: 3, name: "Transactions", path: "/transactions" },
			{ id: 4, name: "Graph", path: "/graph" },
		],
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

		const index = filteredItemsDisplay.indexOf(filterName);
		filteredItemsDisplay.splice(index, 1);
		console.log(index);

		filteredItems = filterName
			? items.filter(
					(item) =>
						item.category.toUpperCase() ===
						filteredItemsDisplay[filteredItemsDisplay.length - 1],
			  )
			: items;
		this.setState({ filteredItemsDisplay });

		filteredItemsDisplay.length === 0
			? this.setState({ clicked: true })
			: this.setState({ clicked: false });
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
		const pathname = window.location.pathname
		console.log(pathname)
		return (

			<div className="p-0 ">
				<Nav />
				<div className="bg-secondary row menu">
					{this.state.menus.map((menu) => (
						<Link
							key={menu.id}
							to={menu.path}
							className={
								menu.isClicked || menu.path === pathname
									? "col-1 btn text-dark p-3 align-self-center bg-white"
									: "col-1 btn text-white p-3 align-self-center "
							}
							onClick={() => this.getMenuBg(menu.id)}>
							<div>{menu.name}</div>
						</Link>
					))}

					<ItemsControl
						clicked={clicked}
						items={uniqItemsCategories}
						itemsDisplay={filteredItemsDisplay}
						filterName={filterName}
						onFilter={this.handleFilter}
						onDelete={this.handleDelete}
						onDisplayFilter={this.handleDisplayFilter}
					/>
				</div>
				<Route path={"/products"}>
					<Products
						products={products}
						currentPage={currentPage}
						itemCount={items.length}
						onPageChange={this.handlePageChange}
						pageSize={pageSize}
					/>
				</Route>
				<Route path={"/costumers"}>
				</Route>
			</div>
		);
	}
	getMenuBg = (id) => {
		let menus = [...this.state.menus];
		menus.forEach((menu) =>
			menu.id === id ?(menu.isClicked = true) : (menu.isClicked = false),
		);
		this.setState({ menus });
	};
}

export default Main;
