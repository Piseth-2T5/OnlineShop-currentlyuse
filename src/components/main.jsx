import React, { Component } from "react";
import Nav from "./nav";
import Products from "./products";
import '../main.style.css'
class Main extends React.Component {
	render() {
		return (
			<div className="p-0 ">
				<Nav />
				<div className="bg-secondary row ">
					<div className="col-1 btn text-white p-2 ">Products</div>
					<div className="col-1 btn text-white p-2 ">Costumers</div>
					<div className="col-1 btn text-white p-2 ">Transaction</div>
					<div className="col-1 btn text-white p-2 ">Graph</div>
				</div>
				<Products />
			</div>
		);
	}
}

export default Main;
