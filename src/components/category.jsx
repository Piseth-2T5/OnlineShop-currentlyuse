import React, { Component } from "react";

import watchImage from "../assets/watch.jpg";
import cameraImage from "../assets/camera.jpg";
import headphonneImage from "../assets/headphone.jpg";

import "../style/costumerHomeStyle.css";
import { Link } from "react-router-dom";
class Category extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid product-view-container">
					<div className="row text-wrap">
						<div className="col-6 col-md-4 col-lg-3 p-2">
							<div className="categary-view p-2">
								<h4 className="category-title">All product</h4>
								<div className="row pt-3">
									<div className="col text-right p-0 pl-4 category-image-shift-left">
										<div className="categary-view-container">
											<div className="categary-overlay-image">
												<img className="w-100" src={cameraImage} alt=""></img>
											</div>
											<div className="categery-name text-center">Assessory</div>
										</div>
									</div>
									<div className="col text-left p-0 pr-4">
										<div className="categary-view-container">
											<div className="categary-overlay-image">
												<img className="w-100" src={cameraImage} alt=""></img>
											</div>
											<div className="categery-name text-center">Assessory</div>
										</div>
									</div>
								</div>
								<div className="row category-image-shift-bottom">
									<div className="col text-right p-0 pl-4 row category-image-shift-left">
										<div className="categary-view-container">
											<div className="categary-overlay-image">
												<img className="w-100" src={cameraImage} alt=""></img>
											</div>
											<div className="categery-name text-center">Assessory</div>
										</div>
									</div>
									<div className="col text-left p-0 pr-4">
										<div className="categary-view-container">
											<div className="categary-overlay-image">
												<img className="w-100" src={cameraImage} alt=""></img>
											</div>
											<div className="categery-name text-center">Assessory</div>
										</div>
									</div>
								</div>
								<div className="row category-view-link">
									<Link to="/costumer-product-view" className="shop-now text-primary">
										Shop now
									</Link>
								</div>
							</div>
						</div>
						<div className="col-6 col-md-4 col-lg-3 p-2">
							<div className="categary-view p-2">
								<h4 className="category-title">Sport Accessories</h4>
								<div className="row pt-3">
									<div className="col text-right p-0 pl-4 category-image-shift-left">
										<div className="categary-view-container">
											<div className="categary-overlay-image">
												<img className="w-100" src={cameraImage} alt=""></img>
											</div>
											<div className="categery-name text-center">Assessory</div>
										</div>
									</div>
									<div className="col text-left p-0 pr-4">
										<div className="categary-view-container">
											<div className="categary-overlay-image">
												<img className="w-100" src={cameraImage} alt=""></img>
											</div>
											<div className="categery-name text-center">Assessory</div>
										</div>
									</div>
								</div>
								<div className="row category-image-shift-bottom">
									<div className="col text-right p-0 pl-4 category-image-shift-left">
										<div className="categary-view-container">
											<div className="categary-overlay-image">
												<img className="w-100" src={cameraImage} alt=""></img>
											</div>
											<div className="categery-name text-center">Assessory</div>
										</div>
									</div>
									<div className="col text-left p-0 pr-4">
										<div className="categary-view-container">
											<div className="categary-overlay-image">
												<img className="w-100" src={cameraImage} alt=""></img>
											</div>
											<div className="categery-name text-center">Assessory</div>
										</div>
									</div>
								</div>
								<div className="row category-view-link">
									<a href="" className="shop-now text-primary">
										Shop now
									</a>
								</div>
							</div>
						</div>
						<div className="col-6 col-md-4 col-lg-3 p-2">
							<div className="categary-view p-2">
								<h4 className="category-title">Electronic Accessories</h4>
								<div className="row pt-3">
									<div className="col text-right p-0 pl-4 category-image-shift-left">
										<div className="categary-view-container">
											<div className="categary-overlay-image">
												<img className="w-100" src={cameraImage} alt=""></img>
											</div>
											<div className="categery-name text-center">Assessory</div>
										</div>
									</div>
									<div className="col text-left p-0 pr-4">
										<div className="categary-view-container">
											<div className="categary-overlay-image">
												<img className="w-100" src={cameraImage} alt=""></img>
											</div>
											<div className="categery-name text-center">Assessory</div>
										</div>
									</div>
								</div>
								<div className="row category-image-shift-bottom">
									<div className="col text-right p-0 pl-4 category-image-shift-left">
										<div className="categary-view-container">
											<div className="categary-overlay-image">
												<img className="w-100" src={cameraImage} alt=""></img>
											</div>
											<div className="categery-name text-center">Assessory</div>
										</div>
									</div>
									<div className="col text-left p-0 pr-4">
										<div className="categary-view-container">
											<div className="categary-overlay-image">
												<img className="w-100" src={cameraImage} alt=""></img>
											</div>
											<div className="categery-name text-center">Assessory</div>
										</div>
									</div>
								</div>
								<div className="row category-view-link">
									<a href="" className="shop-now text-primary">
										Shop now
									</a>
								</div>
							</div>
						</div>
						<div className="col-6 col-md-4 col-lg-3 p-2">
							<div className="categary-view p-2">
								<h4 className="category-title">Electronic Device</h4>
								<div className="row pt-3">
									<div className="col text-right p-0 pl-4 category-image-shift-left">
										<div className="categary-view-container">
											<div className="categary-overlay-image">
												<img className="w-100" src={cameraImage} alt=""></img>
											</div>
											<div className="categery-name text-center">Assessory</div>
										</div>
									</div>
									<div className="col text-left p-0 pr-4">
										<div className="categary-view-container">
											<div className="categary-overlay-image">
												<img className="w-100" src={cameraImage} alt=""></img>
											</div>
											<div className="categery-name text-center">Assessory</div>
										</div>
									</div>
								</div>
								<div className="row category-image-shift-bottom">
									<div className="col text-right p-0 pl-4 category-image-shift-left">
										<div className="categary-view-container">
											<div className="categary-overlay-image">
												<img className="w-100" src={cameraImage} alt=""></img>
											</div>
											<div className="categery-name text-center">Assessory</div>
										</div>
									</div>
									<div className="col text-left p-0 pr-4">
										<div className="categary-view-container">
											<div className="categary-overlay-image">
												<img className="w-100" src={cameraImage} alt=""></img>
											</div>
											<div className="categery-name text-center">Assessory</div>
										</div>
									</div>
								</div>
								<div className="row category-view-link">
									<a href="" className="shop-now text-primary">
										Shop now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Category;
