import React, { Component } from 'react';
//import Typewriter from 'typewriter-effect/dist/core';
import Header from '../Header';
import Gallery from '../Gallery';


class App extends Component {
	componentDidMount() {

	}
	render() {
		return (
			<div className="App">
				<Header />
				<Gallery />	
				<footer className="App__footer">Designed by Luoxi Studio &copy; 2018</footer>
			</div>
		);
	}
}

export default App;
