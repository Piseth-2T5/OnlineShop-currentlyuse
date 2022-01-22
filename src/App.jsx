import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/main";

class App extends React.Component {
	render() {
		return (
			<div className="p-0 ">
				<Switch>
					<Route path="/" component={Main}></Route>
				</Switch>
			</div>
		);
	}
}

export default App;
