import React, { Component } from 'react';
import Logo from '../Logo';
import Contact from '../Contact';


class Header extends Component {
	componentDidMount() {

	}
	render() {
		return (
			<header className="Header">
				<Logo className="Header__logo" />
                <Contact className="Header__contact" />
                <div className="Header__menu">
                    <span></span><span></span><span></span>
                </div>
			</header>
		);
	}
}

export default Header;
