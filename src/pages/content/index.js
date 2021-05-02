import React, { useState, useEffect } from 'react';
import {
	Button,
	Segment,
	Container,
} from 'semantic-ui-react';
import MarkdownViewer from "../../components/MarkdownViewer";
import Link from 'next/link';
import { useRouter } from 'next/router'

function ContentPage() {
	const router = useRouter();
	const {page, lang} = router.query;
	const [source, setSource] = useState('');

	useEffect(async ()=>{
		const response = await fetch('https://raw.githubusercontent.com/ForcedContact/Content/master/README.md');
		const text = await response.text();
		setSource( text + `\npage:${page}`);
	},[page]);


	return <><Segment
		inverted
		textAlign="center"
		style={{minHeight: 700, padding: '1em 0em'}}
		vertical
	>
		<Container style={{padding: 50}}
		           textAlign="center">

			<Button primary size='huge' onClick={()=>{
				router.push({
					pathname:'/content',
					query:{
						lang:lang,
						page: Number(page)+1
					},
				}, undefined, { shallow: true });
			}}/>
		</Container>
		<MarkdownViewer
			source={source}
		/>
	</Segment>
		<Container>
			This work is licensed under a
				<Link href={'https://github.com/ForcedContact/Content/blob/master/LICENSE'}>
					<a>{' Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License'}
					</a>
				</Link>.
		</Container>
	</>;
}

export default ContentPage;
