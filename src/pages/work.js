import React from "react"

import Layout from "../components/layout"
import ProjectPreview from "../components/project-preview"
import SEO from "../components/seo"

import useProjectBasics from "../hooks/use-project-basics"

export default () => {
  const projects = useProjectBasics();

  return(
    <Layout>
      <SEO title="Work" />
      <header className={`page-header page-header--light`}>
        <h1>Work</h1>
        <p>Take a look.</p>
      </header>
      {projects.map(({ node: project }) => {
        return (
          <ProjectPreview
            key={project._id}
            project={project}
          />
        );
      })}
    </Layout>
  )
};
