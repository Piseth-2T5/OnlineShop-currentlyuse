import TableHead from "./tableHead";
import TableBody from './tableBody'
const Table = ({ items }) => {
	return (
		<table className="table mt-4">
			<TableHead />
            <TableBody items ={items}/>
		</table>

	);
};

export default Table;
