import React, { Component } from "react";
class Sale extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="col-10 m-0 p-0">
					<table className="table table-striped table-bordered">
						<thead className="thead-dark">
							<tr>
								<th scope="col">No.</th>
								<th scope="col">Id</th>
								<th scope="col">Costumer</th>
								<th scope="col">Product</th>
								<th scope="col">Date</th>
								<th scope="col">Time</th>
								<th scope="col">Quantity</th>
								<th scope="col">Total price</th>
								<th scope="col">Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>00000</td>
								<td>Johnson</td>
								<td>Tomato</td>
								<td>2022/01/01</td>
								<td>9:00 Am</td>
								<td>0.5 Kg</td>
								<td>0.5 $</td>
							</tr>
						</tbody>
					</table>
				</div>
			</React.Fragment>
		);
	}
}

export default Sale;
