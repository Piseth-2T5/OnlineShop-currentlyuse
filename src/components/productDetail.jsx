import React, { Component } from "react";
import headPhoneImg from "../assets/headphone.jpg";
import { getProduct } from "../services/productsTest";
class ProductDatail extends Component {
	state = {
		product: {},
	};
	columns = [
		{ name: "Name", path: "name" },
		{ name: "Category", path: "category.name" },
		{ name: "Price", path: "price" },
		{ name: "IN Stock", path: "inStock" },
		{ name: "Rate", path: "rate" },
	];
	handleRedirect = () => {
		this.props.history.replace("/products");
	};
	render() {
		const product = getProduct(this.props.match.params.id)
		return (
			<div className="jumbotron">
				<div className="container bg-light p-0">
					<button
						onClick={this.handleRedirect}
						className="float-right btn btn-danger px-2 py-0">
						X
					</button>

					<div className="row p-4 justify-content-center">
						<div className="col-4 pr-0">
							<span className="align-middle">
								<h5 className="mt-0">{product.name}</h5>
								<p className="pt-2">Category: {product.category.name}</p>
								<p>Price: {product.price}</p>
								<p>Quantity: {product.inStock}</p>
								<p>Rate: {product.rate}</p>
							</span>
						</div>
						<div className="col-4 d-inline-block p-0">
							<img
								src={headPhoneImg}
								className="align-self-center mr-3 w-100"
								alt="Product Image"></img>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductDatail;
