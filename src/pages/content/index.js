import React, { useState, useEffect } from 'react';
import {
	Button,
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


	return <>
		<Button primary size='huge' onClick={()=>{
			setPage(page+1);
		}}/>
		<MarkdownViewer
			source={source}
		/>
	</>;
}

export default ContentPage;
