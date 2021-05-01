import 'semantic-ui-css/semantic.min.css';
import Nav from '../components/Nav';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({Component, pageProps}) {
	return <Nav><Component {...pageProps} /></Nav>;
}
