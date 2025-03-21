import * as React from "react";
import Layout from "../components/layout/layout";
import About from "../components/home/about/about";
import Contact from "../components/home//contact/contact";
import Projects from "../components/home/projects/projects";
import "../styles/global.css";

const IndexPage = () => {
	return (
		<Layout pageTitle="Viviana Camargo" pageSubtitle="Software Developer">
			<main>
				<Projects />
				<About />
				<Contact />
			</main>
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>Portfolio</title>;
