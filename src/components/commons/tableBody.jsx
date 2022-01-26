import { Link } from "react-router-dom";

import React, { Component } from "react";

class TableBody extends Component {
	render() {
		const { items, columns, onEdit, onDelete } = this.props;
		return (
			<tbody>
				{items.map((item) => (
					<tr key={item._id}>
						{columns.map((column) => (
							<td key={column.path || column.content}>
								<Link to={`/products/detail/${item._id}`} className="text-dark">
									{item[column.path]}
								</Link>
							</td>
						))}
						<td className="p-0 align-middle text-center dropleft  ">
							<div
								className="dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-expanded="false">
								<i className="fas fa-edit"></i>
							</div>
							<div className="dropdown-menu p-0 " aria-labelledby="dropdownMenuButton">
								<Link className="dropdown-item bg-warning text-center" role="button" to={`/products/${item._id}`} >
									Edit
								</Link>
								<a className="dropdown-item bg-danger text-center" role="button" onClick={()=>onDelete(item._id)}>
									Delete
								</a>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		);
	}
}

export default TableBody;
