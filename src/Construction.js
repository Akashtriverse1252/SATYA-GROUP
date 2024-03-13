import React, {useState, useEffect} from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import ConstructionGallery from './ConstructionGallery';
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import img01 from './images/construction-images/June-2021/img01.jpeg'
import img02 from './images/construction-images/June-2021/img02.jpeg'
import img03 from './images/construction-images/Oct-2021/img01.jpeg'
import img04 from './images/construction-images/Oct-2021/img02.jpeg'
import img05 from './images/construction-images/Oct-2021/img03.jpeg'
import img06 from './images/construction-images/Oct-2021/img04.jpeg'
import img07 from './images/construction-images/Oct-2021/img05.jpeg'
import img08 from './images/construction-images/Oct-2021/img06.jpeg'
import img09 from './images/construction-images/Oct-2021/img07.jpeg'

var decodeHTML = function (html) {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};

function createMarkup(content) {
    return {__html: decodeHTML(content)};
}

export const Construction = ({match}) => {
 // API work start

const slug = match.params.slug;
const slug2 = (match.params.slug2) ? match.params.slug2 : "";
const [pagedata, setPagedata] = useState([]);
let history = useHistory();
const [data, setData] = useState([]);
useEffect(() => {

  let mounted = true;

    // Aos.init({ duration: 2000 });
    const loadData = async () => {
        const response = await axios.get(`https://www.satyagroups.in/api/construction_updates.php?url=${slug}&url2=${slug2}`)
        if (mounted) {  
            setPagedata(response.data);
            // setData(response.data.products.accordions);
        }

    }

    loadData();

    return () => {
        mounted = false;
    }

}, []);

console.log(pagedata);
if (pagedata.length == 0) {
    console.log('no data');
    return null;
}

// API work end
  return (
    <>
        <Header />
        <div className="breadcrum">
        <div className='container'>
          <div className='row'>
            <div className='breadcumtab'>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to={'/projects/'+pagedata.construction.slug}>{pagedata.construction.proname}</Link></li>
                <li>Construction Updates</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
        <div className='projectgallery'>
            <div className='container'>
                <div className='row'>      
                <div className='web-container'>
                    <div className='title centertit' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="100">
                        <h2>{pagedata.construction.cptitle} Construction Updates</h2>
                    </div>
                    <div className='contrusction-updates'>
                        <div className='constructionrow'>
                        {pagedata.construction.category ?
                        <div className='year'>
                                <div className='years'>
                                    <ul className='d-flex justify-content-start'>
                                    {pagedata.construction.category.map((years, index) => (
                                        <li><a href={'/project/construction-updates/'+pagedata.construction.slug+'/'+years.year} className={pagedata.construction.curYear==years.year ? 'tab--active' : null}>{years.year}</a></li>
                                        ))}
                                    </ul>
                                    </div>
                                </div>
                                : null}
                                <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
                                {pagedata.construction.months ? 
                  <TabList>
                    {pagedata.construction.months.map((monthData, index2) => ( 
                    <Tab>{monthData.month}</Tab>
                    ))}
                  </TabList>
                  : null}
                   {pagedata.construction.gallery ?
                   <div>
                     {pagedata.construction.gallery.map((galleryData, index3) => (
                      <TabPanel>
                      <ConstructionGallery galleryImages = {galleryData.galData}/>
                      </TabPanel>
                     ))}
                     </div>
                    : null}
                   
                    </Tabs>
                                
                        </div>
                    </div>
        </div>              
        </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
