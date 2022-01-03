import React, { Component } from "react";

class Carousel extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active" data-interval="2000">
							<div className="overlay-image-1 overlay-image"></div>
							<div className="container text-container">
								<h1>Let's take a look</h1>
								<p>What we offer here is very fantastic ree shipping and returns on all sale and clearance items at Nordstrom.com. Find great prices on top-brand clothing and more for women, men</p>
								<a href="" className="btn btn-lg btn-primary">
									Seek more
								</a>
							</div>
						</div>
						<div className="carousel-item" data-interval="2000">
							<div className="overlay-image-2 overlay-image"></div>
							<div className="container text-container">
								<h1>Let's take a look</h1>
								<p>What we offer here is very fantastic ree shipping and returns on all sale and clearance items at Nordstrom.com. Find great prices on top-brand clothing and more for women, men</p>
								<a href="" className="btn btn-lg btn-primary">
									Seek more
								</a>
							</div>
						</div>
						<div className="carousel-item" data-interval="2000">
							<div className="overlay-image-3 overlay-image"></div>
							<div className="container text-container">
								<h1>Let's take a look</h1>
								<p>What we offer here is very fantastic ree shipping and returns on all sale and clearance items at Nordstrom.com. Find great prices on top-brand clothing and more for women, men</p>
								<a href="" className="btn btn-lg btn-primary">
									Seek more
								</a>
							</div>
						</div>
					</div>
					<div className="slide-icon-inner">
						<a href="#myCarousel" className="carousel-control-prev" role="button" data-slide="prev">
							<span className="sr-only">previous</span>
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						</a>
						<a href="#myCarousel" className="carousel-control-next" role="button" data-slide="next">
							<span className="sr-only">previous</span>
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
						</a>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Carousel;
