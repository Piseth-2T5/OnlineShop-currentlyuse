import _ from "lodash";
import React from "react";

const ListGroup = ({
	clicked,
	items,
	itemsDisplay,
	onFilter,
	onDisplayFilter,
}) => {
	let classes = " badge border p-2 font-weight-light badge-";
	classes += clicked ? "primary " : "light";

	return (
		<React.Fragment>
			<div className={classes} role="button" onClick={() => onFilter()}>
				All protucts
			</div>
			<a
				className="badge badge-secondary dropdown-toggle p-2 ml-2"
				type="button"
				id="dropdownMenuButton"
				data-toggle="dropdown"
				aria-expanded="false">
				CATEGORY FILTER
			</a>
			<div className="dropdown-menu p-2" aria-labelledby="dropdownMenuButton">
				{items.map((category) => (
					<a
						className={
							itemsDisplay.includes(category)
								? "dropdown-item btn disabled"
								: "dropdown-item btn "
						}
						key={category}
						onClick={() => onFilter(category)}>
						{category}
					</a>
				))}
			</div>
		</React.Fragment>
	);
};

export default ListGroup;
