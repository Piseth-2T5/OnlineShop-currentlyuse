import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/nav";
import Products from "./components/products";
import ProductForm from "./components/productForm"
import ProductDetail from "./components/productDetail"
class App extends React.Component {
	render() {
		return (
			<div className="p-0 w-100 ">
				<Nav />
				<Switch>
					<Route path="/products/:id"component={ProductForm} />
					<Route path="/products/detail/:id" component={ProductDetail}/>
					<Route path="/products" component={Products} />
				</Switch>
			</div>
		);
	}
}

export default App;
