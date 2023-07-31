import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./talkmeup.jpg"
								alt="TalkMeUp"
								className="work-image"
							/>
							<div className="work-title">TalkMeUp</div>
							<div className="work-subtitle">
								Intern Software Engineer
							</div>
							<div className="work-duration">2020 - 2021</div>
						</div>

						<div className="work">
							<img
								src="./ohio_national_guard.jpg"
								alt="Ohio National Guard"
								className="work-image"
							/>
							<div className="work-title">Ohio National Guard</div>
							<div className="work-subtitle">
								Tactical Power Generation Specialist
							</div>
							<div className="work-duration">2020 - 2021</div>
						</div>

						<div className="work">
							<img
								src="./lamp_high_school.jpg"
								alt="LAMP High School"
								className="work-image"
							/>
							<div className="work-title">LAMP High School</div>
							<div className="work-subtitle">
								Assistant Baseball Coach
							</div>
							<div className="work-duration">2020 - 2021</div>
						</div>

						<div className="work">
							<img
								src="./appddiction_studio.jpg"
								alt="Appddiction Studio"
								className="work-image"
							/>
							<div className="work-title">Appddiction Studio</div>
							<div className="work-subtitle">
								Intern Software Engineer
							</div>
							<div className="work-duration">2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
