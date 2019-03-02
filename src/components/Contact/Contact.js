import React, { Component } from 'react';
import Icon from '../Icon';


class Contact extends Component {
	render() {
        const classes = this.props.className ? 'Contact ' + this.props.className : 'Contact';
		return (
            <div className={classes}>
                <a className="Contact__icon-link" href="https://www.weibo.com/jeezu" target="_blank" rel="noopener noreferrer"><Icon iconName="weibo" /></a>
                <a className="Contact__icon-link" href="javascript:void();"><Icon iconName="wechat" /></a>
                <a className="Contact__icon-link" href="javascript:void();"><Icon iconName="instagram" /></a>
                <a className="Contact__icon-link" href="mailto:luoxistudio@gmail.com" target="_blank" rel="noopener noreferrer"><Icon iconName="email" /></a>
            </div>    
		);
	}
}

export default Contact;
