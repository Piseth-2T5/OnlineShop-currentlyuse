import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Footer extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="footer w-100 bg-dark">
					<div className="row">
						<div className="col btn text-white back-to-top">Back to top</div>
					</div>
					<div className="container">
						<div className="row pt-4">
							<div className="col-6 col-lg-3">
								<div className="footer-text-container text-white">
									<h5>Get to know us more</h5>
									<p>Career</p>
									<p>Blog</p>
									<p>Product</p>
									<p>Service</p>
								</div>
							</div>
							<div className="col-6 col-lg-3">
								<div className="footer-text-container text-white">
									<h5>Get to know us more</h5>
									<p>Career</p>
									<p>Blog</p>
									<p>Product</p>
									<p>Service</p>
								</div>
							</div>
							<div className="col-6 col-lg-3">
								<div className="footer-text-container text-white">
									<h5>Get to know us more</h5>
									<p>Career</p>
									<p>Blog</p>
									<p>Product</p>
									<p>Service</p>
								</div>
							</div>
							<div className="col-6 col-lg-3">
								<div className="footer-text-container text-white">
									<h5>Get to know us more</h5>
									<p>Career</p>
									<p>Blog</p>
									<p>Product</p>
									<p>Service</p>
								</div>
							</div>
						</div>
						<div className="row pt-4">
							<div className="col text-center pt-4">
								<a className="navbar-brand text-light" href="#">
									{" "}
									<i className="fas fa-award"></i> OnlineShope{" "}
								</a>
								<span className="btn btn-lg text-white border-white mr-2">
									English <i className="fas fa-sort"></i>
								</span>
								<span className="btn btn-lg text-white border-white mr-2">
									<i className="fab fa-facebook-f"></i>
								</span>
								<span className="btn btn-lg text-white border-white mr-2">
									<i className="fab fa-twitter"></i>
								</span>
								<span className="btn btn-lg text-white border-white">
									<i className="fab fa-instagram"></i>
								</span>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Footer;
