// filter, find
import React, { Component } from "react";
import ListGroup from "./listGroup";
import Delete from "./delete";
import SearchBox from "./searchBox"
import AddButton from "./addButton"

class ItemsControl extends Component {
	render() {
		const {
			clicked,
			items,
			itemsDisplay,
			onFilter,
			onDelete,
			onDisplayFilter,
		} = this.props;
		return (
			<div className="row w-100 m-0">
				
				<div className="col text-right p-2">
					<div className="">
						{!clicked
							? itemsDisplay.map((item) => (
									<div
										className="badge badge-primary p-2 font-weight-light mx-1"
										key={item}>
										<a onClick={() => onDisplayFilter(item)} role="button">
											{item}
										</a>
										<Delete onDelete={() => onDelete(item)} />
									</div>
							  ))
							: ""}
						<ListGroup
							items={items}
							onFilter={onFilter}
							clicked={clicked}
							itemsDisplay={itemsDisplay}
						/>
						<AddButton />
						<SearchBox />

					</div>
				</div>
			</div>
		);
	}
}

export default ItemsControl;
