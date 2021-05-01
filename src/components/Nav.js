import {createMedia} from '@artsy/fresnel';
import React from 'react';
import {
	Button,
	Container,
	Menu,
} from 'semantic-ui-react';
import { useRouter } from 'next/router';

const {MediaContextProvider} = createMedia({
	breakpoints: {
		mobile: 0,
		tablet: 768,
		computer: 1024,
	},
})

const NavContainer = (props) => {
	const router = useRouter();
	const {children} = props;
	return (
		<>
			<Menu
				fixed={'top'}
				inverted
				pointing
				secondary
				size='large'
				style={{background: 'black'}}
			>
				<Container>
					<Menu.Item as='a' active onClick={()=>{
						router.push('/');
					}}>
						Home
					</Menu.Item>
					<Menu.Item position='right'>
						<Button as='a' inverted>
							Select Chapter
						</Button>
						{/*<Button as='a' inverted primary style={{marginLeft: '0.5em'}}>*/}
						{/*Save*/}
						{/*</Button>*/}
					</Menu.Item>
				</Container>
			</Menu>

			{children}
		</>
	);

};

const Nav = (props) => {
	const {children} = props;
	return (
		<MediaContextProvider>
			<NavContainer>{children}</NavContainer>
		</MediaContextProvider>
	);
}

export default Nav
