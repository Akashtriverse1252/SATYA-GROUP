import React from 'react'
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Gallerybox({gallery_data}) {
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
                {gallery_data.map(galData => (
                <a href={galData.image}>
                    <img src={galData.image} alt={galData.titleData + ' ' + galData.news_paperName} />
                    <div class="lightcont">
                                <h4>{galData.titleData}</h4>
                                <h5>{galData.news_paperName}<span class="pull-right">{galData.datemonth}</span></h5>
                                </div>
                    
                </a>
                ))}
            </LightGallery>
        </div>
    );
}
export default Gallerybox;