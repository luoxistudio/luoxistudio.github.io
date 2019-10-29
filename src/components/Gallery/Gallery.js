import './Gallery.scss';
import * as React from 'react';
import { GalleryContext } from './GalleryContext';
import GalleryFigure from '../GalleryFigure';
import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';
import photos from './photos';
import { shuffle } from '../../lib/utils';

class Gallery extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      photos: shuffle(photos)
    };
  }

  componentDidMount() {
    const galleryElem = document.getElementById('Gallery');

    this.masonry = new Masonry(galleryElem, {
      itemSelector: '.Gallery-item',
      columnWidth: '.Gallery-sizer',
      percentPosition: true,
      transitionDuration: '0.2s',
      initLayout: false
    });

    imagesLoaded(galleryElem).on('progress', (instance, image) => {
      if (image.isLoaded) {
        if (window.IntersectionObserver) {
          let observer = new IntersectionObserver(
            entries => {
              entries.forEach(entry => {
                if (entry.intersectionRatio > 0.3) {
                  image.img.className = 'visible';
                  observer.unobserve(image.img);
                }
              });
            },
            {
              threshold: 0.3
            }
          );
          observer.observe(image.img);
        } else {
          image.img.className = 'visible';
        }

        //Re-layout when image loaded
        this.masonry.layout();
      } else {
        //Remove broken images
        image.img.parentElement.remove();
      }
    });
  }

  render() {
    const galleryContent = this.state.photos.map((photo, index) => (
      <GalleryFigure className="Gallery-item" index={index} key={photo.id} title={photo.title} url={photo.url} />
    ));

    return (
      <GalleryContext.Provider value={this.state.photos}>
        <div className="Gallery" id="Gallery">
          <div className="Gallery-sizer"></div>
          {galleryContent}
        </div>
      </GalleryContext.Provider>
    );
  }
}

export default Gallery;
