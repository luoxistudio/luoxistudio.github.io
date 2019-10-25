import React, { Component } from "react";
import Icon from "../Icon";
import ReactGA from "react-ga";

class Contact extends Component {
  _handleContactClick = event => {
    const contactMethod = event.currentTarget.dataset.method;
    ReactGA.event({
      category: "Contact",
      action: "Click",
      label: contactMethod
    });
  };

  render() {
    const classes = this.props.className ? "Contact " + this.props.className : "Contact";
    return (
      <div className={classes}>
        <a
          className="Contact__icon-link"
          href="https://www.weibo.com/jeezu"
          target="_blank"
          rel="noopener noreferrer"
          data-method="Weibo"
          onClick={this._handleContactClick}
        >
          <Icon iconName="weibo" />
        </a>
        {/* <a className="Contact__icon-link" href="javascript:void();"><Icon iconName="wechat" /></a>
                <a className="Contact__icon-link" href="javascript:void();"><Icon iconName="instagram" /></a> */}
        <a
          className="Contact__icon-link"
          data-method="Email"
          href="mailto:229465032@qq.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={this._handleContactClick}
        >
          <Icon iconName="email" />
        </a>
      </div>
    );
  }
}

export default Contact;
