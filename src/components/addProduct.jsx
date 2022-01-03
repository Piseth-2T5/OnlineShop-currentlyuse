import React, { Component } from "react";

class AddProduct extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="col-10 m-0 p-4 bg-light">
					<h3>Add Product</h3>
					<div className="row">
						<div className="col float-center">
							<form action="">
								<div className="form-group pt-4">
									<label htmlFor="ProductName">Product Name</label>
									<input type="text" className="form-control w-50" id="ProductName" placeholder="required" />
								</div>
								<div className="form-group pt-4">
									<label htmlFor="ProductCategory">Product Quantity</label>
									<select className="ml-4 outline-none" name="form-control" id="">
										<option value="">Kg</option>
										<option value="">Pack</option>a
									</select>
									<input type="number" className="form-control w-50" id="ProductName" placeholder="required" />
								</div>
								<div className="form-group pt-4">
									<label htmlFor="ProductPrice">Product Price</label>
									<select className="ml-4 outline-none" name="form-control" id="">
										<option value="">USD</option>
										<option value="">KHR</option>
									</select>
									<input type="number" className="form-control w-50" id="ProductName" placeholder="required" />
								</div>
								<div className="form-group pt-3">
									<label htmlFor="">This produt is for:</label>
									<select name="" id="" className="ml-4 p-2">
										<option value="">Male</option>
										<option value="">Female</option>
										<option value="">Both</option>
									</select>
								</div>
							</form>
						</div>
						<div className="col">
							<form action="">
								<div className="form-group pt-4">
									<label htmlFor="ProductPrice">Product Cost</label>
									<select className="ml-4 outline-none" name="form-control" id="">
										<option value="">USD</option>
										<option value="">KHR</option>
									</select>
									<input type="number" className="form-control w-50" id="ProductName" placeholder="required" />
								</div>
								<div className="form-group pt-4">
									<label htmlFor="ProductName">Product Category</label>
									<input type="text" className="form-control w-50" id="ProductName" />
									<small className="text-form text-muted">Assign accourding to product name</small>
								</div>
								<div className="form-group pt-4">
									<label htmlFor="ProductCategory">Product Model</label>
									<input type="text" className="form-control w-50" id="ProductName" />
								</div>
							</form>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default AddProduct;
