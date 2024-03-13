import React from 'react'
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Locationmap from './images/merano-greens-location-map.jpg'

function Locationpop3() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="Gallerybox">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href={Locationmap}>
                <button type="button" className='btnfill button-2' onClick={() => this.setState({ isOpen: true })} >
          Location Map
        </button>
                                   
                </a>
            </LightGallery>
        </div>
    );
}
export default Locationpop3;