import React, { useState, useEffect } from 'react';
import {
	Button,
	Segment,
	Container,
} from 'semantic-ui-react';
import MarkdownViewer from "../../components/MarkdownViewer";

function ContentPage() {

	const [source, setSource] = useState('');
	const [page, setPage] = useState(0);

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
				setPage(page+1);
			}}/>
		</Container>
		<MarkdownViewer
			source={source}
		/>
	</Segment>
		<MarkdownViewer
			source={source}
		/>
	</>;
}

export default ContentPage;
