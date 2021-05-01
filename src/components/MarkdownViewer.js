import React from 'react';
import ReactMarkdown from 'react-markdown';

class MarkdownViewer extends React.Component {
	render(){

		return (<ReactMarkdown
			source={this.props.source}
			renderers={{
				image: (props) => {
					return (
						<img
							{...props}
							style={{ maxWidth: '100%' }}
						/>
					);
				},
				link: (props) => {
					return (
						<a
							href={props.href}
							rel={'noopener noreferrer'}
							target={'_blank'}
						>
							{props.children}
						</a>
					);
				},
			}}
		/>);
	}
}

export default MarkdownViewer;
