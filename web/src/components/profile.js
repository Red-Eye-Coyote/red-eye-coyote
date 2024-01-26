import React from 'react';

import Markdown from 'react-markdown';

import PreviewImage from '../components/preview-image';

import './contentLayout.css'

const serializer = {
	container: 'section',
	types: {
		figure: props => (
			<PreviewImage imageAsset={props.node} showCaption={true} />
		)
	}
}

const Profile = ({ profile, relatedProjects }) => {
	const {
		profileImg,
		name,
		office,
		_rawBio
	} = profile;

	return (
		<article className={`rec-article rec-article--dark rec-profile`}>
			<header className={`rec-article__header rec-profile__header`}>
				<h2>{name}
					<br/>
					<span>{office.contactInfo.address.city}</span>
				</h2>
				<PreviewImage imageAsset={profileImg} imageType={`square`} />
			</header>
			<section className="rec-article__body rec-profile__body">
        <Markdown>{biography}</Markdown>
			</section>
		</article>
	);
};

export default Profile;
