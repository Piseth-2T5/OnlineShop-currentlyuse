import React, { Component } from "react";
import { Link } from "react-router-dom";
class Nav extends React.Component {
	render() {
		const menus = [
			{ name: "Product", route: "/products" },
			{ name: "Costumer", route: "/costumers" },
			{ name: "Transaction", route: "/transactions" },
			{ name: "Graph", route: "/graph" },
		];
		return (
			<React.Fragment>
				<div className="nav-bar p-0">
					<nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark p-0">
						<Link className="navbar-brand text-light px-4 py-2" to="/">
							<i className="fas fa-award"></i> OnlineShope
						</Link>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="ml-3  collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav  border-bottom border-success">
								{menus.map((menu) => (
									<li className="nav-item " key={menu.name}>
										<Link className="nav-link text-white py-2" to={menu.route}>
											{menu.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</nav>
				</div>
			</React.Fragment>
		);
	}
}

export default Nav;
