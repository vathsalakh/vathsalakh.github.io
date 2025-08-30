import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
// import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Things I've made trying to put my dent in the
							universe.
						</div>

						<div className="subtitle projects-subtitle">
							I've worked on a variety of projects including fintech solutions, AI-powered applications, and content management tools. My current focus is on building secure, scalable web applications at RewardsX, where I contribute to a credit card rewards platform. I'm passionate about creating user-friendly experiences while maintaining high security standards and performance. Each project showcases different aspects of modern web development, from React and Node.js to AI integration and secure fintech solutions.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					{/* <div className="page-footer"> */}
						{/* <Footer /> */}
					{/* </div> */}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
