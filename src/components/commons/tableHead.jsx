const TableHead = ({}) => {
	const headName = [{ name: "Name" }, { name: "Category" }, { name: "Price" }, { name: "IN Stock" }, { name: "rate" }];
	return (
		<thead>
			<tr>
				{headName.map((hn) => (
					<th key={hn.name} scope="col">{hn.name}</th>
				))}
			</tr>
		</thead>
	);
};

export default TableHead;
