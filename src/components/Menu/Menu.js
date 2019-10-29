import './Menu.scss';
import * as React from 'react';
import classNames from 'classnames';
import Contact from '../Contact';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

class Menu extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    clickOff: PropTypes.func
  };

  constructor() {
    super();
    this.el = document.createElement('div');
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    document.getElementById('root').appendChild(this.el);
    document.body.classList.add('modal-open');
    disableBodyScroll(this.el);
    setTimeout(() => {
      this.setState({
        isOpen: true
      });
    }, 10);
  }

  componentWillUnmount() {
    document.getElementById('root').removeChild(this.el);
    document.body.classList.remove('modal-open');
    enableBodyScroll(this.el);
  }

  dismissMenu = () => {
    this.setState({
      isOpen: false
    });
    setTimeout(() => {
      this.props.clickOff();
    }, 300);
  };

  render() {
    const { className } = this.props;
    const { isOpen } = this.state;

    return ReactDOM.createPortal(
      <div className={classNames('Menu', { open: isOpen }, className)}>
        <div className="Menu-backdrop" onClick={this.dismissMenu}></div>
        <div className="Menu-panel">
          <h2>Contact me</h2>
          <Contact />
          <p>Designed by CHOUCHOU &copy; 2019</p>
        </div>
      </div>,
      this.el
    );
  }
}

export default Menu;
