import React from 'react';

import imageUrlBuilder from '@sanity/image-url'

import useSanityOptions from "../hooks/use-sanity-options";

const PreviewImage = ({ imageAsset, showCaption, profilePic }) => {
	const mySanityConfig = useSanityOptions();

	const builder = imageUrlBuilder(mySanityConfig);

	function urlFor(source) {
		return builder.image(source)
	}

	const {
		altText,
		caption,
		image: {
			asset: {
				metadata
			}
		}
	} = imageAsset;

	const letterboxSrcSet = `
		${urlFor(imageAsset.image).width(400).height(225)} 400w,
		${urlFor(imageAsset.image).width(600).height(338)} 600w,
		${urlFor(imageAsset.image).width(400).height(225).dpr(2)} 800w,
		${urlFor(imageAsset.image).width(600).height(338).dpr(2)} 1200w
	`;
	const squareSrcSet = `
		${urlFor(imageAsset.image).width(400).height(400)} 400w,
		${urlFor(imageAsset.image).width(600).height(600)} 600w,
		${urlFor(imageAsset.image).width(400).height(400).dpr(2)} 800w,
		${urlFor(imageAsset.image).width(600).height(600).dpr(2)} 1200w
	`;

	const renderedImage = (
		<img
			style={{
				backgroundImage: `url(${metadata.lqip})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				marginBottom: "calc(var(--body-size)/2)"
			}}
			srcSet={(profilePic === true) ? squareSrcSet : letterboxSrcSet}
      sizes={`
        (max-width: 320px) 288px,
        (max-width: 480px) 448px,
        (max-width: 759px) 700px,
        475px
      `}
			src={urlFor(imageAsset.image)
				.auto('format')
				}
			alt={altText}
			className={"preview-image"}
		/>
	);

	if (showCaption === true) {
		return (
			<figure>
				{renderedImage}
				<figcaption>{caption}</figcaption>
			</figure>
			);
	} else {
			return (
				renderedImage
			);
	}
}

export default PreviewImage;
