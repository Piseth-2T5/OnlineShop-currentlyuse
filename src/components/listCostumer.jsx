import React, { Component } from "react";

class ListCostumer extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="m-0 p-0 w-100">
					<table className="table table-striped table-bordered">
						<thead className="thead-dark">
							<tr>
								<th scope="col">No.</th>
								<th scope="col">Id</th>
								<th scope="col">Name</th>
								<th scope="col">Email</th>
								<th scope="col">Phone Number</th>
								<th scope="col">Citry</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>00000</td>
								<td>Johnson</td>
								<td>mr.js@onlineshop.com.kh</td>
								<td>012345678</td>
								<td>Phnom Penh</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>00001</td>
								<td>Johnson</td>
								<td>mr.js@onlineshop.com.kh</td>
								<td>012345678</td>
								<td>Phnom Penh</td>
							</tr>
						</tbody>
					</table>
				</div>
			</React.Fragment>
		);
	}
}

export default ListCostumer;
