/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `Portfolio`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `n0y2bv35a125`,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		`gatsby-plugin-image`,
	],
};
