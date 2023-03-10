import {
  FaCog,
  FaHome,
  FaRegFileAlt,
  FaRegBuilding,
  FaRegIdCard,
} from 'react-icons/fa';

import portfolio from './src/structure/portfolio';
import pageBuilder from './src/structure/pageBuilder';
import blog from './src/structure/blog';
import staff from './src/structure/staff';

const hiddenDocTypes = (listItem) =>
  ![
    'blogSettings',
    'client',
    'companyInfo',
    'jobTitle',
    'office',
    'page',
    'person',
    'post',
    'project',
    'route',
    'siteSettings',
    'socialMediaService',
  ].includes(listItem.getId());

export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(FaCog)
        .child(
          S.editor().schemaType('siteSettings').documentId('siteSettings')
        ),
      S.listItem()
        .title('Frontpage')
        .schemaType('page')
        .icon(FaHome)
        .child(S.document().schemaType('page').documentId('frontpage')),
      S.divider(),
      blog(S),
      pageBuilder(S),
      S.divider(),
      portfolio(S),
      S.divider(),
      S.listItem()
        .title('Company Information')
        .icon(FaRegIdCard)
        .child(S.editor().schemaType('companyInfo').documentId('companyInfo')),
      staff(S),
      S.documentTypeListItem('office').title('Offices').icon(FaRegBuilding),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
