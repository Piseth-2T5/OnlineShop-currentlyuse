// filter, find
import React, { Component } from "react";
import ListGroup from "./listGroup";
import Delete from "./delete";

class ItemsControl extends Component {
	render() {
		const { clicked, items, itemsDisplay, onFilter, onDelete,onDisplayFilter } = this.props;
		return (
			<div className="row w-100 m-0">
				{/* <div className="col"></div> */}
				<div className="col text-right p-2">
					<div className="">
						{!clicked
							? itemsDisplay.map((item) => (
									<div
										className="badge badge-primary p-2 font-weight-light mx-1"
										key={item}>
										<a  onClick={()=>onDisplayFilter(item)} role="button">{item}</a>
										<Delete item={item} onDelete={onDelete} />
									</div>
							  ))
							: ""}

						<ListGroup
							items={items}
							onFilter={onFilter}
							clicked={clicked}
							itemsDisplay={itemsDisplay}
						/>
						<input
							className="p-2 btn text-left border border-dark mx-2"
							type="search"
							placeholder="Search..."
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ItemsControl;
