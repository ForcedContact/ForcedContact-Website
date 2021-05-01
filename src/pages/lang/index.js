import React from 'react';
import {
	Segment,
	Container,
} from 'semantic-ui-react';
import Link from 'next/link';

function LanguagePage() {

	const langs = [{
		name: 'zh',
		content: '中文'
	}, {
		name: 'en',
		content: 'English'
	}];

	const links = langs.map((lang) => {
		return (<Container style={{padding: 10}}
		                   textAlign="center">
			<Link
				href={{
					pathname: '/content',
					query: {lang: lang.name},
				}}
			>
				<a>{lang.content}</a>
			</Link>
		</Container>);
	});

	return <Segment
		inverted
		textAlign="center"
		style={{minHeight: 700, padding: '1em 0em'}}
		vertical
	>
		<Container style={{padding: 50}}
		           textAlign="center">

			<p>Choosing your language</p>
			{links}
		</Container>
	</Segment>;
}

export default LanguagePage;
