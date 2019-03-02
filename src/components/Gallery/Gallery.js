import React, { Component } from 'react';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import photos from './photos.js';

// Shuffles array in place.
// @param {Array} a items An array containing the items.
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

shuffle(photos);

class Gallery extends Component {
	componentDidMount() {

        let galleryElem = document.getElementById('masonry-gallery');

        this.masonry = new Masonry( galleryElem, {
            // options
            itemSelector: '.Gallery__image',
            columnWidth: '.Gallery__sizer',
            percentPosition: true,
            transitionDuration: '0.2s',
            initLayout: false
        });
        
        imagesLoaded(galleryElem).on('progress', (instance, image) => {
            if(image.isLoaded){
                if(window.IntersectionObserver){
                    let observer = new IntersectionObserver((entries)=>{
                        entries.forEach((entry)=>{
                            if (entry.intersectionRatio > 0.3) {
                                image.img.className = 'animate';
                                observer.unobserve(image.img);
                            }
                        })
                    }, {
                        threshold: 0.3
                    });
                    observer.observe(image.img);
                }else{
                    image.img.className = 'animate';
                }
                
                //Re-layout when image loaded
                this.masonry.layout();
            }else{
                //Remove broken images
                image.img.parentElement.remove();
            }
        });
    }
    
    componentWillUnmount(){
        this.masonry.destroy();
    }

    previewImage(event){
        let image = event.target.cloneNode(true), origin = event.target.getBoundingClientRect();
        // image.style.width = origin.width+'px';
        // image.style.height = origin.height+'px';
        // image.style.top = origin.top+'px';
        // image.style.left = origin.left+'px';
        // console.log(image, origin);
        document.body.classList.add('modal-open');
        document.getElementById('gallery-preview').classList.add('open');
        document.getElementById('gallery-preview-img').appendChild(image);
        setTimeout(()=>{image.classList.add('show');}, 300);
    }

    clickOff(event){
        document.body.classList.remove('modal-open');
        document.getElementById('gallery-preview').classList.remove('open');
        document.getElementById('gallery-preview-img').innerHTML='';
    }

	render() {
        const images = photos.map((photo, index)=>{
            return <div key={index} className="Gallery__image"><img src={photo.url} alt={'Photo #'+index} onClick={this.previewImage} /></div>
        })
		return (
			<div className="Gallery">
                <div className="Gallery__container" id="masonry-gallery">
                    <div className="Gallery__sizer"></div>
                   {images}
                </div>
                <div className="Gallery__preview" id="gallery-preview">
                    <div className="Gallery__backdrop"></div>
                    <div className="Gallery__preview-img" id="gallery-preview-img" onClick={this.clickOff}></div>
                </div> 
			</div>
		);
	}
}

export default Gallery;