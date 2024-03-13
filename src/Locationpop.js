import React from 'react'
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Locationmap from './images/the-hive-location-map.jpg'

function Locationpop( {locationmapdata}) {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="Gallerybox" data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href={locationmapdata}>
                <button type="button" className='btnfill button-2' onClick={() => this.setState({ isOpen: true })} >
          Location Map
        </button>
                                   
                </a>
            </LightGallery>
        </div>
    );
}
export default Locationpop;