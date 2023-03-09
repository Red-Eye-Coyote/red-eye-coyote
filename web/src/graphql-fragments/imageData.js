import { graphql } from 'gatsby';

export const imageData = graphql`
  fragment imageData on SanityMainImage {
    asset {
      _id
      metadata {
        lqip
      }
    }
    altText
    caption
    hotspot {
      x
      y
      height
      width
    }
    crop {
      top
      bottom
      left
      right
    }
  }
`;
