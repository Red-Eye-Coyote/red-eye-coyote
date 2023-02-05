// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
// Objects
import address from './objects/address';
import blockContent from './objects/blockContent';
import contact from './objects/contact';
import mainImage from './objects/mainImage';
import hero from './objects/hero';
import projectContent from './objects/projectContent';
import projectGroup from './objects/projectGroup';
import postGroup from './objects/postGroup';
import peopleGroup from './objects/peopleGroup';
import socialAccount from './objects/socialAccount';
// Documents
import blogSettings from './documents/blogSettings';
import client from './documents/client';
import companyInfo from './documents/companyInfo';
import jobTitle from './documents/jobTitle';
import office from './documents/office';
import page from './documents/page';
import person from './documents/person';
import post from './documents/post';
import project from './documents/project';
import siteSettings from './documents/siteSettings';
import socialMediaService from './documents/socialMediaService';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    address,
    blogSettings,
    blockContent,
    client,
    companyInfo,
    contact,
    projectGroup,
    postGroup,
    peopleGroup,
    mainImage,
    hero,
    jobTitle,
    office,
    page,
    person,
    post,
    project,
    projectContent,
    siteSettings,
    socialAccount,
    socialMediaService,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
