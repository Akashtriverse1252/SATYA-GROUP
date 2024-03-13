import React from 'react'
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function ConstructionGallery({galleryImages}) {
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
              {galleryImages.map(galImages => (
                <a href={galImages.limg}>
                    <img src={galImages.simg} alt={galImages.title} />
                  </a>
                  ))}
            </LightGallery>
        </div>
    );
}
export default ConstructionGallery;