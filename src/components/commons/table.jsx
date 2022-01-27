import React, { Component } from "react";
import TableHead from "./tableHead";
import TableBody from "./tableBody";

class Table extends Component {
	raiseSort = (path) => {
		const columnSort = { ...this.props.columnSort };
		if (columnSort.path === path)
			columnSort.order = columnSort.order === "asc" ? "desc" : "asc";
		else {
			columnSort.path = path;
			columnSort.order = "asc";
		}
		this.props.onSort(columnSort);
	};
	render() {
		const { items, columnSort , columns, onDelete, onEdit, filteredItems} = this.props;
		return (
			<table className="table table-bordered mt-4">
				<TableHead raiseSort={this.raiseSort} columns={columns} columnSort={columnSort} />
				<TableBody items={items} columns={columns} onDelete={onDelete} onEdit={onEdit} filteredItems={filteredItems}/>
			</table>
		);
	}
}

export default Table;
