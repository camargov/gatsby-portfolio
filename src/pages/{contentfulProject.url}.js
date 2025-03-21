import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";

const Project = ({ data }) => {
	const { contentfulProject } = data;
	const { projectTitle, projectSubtitle } = contentfulProject;

	return (
		<Layout pageTitle={projectTitle} pageSubtitle={projectSubtitle}>
			Project 1
		</Layout>
	);
};

export const data = graphql`
	query pageQuery($id: String) {
		contentfulProject(id: { eq: $id }) {
			url
			projectTitle
			projectSubtitle
		}
	}
`;

export default Project;
