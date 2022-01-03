import React, { Component } from "react";
import AddminDashboard from "./adminDashboard";
import Carousel from "./costumer/carousel";
import Category from "./costumer/category";
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
