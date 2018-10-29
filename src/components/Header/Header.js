import React, { Component } from 'react';
import Logo from '../Logo';
import Icon from '../Icon';


class Header extends Component {
	componentDidMount() {

	}
	render() {
		return (
			<div className="Header">
				<Logo className="Header__logo" />
                <div className="Header__icon-group">
                    <a className="Header__icon-link" href="https://www.weibo.com/jeezu" target="_blank"><Icon iconName="weibo" /></a>
                    <a className="Header__icon-link" href="javascript:void();"><Icon iconName="wechat" /></a>
                    <a className="Header__icon-link" href="javascript:void();"><Icon iconName="instagram" /></a>
                    <a className="Header__icon-link" href="mailto:luoxistudio@gmail.com" target="_blank"><Icon iconName="email" /></a>
                </div>    
			</div>
		);
	}
}

export default Header;
