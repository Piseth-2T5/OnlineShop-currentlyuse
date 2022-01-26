import React, { Component } from "react";
import Form from "./commons/form";
import { getCategories } from "../services/categoryTest";
import { addProduct, getProduct , updateProduct} from "../services/productsTest";
class ProductForm extends Form {
	state = {
		data: { product: "", category: "", price: "", inStock: "", rate: "" },
		categories: [],
		errors: {},
	};
	componentDidMount() {
		const productId = this.props.match.params.id;
		const categories = getCategories();
        this.setState({categories})


		if (productId === "new") return;

		const product = getProduct(productId);

		if (!product) {
			this.props.history.replace("/products");
			return;
		}
		this.setState({data: this.getProductToModel(product) });
	}
	getProductToModel(product) {
		const data = { ...this.state.data };
		data.product = product.name;
		data.category = product.category;
		data.price = product.price;
		data.inStock = product.inStock;
		data.rate = product.rate;
		return data;
	}
	doSubmit() {
        const {data} = this.state
		const productId = this.props.match.params.id;
        productId==="new"? addProduct(data): updateProduct(productId, data)

		this.props.history.push("/products");
	}
	render() {
		return (
			<div className="container p-4 mt-4 ">
				<h1 className="text-center">Add Product</h1>
				<form action="" className="mt-4" onSubmit={this.hanldeSubmit}>
					<div className="row justify-content-center">
						{this.renderInput("product", "Product Name")}
						{this.renderInput("price", "Product Price $")}
					</div>
					<div className="row justify-content-center">
						{this.renderInput("inStock", "Quantity")}
						{this.renderSelect(this.state.categories, "Categories", "category")}
					</div>
					<div className="row justify-content-center">
						<div className="col-8 p-0">
							{this.renderInput("rate", "Product's Rate")}
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-8">{this.renderButton("Save")}</div>
					</div>
				</form>
			</div>
		);
	}
}

export default ProductForm;
