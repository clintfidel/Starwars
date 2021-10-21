import React from 'react';
import { Container } from 'reactstrap';
import "../assets/style.css"

interface AppProps {
    children: JSX.Element
}

const App:React.FC<AppProps> = ({ children }) => (
	<div className='App'>
		<Container className={'pt-3'}>
			{children}
		</Container>
	</div>
);

export default App;
