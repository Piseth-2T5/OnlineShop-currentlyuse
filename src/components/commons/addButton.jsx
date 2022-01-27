import { Link } from "react-router-dom";
const AddButton = ({endpoint1}) => {
	return (
		<Link to={`/products/${"new"}`}>
			<button className="badge badge-primary mx-2 p-1">
				<i className="fas fa-plus-square"></i>
			</button>
		</Link>
	);
};

export default AddButton;
