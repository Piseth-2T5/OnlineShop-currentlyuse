const TableHead = ({ raiseSort, columns, columnSort }) => {
	return (
		<thead>
			<tr>
				{columns.map((column) => (
					<th
						key={column.name}
						scope="col"
						onClick={() => raiseSort(column.path)}>
						{column.name}{" "}
						{columnSort.path===column.path?  <i
							className={
								columnSort.order === "asc"
									? "fas fa-sort-down"
									: "fas fa-sort-up"
							}></i> : null}
					</th>
				))}
			</tr>
		</thead>
	);
};

export default TableHead;
