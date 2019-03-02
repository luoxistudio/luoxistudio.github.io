import React, { Component } from 'react';
import Logo from '../Logo';
import Icon from '../Icon';


class Header extends Component {
	componentDidMount() {

	}
	render() {
		return (
			<header className="Header">
				<Logo className="Header__logo" />
                <div className="Header__icon-group">
                    <a className="Header__icon-link" href="https://www.weibo.com/jeezu" target="_blank" rel="noopener noreferrer"><Icon iconName="weibo" /></a>
                    <a className="Header__icon-link" href="javascript:void();"><Icon iconName="wechat" /></a>
                    <a className="Header__icon-link" href="javascript:void();"><Icon iconName="instagram" /></a>
                    <a className="Header__icon-link" href="mailto:luoxistudio@gmail.com" target="_blank" rel="noopener noreferrer"><Icon iconName="email" /></a>
                    <div className="Header__menu">
                        <span></span><span></span><span></span>
                    </div>
                </div>    
			</header>
		);
	}
}

export default Header;
