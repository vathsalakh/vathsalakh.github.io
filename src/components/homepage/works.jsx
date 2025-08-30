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
								src="./logo.png"
								alt="RewardsX"
								className="work-image"
							/>
							<div className="work-title">RewardsX</div>
							<div className="work-subtitle">
								Full Stack Developer Intern
							</div>
							<div className="work-duration">Apr 2025 - Present</div>
							<div className="work-description">
								Building full-stack features for credit card rewards platform using React, Node.js, and Express. Developing scalable GraphQL and REST APIs with PCI DSS compliance and OWASP security best practices.
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
