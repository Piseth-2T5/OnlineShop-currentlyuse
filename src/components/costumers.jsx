import React, { Component } from "react";
class Costumers extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<ItemsControl
					clicked={clicked}
					items={uniqItemsCategories}
					itemsDisplay={filteredItemsDisplay}
					filterName={filterName}
					onFilter={this.handleFilter}
					onDelete={this.handleDelete}
					onDisplayFilter={this.handleDisplayFilter}
				/>
				<div className="container">
					<Table items={products} />
					<Pagination
						currentPage={currentPage}
						pageSize={pageSize}
						itemCount={items.length}
						onPageChange={this.handlePageChange}
					/>
				</div>
				;
			</React.Fragment>
		);
	}
}

export default Costumers;
