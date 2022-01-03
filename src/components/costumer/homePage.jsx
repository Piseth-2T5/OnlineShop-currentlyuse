import React, { Component } from "react";
import Carousel from "./carousel";
import Category from "./category";
import Footer from "./footer";
import NavBar from "./navBar";
class HomePage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<Carousel />
				<Category />
				<Footer />
			</React.Fragment>
		);
	}
}

export default HomePage;
