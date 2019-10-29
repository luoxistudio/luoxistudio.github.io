import './GalleryFigure.scss';
import * as React from 'react';
import classNames from 'classnames';
import GalleryPreview from '../GalleryPreview';
import PropTypes from 'prop-types';

class GalleryFigure extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    index: PropTypes.number.isRequired,
    title: PropTypes.string,
    url: PropTypes.string.isRequired
  };

  constructor() {
    super();
    this.state = {
      previewMode: false
    };
  }

  handleClick = () => {
    this.setState({
      previewMode: true
    });
  };

  dismissPreview = () => {
    this.setState({
      previewMode: false
    });
  };

  render() {
    const { className, index, title, url } = this.props;
    const { previewMode } = this.state;

    return (
      <figure className={classNames('GalleryFigure', className)}>
        <img src={url} alt={title} onClick={this.handleClick} />
        {previewMode && <GalleryPreview clickOff={this.dismissPreview} index={index} url={url} title={title} />}
      </figure>
    );
  }
}

export default GalleryFigure;
