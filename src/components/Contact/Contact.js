import './Contact.scss';
import * as React from 'react';
import icons from '../../lib/icons';
import ReactGA from 'react-ga';

class Contact extends React.PureComponent {
  _handleContactClick = event => {
    const contactMethod = event.currentTarget.dataset.method;
    ReactGA.event({
      category: 'Contact',
      action: 'Click',
      label: contactMethod
    });
  };

  render() {
    return (
      <div className="Contact">
        <a
          className="Contact-link"
          data-method="Weibo"
          href="https://www.weibo.com/jeezu"
          target="_blank"
          rel="noopener noreferrer"
          onClick={this._handleContactClick}
        >
          {icons.weibo}
        </a>
        <a
          className="Contact-link"
          data-method="Email"
          href="mailto:229465032@qq.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={this._handleContactClick}
        >
          {icons.email}
        </a>
      </div>
    );
  }
}

export default Contact;
