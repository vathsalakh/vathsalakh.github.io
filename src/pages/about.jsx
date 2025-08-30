import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
// import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>

								<div className="about-skills">
									<div className="skills-title">Technical Skills</div>
									<div className="skills-grid">
										<div className="skill-category">
											<div className="skill-category-title">Languages</div>
											<div className="skill-items">JavaScript, TypeScript, Python, Node.js</div>
										</div>
										<div className="skill-category">
											<div className="skill-category-title">Frameworks & Libraries</div>
											<div className="skill-items">React.js, Express, FastAPI, REST, GraphQL</div>
										</div>
										<div className="skill-category">
											<div className="skill-category-title">Databases</div>
											<div className="skill-items">MongoDB, PostgreSQL, MySQL</div>
										</div>
										<div className="skill-category">
											<div className="skill-category-title">Cloud & DevOps</div>
											<div className="skill-items">AWS (EC2, S3, Lambda), Docker, Kubernetes, Terraform, CI/CD</div>
										</div>
									</div>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
