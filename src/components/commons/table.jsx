import TableHead from "./tableHead";
import TableBody from './tableBody'
const Table = ({ items }) => {
	return (
		<table className="table">
			<TableHead />
            <TableBody items ={items}/>
		</table>

	);
};

export default Table;
