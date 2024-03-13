import React, {useState, useEffect} from 'react'
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { useHistory, Link } from "react-router-dom";
import axios from 'axios';

var decodeHTML = function (html) {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};

function createMarkup(content) {
    return {__html: decodeHTML(content)};
}

function Eventdetail({ match }) {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    


    const slug = (match.params.slug ? match.params.slug : '');
    const slug2 = (match.params.slug2 ? match.params.slug2 : '');
    const slug3 = (match.params.slug3 ? match.params.slug3 : '');
    
        let history = useHistory();
    
        const [pagedata, setPagedata] = useState([]);
        useEffect(() => {
        let mounted = true;
        const loadData = async () => {
           const response = await axios.get(`https://www.satyagroups.in/api/events_data.php?y=${slug}&m=${slug2}&cat=${slug3}`);
           if(mounted){
               setPagedata(response.data);
           }
        }
    
        loadData();
    
        return () => {
            mounted = false;
          };
    }, []);
    
    console.log(pagedata);
    if (pagedata.length===0) {
        console.log('no data');
        return null;
    }





    return (
        <>
        <Header />
        <div className="breadcrum">
        <div className='container'>
          <div className='row'>
            <div className='breadcumtab'>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/events'>Media</Link></li>
                <li><Link to='/events'>Events & Exhibitions</Link></li>
                <li><Link to={'/events/' + pagedata.mediapage.yearData}>{pagedata.mediapage.yearData}</Link></li>                
                <li><Link to={'/events/' + pagedata.mediapage.yearData}>{pagedata.mediapage.monthData}</Link></li>
                <li>{pagedata.mediapage.page_title}</li>                
              </ul>
            </div>
          </div>
        </div>
    </div>
        <div className='event_detail'>
            <div className='container'>
                <div className='row'>
                    <div className='web-container'>
                        <div className='title'>
                            <h2>{pagedata.mediapage.page_title}</h2>
                        </div>
                        {pagedata.media ?
        <div className="Gallerybox">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                {/* Loop Start */}
                {pagedata.media.map(galleryData =>(
                <a href={galleryData.image}>
                    <img src={galleryData.image} alt={galleryData.titleData} />
                    <div class="lightcont">
                                {/* <h4>{galleryData.titleData}</h4> */}
                                </div>
                    
                </a>
                ))}
                {/* Loop End */}
            </LightGallery>
        </div>
        : null}
        </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}
export default Eventdetail;