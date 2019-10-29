import './Logo.scss';
import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Logo extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['large', 'small']),
    withName: PropTypes.bool
  };

  static defaultProps = {
    size: 'large',
    withName: true
  };

  render() {
    const { className, size, withName } = this.props;
    return (
      <div className={classNames('Logo', `Logo--${size}`, className)}>
        <svg className="Logo-icon" width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <g fill="#000">
              <path d="m0 22h3v16h-3z" />
              <path d="m57 3h3v16h-3z" />
              <path d="m28.5 0h3v60h-3z" />
              <path d="m37.5 0h3v60h-3z" />
              <path d="m19.5 0h3v60h-3z" />
              <path d="m57 41h3v16h-3z" />
              <path d="m0 0h22.5v3h-22.5z" />
              <path d="m39.5 0h20.5v3h-20.5z" />
              <path d="m0 19h20.5v3h-20.5z" />
              <path d="m39.5 19h20.5v3h-20.5z" />
              <path d="m0 38h20.5v3h-20.5z" />
              <path d="m39.5 38h20.5v3h-20.5z" />
              <path d="m0 57h22.8v3h-22.8z" />
              <path d="m39.5 57h20.5v3h-20.5z" />
            </g>
            <path
              d="m30 47c-9.3888407 0-17-7.6111593-17-17s7.6111593-17 17-17 17 7.6111593 17 17-7.6111593 17-17 17z"
              fill="#fff"
              fillRule="nonzero"
            />
            <path
              d="m30 50c-11.045695 0-20-8.954305-20-20s8.954305-20 20-20 20 8.954305 20 20-8.954305 20-20 20zm0-3c9.3888407 0 17-7.6111593 17-17s-7.6111593-17-17-17-17 7.6111593-17 17 7.6111593 17 17 17z"
              fill="#000"
              fillRule="nonzero"
            />
            <path
              d="m30 44c-7.7319865 0-14-6.2680135-14-14s6.2680135-14 14-14 14 6.2680135 14 14-6.2680135 14-14 14zm7.1891892-14.3783784c1.6717809 0 3.027027-1.3552461 3.027027-3.027027s-1.3552461-3.027027-3.027027-3.027027-3.027027 1.3552461-3.027027 3.027027 1.3552461 3.027027 3.027027 3.027027zm-4.5405406-6.8108108c.8358905 0 1.5135136-.6776231 1.5135136-1.5135135s-.6776231-1.5135135-1.5135136-1.5135135c-.8358904 0-1.5135135.6776231-1.5135135 1.5135135s.6776231 1.5135135 1.5135135 1.5135135z"
              fill="#000"
              fillRule="nonzero"
            />
          </g>
        </svg>
        {withName && (
          <span className="Logo-name">
            <span className="Logo-firstLetter">C</span>HOU <span className="Logo-firstLetter">C</span>HOU
          </span>
        )}
      </div>
    );
  }
}

export default Logo;
