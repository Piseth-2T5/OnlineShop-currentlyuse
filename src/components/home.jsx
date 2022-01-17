import React, { Component } from "react";
import AddminDashboard from "./adminDashboard";
import Nav from "./nav";
class Home extends React.Component {
	render() {
		return (
			<div className="p-0">
				<Nav />
				<AddminDashboard />
			</div>
		);
	}
}

export default Home;
