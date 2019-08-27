/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions: { createPage }, graphql, reporter }) => {
	const allProjects = await graphql(`
		{
			allSanityProject {
				edges {
					node {
						slug {
							current
						}
						client {
							slug{
								current
							}
						}
					}
				}
			}
		}
	`);

	if (allProjects.error) {
		reporter.panic('There was a problem loading the project.');
		return;
	}

	const allPosts = await graphql(`
		{
			allSanityPost {
			  edges {
			    node {
			      slug {
			        current
			      }
			    }
			  }
			}
		}
	`);

	if (allPosts.error) {
		reporter.panic('There was a problem loading the post.');
		return;
	}


	const projects = allProjects.data.allSanityProject.edges;
	const posts = allPosts.data.allSanityPost.edges;


	projects.forEach(({ node: project }) => {

		createPage({
			path: `/work/${project.client.slug.current}/${project.slug.current}`,
			component: require.resolve('./src/templates/project.js'),
			context: { 
					slug: project.slug.current,
					clientSlug: project.client.slug.current
				}
		});
	});

	posts.forEach(({ node: post }) => {

		createPage({
			path: `/blog/${post.slug.current}`,
			component: require.resolve('./src/templates/post.js'),
			context: { 
					slug: post.slug.current
				}
		});
	});
};
