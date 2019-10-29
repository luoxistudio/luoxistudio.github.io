import './Nav.scss';
import * as React from 'react';
import Contact from '../Contact';
import icons from '../../lib/icons';
import Menu from '../Menu';

class Nav extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false
    };
  }

  openMenu = () => {
    this.setState({
      isMenuOpen: true
    });
  };

  dismissMenu = () => {
    this.setState({
      isMenuOpen: false
    });
  };

  render() {
    const { isMenuOpen } = this.state;
    return (
      <nav className="Nav">
        <div className="Nav-desktop">
          <Contact />
        </div>
        <div className="Nav-mobile">
          <div className="Nav-menuIcon" onClick={this.openMenu}>
            {icons.menu}
          </div>
          {isMenuOpen && <Menu clickOff={this.dismissMenu} />}
        </div>
      </nav>
    );
  }
}

export default Nav;
