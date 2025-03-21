import * as React from "react";
import * as classes from "./projectPreview.module.css";

const ProjectPreview = ({ title, subtitle, url }) => {
	return (
		<div className={classes.container}>
			<p>{title}</p>
			<p>{subtitle}</p>
		</div>
	);
};

export default ProjectPreview;
