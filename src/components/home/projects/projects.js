import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProjectPreview from "../../projectPreview/projectPreview";
import * as classes from "./projects.module.css";

const Projects = () => {
	const data = useStaticQuery(graphql`
		query MyQuery {
			allContentfulProject {
				nodes {
					url
					projectTitle
					projectSubtitle
				}
			}
		}
	`);

	const { allContentfulProject } = data;
	const { nodes } = allContentfulProject;

	return (
		<div className={classes.container}>
			<h3>Projects</h3>
			<div>
				{nodes.map((project, index) => {
					return (
						<ProjectPreview
							title={project.projectTitle}
							subtitle={project.projectSubtitle}
							url={project.url}
							key={index}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
