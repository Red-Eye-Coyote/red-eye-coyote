async function createLandingPages(
  pathPrefix = '/',
  graphql,
  actions,
  reporter,
) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPage(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const pageEdges = (result.data.allSanityPage || {}).edges || [];
  pageEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const path = `${pathPrefix}/${slug.current}/`;
    reporter.info(`Creating landing page: ${path}`);
    createPage({
      path,
      component: require.resolve('./src/templates/page.js'),
      context: { id },
    });
  });
}

async function createProjects(pathPrefix = '/', graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityProject {
        edges {
          node {
            id
            slug {
              current
            }
            client {
              slug {
                current
              }
            }
          }
        }
      }
    }
  `);

  if (result.error) throw result.errors;

  const projectEdges = (result.data.allSanityProject || {}).edges || [];
  projectEdges.forEach((edge) => {
    const { id, slug, client = {} } = edge.node;
    const path = `${pathPrefix}/${client.slug.current}/${slug.current}/`;
    reporter.info(`Creating project page: ${path}`);
    createPage({
      path,
      component: require.resolve('./src/templates/project.js'),
      context: { id },
    });
  });
}

async function createProfiles(pathPrefix = '/', graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPerson(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;
  const profileEdges = (result.data.allSanityPerson || {}).edges || [];
  profileEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const path = `${pathPrefix}/${slug.current}/`;
    reporter.info(`Creating profile page: ${path}`);
    createPage({
      path,
      component: require.resolve('./src/templates/profile.js'),
      context: { id },
    });
  });
}

// async function createPosts(pathPrefix = '/', graphql, actions, reporter) {
//   const { createPage } = actions;
//   const result = await graphql(`
//     {
//       allSanityPost {
//         edges {
//           node {
//             id
//             slug {
//               current
//             }
//           }
//         }
//       }
//       parentRoute: sanityRoute(page: { title: { eq: "Blog" } }) {
//         id
//       }
//     }
//   `);

//   if (result.errors) throw result.errors;

//   const postEdges = (result.data.allSanityPost || {}).edges || [];
//   const parentRoute = result.data.parentRoute;
//   postEdges.forEach((edge) => {
//     const { id, slug = {} } = edge.node;
//     const parentRouteID = parentRoute.id;
//     const path = `${pathPrefix}/${slug.current}/`;
//     reporter.info(`Creating post page: ${path}`);
//     createPage({
//       path,
//       component: require.resolve('./src/templates/post.js'),
//       context: { id, parentRouteID },
//     });
//   });
// }

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createLandingPages('', graphql, actions, reporter);
  await createProjects('/work', graphql, actions, reporter);
  await createProfiles('/about', graphql, actions, reporter);
  // await createPosts('/blog', graphql, actions, reporter);
};
