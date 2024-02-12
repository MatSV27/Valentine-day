import React, { useState, useEffect } from 'react';
import Loading from '../Loading';
import './MyComponent.css'
function MyComponent() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulate an API call
		setTimeout(() => {
			setIsLoading(false);
		}, 8000);
	}, []);

	if (isLoading) {
		return <Loading />;
	}
		return (<>
		<div className='Main-container'>
			<div className='Container-mensajes'>
				<h1>Te quiero mucho amor :,)</h1>
				<h2>Feliz 3 meses juntos Ashlly :,3</h2>
				<h3>Me haces muy feliz amor, te quiero mucho mucho mucho mi reina♥️ </h3>
			</div>
			<div className='container-images'>
				<img src={'https://media1.giphy.com/media/qFmdpUKAFZ6rMobzzu/giphy.gif'}></img>
			</div>
		</div>
		</>
	);
}

export default MyComponent;