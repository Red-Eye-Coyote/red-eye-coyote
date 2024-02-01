import React from 'react';
import { toHeaderCase } from 'js-convert-case';
import ProjectPreview from './project-preview';

import './projectGrid.css';

function groupObjectBy(key, arr) {
  return arr.reduce((cache, project) => {
    const property = project[key];
    if (property in cache) {
      return { ...cache, [property]: cache[property].concat(project) };
    }
    return { ...cache, [property]: [project] };
  }, {});
}

function createProjectSections(groupedObj) {
  return Object.keys(groupedObj).map((key) => {
    return (
      <section key={key} className="project-section">
        <h3 className="headline-md">{toHeaderCase(key)}</h3>
        <div className="project-container">
          {groupedObj[key].map((project) => {
            return <ProjectPreview key={project._id} {...project} />;
          })}
        </div>
      </section>
    );
  });
}

const ProjectGrid = (props) => {
  const { projects, _key: key } = props;

  const groupByDesignArea = groupObjectBy('designArea', projects);

  const projectGroups = createProjectSections(groupByDesignArea);

  return (
    <section key={key} className="project-group">
      {projectGroups}
    </section>
  );
};

export default ProjectGrid;
