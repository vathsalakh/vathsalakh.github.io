import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
// import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with me! I'm currently working as a Full Stack Developer Intern at RewardsX and I'm always open to new opportunities, collaborations, and interesting projects. If you have a specific question, collaboration proposal, or just want to connect, please feel free to email me directly at{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I make an effort to respond to all messages within 24 hours. You can also connect with me on{" "}
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								LinkedIn
							</a>
							{" "}or{" "}
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
							. I'm particularly interested in fintech, AI, and scalable web applications. Thanks again for your interest, and I look forward to hearing from you!
						</div>

						<div className="contact-availability">
							<div className="availability-title">Current Focus Areas</div>
							<div className="availability-items">
								<div className="availability-item">🚀 Full Stack Development (React, Node.js, GraphQL)</div>
								<div className="availability-item">🔒 Fintech Security & PCI DSS Compliance</div>
								<div className="availability-item">☁️ Cloud Architecture & AWS</div>
								<div className="availability-item">🤖 AI Integration & Machine Learning</div>
							</div>
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>
{/* 
					{<div className="page-footer">
						<Footer /> }
					</div> */}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
