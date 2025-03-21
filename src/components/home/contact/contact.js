import * as React from "react";
import * as classes from "./contact.module.css";

const Contact = () => {
	return (
		<div className={classes.container}>
			<h3>Let's Connect</h3>
			<div>
				<div>
					<p>
						If you’d like to talk more or work together, feel free to contact
						me.
					</p>
					<ul className={classes.contactLinks}>
						<li>
							<p>Email</p>
							<p>vivianascamargo@gmail.com</p>
						</li>
						<li>
							<p>LinkedIn</p>
							<p>https://www.linkedin.com/in/v-camargo/</p>
						</li>
						<li>
							<p>GitHub</p>
							<p>https://github.com/camargov</p>
						</li>
						<li>
							<p>Resume</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Contact;
