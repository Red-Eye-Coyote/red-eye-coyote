import React from 'react';

import { Link } from 'gatsby';

import PreviewImage from '../components/preview-image';

import './preview.css';

const ProjectPreview = ({ content }) => {
  const { client, coverImg, slug, title } = content;
  return (
    <Link
      to={`/work/${client.slug.current}/${slug.current}`}
      className={`preview`}
    >
      <h4>{client.name}</h4>
      {<PreviewImage imageAsset={coverImg} />}
    </Link>
  );
};

export default ProjectPreview;
