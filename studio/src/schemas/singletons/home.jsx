import { HomeIcon } from '@sanity/icons';

const TITLE = 'Home';

export default {
  name: 'home',
  title: TITLE,
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero.home',
      group: 'editorial',
    },
    {
      name: 'content',
      title: 'Modules',
      type: 'array',
      of: [
        { type: 'module.section' },
        { type: 'module.images' },
        { type: 'module.grid' },
        { type: 'module.projects' },
      ],
      group: 'editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo.home',
      group: 'seo',
    },
  ],
  preview: {
    select: {
      title: TITLE,
    },
  },
};
