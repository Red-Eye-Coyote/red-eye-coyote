import { FaRegFileAlt } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

const pageBuilder = (S) =>
  S.listItem()
    .title('Page Builder')
    .child(
      S.list()
        .title('Page Builder')
        .items([
          S.listItem()
            .title('Routes')
            .icon(FaLink)
            .child(S.documentList().title('Routes').filter('_type == "route"')),
          S.listItem()
            .title('Pages')
            .icon(FaRegFileAlt)
            .child(S.documentList().title('Pages').filter('_type == "page"')),
        ])
    );

export default pageBuilder;
