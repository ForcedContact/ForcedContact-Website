import React, {Fragment} from 'react';
import {
	Button, Container,
	Grid,
	Header, Icon,
	Segment,
} from 'semantic-ui-react';

const HomepageHeading = ({mobile}) => (
	<Container text>
		<Header
			as='h1'
			content='Forced Contact'
			inverted
			style={{
				fontSize: mobile ? '2em' : '4em',
				fontWeight: 'normal',
				marginBottom: 0,
				marginTop: mobile ? '1.5em' : '3em',
			}}
		/>
		<Header
			as='h2'
			content='A science fiction novel about contact with alien civilizations'
			inverted
			style={{
				fontSize: mobile ? '1.5em' : '1.7em',
				fontWeight: 'normal',
				marginTop: mobile ? '0.5em' : '1.5em',
			}}
		/>
		<Button primary size='huge' onClick={()=>{
			window.open(
				`${window.location.pathname}/content`,
				'_blank', // <- This is what makes it open in a new window.
				'noopener,noreferrer'
			);
		}}>
			Begin Contact
			<Icon name='right arrow'/>
		</Button>
	</Container>
)

const Home = () => (
	<Fragment>
		<Segment
			inverted
			textAlign='center'
			style={{minHeight: 700, padding: '1em 0em'}}
			vertical
		><HomepageHeading/>
		</Segment>
		<Segment style={{padding: '8em 0em'}} vertical>
			<Grid container stackable verticalAlign='middle'>
				<Grid.Row>
					<Grid.Column>
						<Header as='h3' style={{fontSize: '2em'}}>
							Really like ForcedContact so far and want to get involved?
						</Header>
						<p style={{fontSize: '1.33em'}}>
							Help it to translate into your language so more people could read it
						</p>
						<Header as='h3' style={{fontSize: '2em'}}>
							Get access to ongoing editing content and help with translation!
						</Header>
						<p style={{fontSize: '1.33em'}}>
							Simply create a Github account and join
						</p>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column textAlign='center'>
						<Button size='huge' onClick={()=>{
							window.open(
								'https://forced-contact.herokuapp.com/',
								'_blank', // <- This is what makes it open in a new window.
								'noopener,noreferrer'
							);
						}}>Join</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	</Fragment>
);

export default Home
