import React, { Component } from "react";
import AddminDashboard from "./adminDashboard";
class Nav extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="nav-bar ">
					<nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark">
						<a className="navbar-brand text-light" href="#">
							<i className="fas fa-award"></i> OnlineShope
						</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto ml-auto">
								<li className="nav-item active">
									<a className="nav-link text-light" href="#">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-light" href="#">
										Login
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-light" href="#">
										Order
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-light" href="#">
										<i className="fas fa-shopping-cart"></i> Cart
									</a>
								</li>
							</ul>
							<form className="form-inline my-2 my-lg-0">
								<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
								<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
									<i className="fas fa-search"></i>
								</button>
							</form>
						</div>
					</nav>
				</div>
				<AddminDashboard />
			</React.Fragment>
		);
	}
}

export default Nav;
