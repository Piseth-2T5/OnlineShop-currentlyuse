import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Product from "./components/costumer/product"; //Costumer product page
import HomePage from "./components/costumer/homePage";
class App extends React.Component {
	render() {
		return (
			<div className="p-0 ">
				<Switch>
					<Route path="/costumer-homepage" component={HomePage}></Route>
					<Route path="/costumer-product-view" component={Product}></Route>
					<Route path="/" component={Home}></Route>
				</Switch>
			</div>
		);
	}
}

export default App;
