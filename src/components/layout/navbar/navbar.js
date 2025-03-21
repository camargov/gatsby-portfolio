import * as React from "react";
import * as classes from "./navbar.module.css";

const Navbar = ({ pageTitle, pageSubtitle }) => {
	return (
		<div className={classes.container}>
			<ul className={classes.navLinks}>
				<li>Projects</li>
				<li>About me</li>
				<li>Contact</li>
			</ul>

			<div className={classes.titleContainer}>
				<h3>{pageSubtitle}</h3>
				<h1>{pageTitle}</h1>
			</div>
		</div>
	);
};

export default Navbar;
