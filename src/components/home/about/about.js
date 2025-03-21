import * as React from "react";
import * as classes from "./about.module.css";
import Portrait from "../../../images/portrait.jpeg";

const About = () => {
	return (
		<div className={classes.container}>
			<h3>About me</h3>
			<div className={classes.contentContainer}>
				<img
					src={Portrait}
					alt="Viviana Camargo"
					className={classes.portrait}
				/>
				<div className={classes.textContainer}>
					<p className={classes.bio}>
						Hi there!
						<br />
						<br />
						Lorem ipsum dolor sit amet consectetur. Molestie mi velit mauris
						nisl. Lobortis sed neque ut nisl ac eget amet ultrices risus. Dictum
						tristique vitae laoreet pellentesque. Quis et vestibulum
						pellentesque donec metus in diam.
					</p>
					<div className={classes.skillContainer}>
						<p>Skills</p>
						<ul>
							<li>React</li>
							<li>JavaScript</li>
						</ul>
					</div>
					<div>
						<p>Fun Fact</p>
						<p>Lorem ipsum dolor sit amet consectetur.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
