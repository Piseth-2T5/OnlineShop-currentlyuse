import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Product from "./components/product"; //Costumer product page
import HomePage from "./components/homePage";
class App extends React.Component {
	render() {
		return (
			<main className="">
				<Switch>
					<Route path="/costumer-product-view" component={Product}></Route>
					<Route path="/" component={HomePage}></Route>
				</Switch>
			</main>
		);
	}
}

export default App;
