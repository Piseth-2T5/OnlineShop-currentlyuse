import React, { Component } from "react";
import { Link } from "react-router-dom";
class ListProduct extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="col-10 m-0 p-0">
					<table className="table table-striped table-bordered">
						<thead className="thead-dark">
							<tr>
								<th scope="col">No.</th>
								<th scope="col">Id</th>
								<th scope="col">Name</th>
								<th scope="col">Category</th>
								<th scope="col">Quantity(kg)</th>
								<th scope="col">Buy Price($/kg)</th>
								<th scope="col">Sale Price($/kg)</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>00000</td>
								<td>Tomato</td>
								<td>Vegetable</td>
								<td>10</td>
								<td>0.8</td>
								<td>1.00</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>00001</td>
								<td>Pork</td>
								<td>Meat</td>
								<td>50</td>
								<td>5.0</td>
								<td>5.5</td>
							</tr>
						</tbody>
					</table>
				</div>
			</React.Fragment>
		);
	}
}

export default ListProduct;
