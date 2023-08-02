import React from "react";

import INFO from "../../data/user";

import "./styles/featuredProject.css";

const FeaturedProject = () => {
	const title = INFO.featuredProject.title;
	const description = INFO.featuredProject.description;
	const image = INFO.featuredProject.image;

	return (
		<React.Fragment>
			<div className="featuredProject">
				<div className="featuredProject-title">{title}</div>
				<div className="featuredProject-image-wrapper">
					<img
						src= {image}
						alt="featured project"
						className="featuredProject-image"
					/>
				</div>
				<div className="featuredProject-description">{description}</div>
			</div>
		</React.Fragment>
	);
};

export default FeaturedProject;
