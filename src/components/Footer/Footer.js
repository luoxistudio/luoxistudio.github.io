import React, { Component } from 'react';
import Contact from '../Contact';


class Footer extends Component {
	render() {
		return (
            <footer className="Footer">
                <Contact className="Footer__contact" />
                <p className="Footer__copyright">Designed by Luoxi Studio &copy; 2019</p>
            </footer> 
		);
	}
}

export default Footer;
