import React, { Component } from 'react';
//import Typewriter from 'typewriter-effect/dist/core';
import Header from '../Header';
import Gallery from '../Gallery';
import Footer from '../Footer';


class App extends Component {
	componentDidMount() {

	}
	render() {
		return (
			<div className="App">
				<Header />
				<Gallery />	
				<Footer />
			</div>
		);
	}
}

export default App;
