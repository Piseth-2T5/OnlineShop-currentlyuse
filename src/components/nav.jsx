import React, { Component } from "react";
import { Link } from "react-router-dom";
class Nav extends React.Component {
	render() {
		const menus = [
			{ name: "Home", route: "/home" },
			{ name: "Product", route: "/product" },
			{ name: "Costumer", route: "/costumer" },
			{ name: "Account", route: "/account" },
		];
		return (
			<React.Fragment>
				<div className="nav-bar ">
					<nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark">
						<Link className="navbar-brand text-light" to="/">
							<i className="fas fa-award"></i> OnlineShope
						</Link>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
							<ul className="navbar-nav pr-4">
								{menus.map((menu) => (
									<li className="nav-item " key={menu.name}>
										<Link className="nav-link text-white" to={menu.route}>
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
