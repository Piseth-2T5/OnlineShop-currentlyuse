import React, { Component } from "react";
import AddminDashboard from "./adminDashboard";
import Nav from "./nav";
class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Nav />
				<AddminDashboard />
			</React.Fragment>
		);
	}
}

export default Home;
