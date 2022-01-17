import React, { Component } from "react";

class FindProduct extends React.Component {
	render() {
		return (
			<div className="find-product pt-2 bg-light">
				<divc className="font-weight-bold font-size-5">Find product</divc>
				<div className="pt-4 px-2 text-center d-flex flex-col justify-content-between">
					<input type="text" placeholder="Product name" />

					<input type="text" placeholder="Product category" />

					<div className="btn btn-primary">Find</div>
				</div>
			</div>
		);
	}
}

export default FindProduct;
