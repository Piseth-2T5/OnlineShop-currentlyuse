import React, { Component } from "react";
import NavBar from "./navBar";

import "../../style/costumerProductStyle.css";
import watchImage from "../../assets/watch.jpg";
import cameraImage from "../../assets/camera.jpg";
import headphonneImage from "../../assets/headphone.jpg";
class Product extends React.Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<div className="row py-4">
					<div className="col-md-2 bg-light d-none d-md-block sidebar-costumer">
						<div className="left-sidebar">
							<nav className="nav flex-column">
								<div className="content text-secondary pl-3">All product</div>
								<a className="nav-link active text-dark" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
									</svg>
									Watch
								</a>
								<a className="nav-link text-dark" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
									</svg>
									Headphone
								</a>
								<a className="nav-link text-dark" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
									</svg>
									Sunglass
								</a>
								<div className="sort-feature text-dark pl-3 mt-4">Filter feature</div>
								<a href="" className="nav-link active text-dark">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-app" viewBox="0 0 16 16">
										<path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
									</svg>
									This week
								</a>
								<a href="" className="nav-link active text-dark">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-app" viewBox="0 0 16 16">
										<path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
									</svg>
									Last release in 30(days)
								</a>
								<a href="" className="nav-link active text-dark">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-app" viewBox="0 0 16 16">
										<path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
									</svg>
									Last release in 2(months)
								</a>
							</nav>
						</div>
					</div>
					<div className="col-md-10 d-block right-sidebar">
						<h3 className="category-name">All product</h3>
						<p className="category-describtion">All kind of product that availiable in our shop</p>
						<div className="row pt-4">
							<div className="col-lg-4">
								<div className="item-conntainer bg-light p-1">
									<img className="w-100" src={headphonneImage} alt="" />
									<p className="item-description p-2 m-0">Soundcore by Anker Life Q30 Hybrid Active Noise Cancelling Headphones with Multiple Modes, Hi-Res Sound, Custom EQ via App, 40H Playtime, Comfortable Fit, Bluetooth Headphones,</p>
									<div className="row p-1">
										<div className="col">
											<i className="fas fa-star checked"></i>
											<i className="fas fa-star checked"></i>
											<i className="fas fa-star checked"></i>
											<i className="fas fa-star checked"></i>
											<i className="fas fa-star check"></i>
											<span className="text-success">202</span>
										</div>
										<div className="col">10 counts(pack of 1)</div>
									</div>
									<div className="row p-4">
										<a href="" className="buy btn btn-success p-3">
											Buy 10$
										</a>
										<a href="" className="add-to-cart btn btn-warning p-3 ml-3">
											Add to <i className="fas fa-shopping-cart"></i>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="item-conntainer bg-light p-1">
									<img className="w-100" src={watchImage} alt="" />
									<p className="item-description p-2 m-0">Soundcore by Anker Life Q30 Hybrid Active Noise Cancelling Headphones with Multiple Modes, Hi-Res Sound, Custom EQ via App, 40H Playtime, Comfortable Fit, Bluetooth Headphones,</p>
									<div className="row p-1">
										<div className="col">
											<i className="fas fa-star checked"></i>
											<i className="fas fa-star checked"></i>
											<i className="fas fa-star checked"></i>
											<i className="fas fa-star checked"></i>
											<i className="fas fa-star check"></i>
											<span className="text-success">100</span>
										</div>
										<div className="col">10 counts(pack of 1)</div>
									</div>
									<div className="row p-4">
										<a href="" className="buy btn btn-success p-3">
											Buy 10$
										</a>
										<a href="" className="add-to-cart btn btn-warning p-3 ml-3">
											Add to <i className="fas fa-shopping-cart"></i>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="item-conntainer bg-light p-1">
									<img className="w-100" src={cameraImage} alt="" />
									<p className="item-description p-2 m-0">Soundcore by Anker Life Q30 Hybrid Active Noise Cancelling Headphones with Multiple Modes, Hi-Res Sound, Custom EQ via App, 40H Playtime, Comfortable Fit, Bluetooth Headphones,</p>
									<div className="row p-1">
										<div className="col">
											<i className="fas fa-star checked"></i>
											<i className="fas fa-star checked"></i>
											<i className="fas fa-star checked"></i>
											<i className="fas fa-star checked"></i>
											<i className="fas fa-star checked"></i>
											<span className="text-success">10</span>
										</div>
										<div className="col">10 counts(pack of 1)</div>
									</div>
									<div className="row p-4">
										<a href="" className="buy btn btn-success p-3">
											Buy 10$
										</a>
										<a href="" className="add-to-cart btn btn-warning p-3 ml-3">
											Add to <i className="fas fa-shopping-cart"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Product;
