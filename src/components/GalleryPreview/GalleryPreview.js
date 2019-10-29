import './GalleryPreview.scss';
import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { GalleryContext } from '../Gallery/GalleryContext';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

class GalleryPreview extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    clickOff: PropTypes.func,
    index: PropTypes.number.isRequired,
    title: PropTypes.string,
    url: PropTypes.string.isRequired
  };

  static contextType = GalleryContext;

  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.state = {
      index: this.props.index,
      isImageVisible: false,
      isOpen: false,
      title: this.props.title,
      url: this.props.url
    };
  }

  componentDidMount() {
    document.getElementById('root').appendChild(this.el);
    document.body.classList.add('modal-open');
    disableBodyScroll(this.el);
    document.addEventListener('keydown', this.keyboardHandler);
    setTimeout(() => {
      this.setState({
        isOpen: true,
        isImageVisible: true
      });
    }, 10);
  }

  componentWillUnmount() {
    document.getElementById('root').removeChild(this.el);
    document.body.classList.remove('modal-open');
    enableBodyScroll(this.el);
    document.removeEventListener('keydown', this.keyboardHandler);
  }

  keyboardHandler = event => {
    if (event.key === 'Escape') {
      this.props.clickOff();
    } else if (event.key === 'ArrowLeft') {
      this.navigateGallery(this.state.index, 'PREVIOUS');
    } else if (event.key === 'ArrowRight') {
      this.navigateGallery(this.state.index, 'NEXT');
    } else {
      return false;
    }
  };

  navigateGallery = (currentIndex, direction) => {
    let newIndex;
    if (direction === 'PREVIOUS') {
      newIndex = currentIndex === 0 ? this.context.length - 1 : currentIndex - 1;
    } else if (direction === 'NEXT') {
      newIndex = currentIndex === this.context.length - 1 ? 0 : currentIndex + 1;
    } else {
      return false;
    }
    this.setState({
      isImageVisible: false,
      index: newIndex,
      title: this.context[newIndex].title,
      url: this.context[newIndex].url
    });
    setTimeout(() => {
      this.setState({
        isImageVisible: true
      });
    }, 100);
  };

  render() {
    const { className, clickOff } = this.props;
    const { isImageVisible, isOpen, title, url } = this.state;

    return ReactDOM.createPortal(
      <div className={classNames('GalleryPreview', { open: isOpen }, className)}>
        <div className="GalleryPreview-backdrop"></div>
        <figure className="GalleryPreview-figure" onClick={clickOff}>
          {isImageVisible && <img className={classNames({ visible: isImageVisible })} src={url} alt={title} />}
        </figure>
      </div>,
      this.el
    );
  }
}

export default GalleryPreview;
