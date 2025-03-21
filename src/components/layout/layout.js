import * as React from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import * as classes from "./layout.module.css";

const Layout = ({ pageTitle, pageSubtitle, children }) => {
	return (
		<div className={classes.container}>
			<Navbar pageTitle={pageTitle} pageSubtitle={pageSubtitle} />
			<main className={classes.children}>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
