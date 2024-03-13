import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { Link } from 'react-router-dom';
import img01 from './images/construction-images/June-2020/img01.jpg'
import img02 from './images/construction-images/June-2020/img02.jpg'
import img03 from './images/construction-images/June-2020/img03.jpg'
import img04 from './images/construction-images/June-2020/img04.jpg'
import img05 from './images/construction-images/July-Aug-2020/img01.jpg'
import img06 from './images/construction-images/July-Aug-2020/img02.jpg'
import img07 from './images/construction-images/July-Aug-2020/img03.jpg'
import img08 from './images/construction-images/July-Aug-2020/img04.jpg'
import img09 from './images/construction-images/Nov-Dec-2020/NDimg01.jpg'
import img10 from './images/construction-images/Nov-Dec-2020/NDimg02.jpg'
import img11 from './images/construction-images/Nov-Dec-2020/NDimg03.jpg'
import img12 from './images/construction-images/Nov-Dec-2020/NDimg04.jpg'
import img13 from './images/construction-images/Nov-Dec-2020/NDimg05.jpg'
import img14 from './images/construction-images/Nov-Dec-2020/NDimg06.jpg'
import img15 from './images/construction-images/Nov-Dec-2020/NDimg07.jpg'
import img16 from './images/construction-images/Nov-Dec-2020/NDimg08.jpg'
import img17 from './images/construction-images/Nov-Dec-2020/NDimg09.jpg'
import img18 from './images/construction-images/Nov-Dec-2020/NDimg10.jpg'
import img19 from './images/construction-images/Nov-Dec-2020/NDimg11.jpg'
import img20 from './images/construction-images/Nov-Dec-2020/NDimg12.jpg'
import img21 from './images/construction-images/Nov-Dec-2020/NDimg13.jpg'

export const Construction2020 = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
};
  return (
    <>
        <Header />
        <div className="breadcrum">
        <div className='container'>
          <div className='row'>
            <div className='breadcumtab'>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/the-hive'>The Hive</Link></li>
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
                        <h2>The Hive Construction Updates</h2>
                    </div>
                    <div className='contrusction-updates'>
                        <div className='constructionrow'>
                        <div className='year'>
                                <div className='years'>
                                    <ul className='d-flex justify-content-start'>
                                    <li><Link to='/construction-updates-2021'>2021</Link></li>
                                    <li><Link to='/construction-updates-2020' className='tab--active'>2020</Link></li>
                                    </ul>
                                    </div>
                                </div>
                                <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
                  <TabList>
                    <Tab>June</Tab>
                    <Tab>July-Aug</Tab>
                    <Tab>Nov-Dec</Tab>
                  </TabList>
                  <TabPanel>
                  <div className="Gallerybox">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href={img01}>
                    <img src={img01} alt="The Hive Construction Updates June 2020" />
                  </a>
                  <a href={img01}>
                    <img src={img02} alt="The Hive Construction Updates June 2020" />
                  </a>
                  <a href={img03}>
                    <img src={img03} alt="The Hive Construction Updates June 2020" />
                  </a>
                  <a href={img04}>
                    <img src={img04} alt="The Hive Construction Updates June 2020" />
                  </a>
                  <a href={img05}>
                    <img src={img05} alt="The Hive Construction Updates June 2020" />
                  </a>
               
            </LightGallery>
        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="Gallerybox">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                
                  <a href={img06}>
                    <img src={img06} alt="The Hive Construction Updates July-August 2020" />
                  </a>
                  <a href={img07}>
                    <img src={img07} alt="The Hive Construction Updates July-August 2020" />
                  </a>
                  <a href={img08}>
                    <img src={img08} alt="The Hive Construction Updates July-August 2020" />
                  </a>
                
               
            </LightGallery>
        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="Gallerybox">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                  <a href={img09}>
                    <img src={img09} alt="The Hive Construction Updates November-December 2020" />
                  </a>
                  <a href={img06}>
                    <img src={img10} alt="The Hive Construction Updates November-December 2020" />
                  </a>
                  <a href={img06}>
                    <img src={img11} alt="The Hive Construction Updates November-December 2020" />
                  </a>
                  <a href={img06}>
                    <img src={img12} alt="The Hive Construction Updates November-December 2020" />
                  </a>
                  <a href={img06}>
                    <img src={img13} alt="The Hive Construction Updates November-December 2020" />
                  </a>
                  <a href={img06}>
                    <img src={img14} alt="The Hive Construction Updates November-December 2020" />
                  </a>
                  <a href={img06}>
                    <img src={img15} alt="The Hive Construction Updates November-December 2020" />
                  </a>
                  <a href={img06}>
                    <img src={img16} alt="The Hive Construction Updates November-December 2020" />
                  </a>
                  <a href={img06}>
                    <img src={img17} alt="The Hive Construction Updates November-December 2020" />
                  </a>
                  <a href={img06}>
                    <img src={img18} alt="The Hive Construction Updates November-December 2020" />
                  </a>
                  <a href={img06}>
                    <img src={img19} alt="The Hive Construction Updates November-December 2020" />
                  </a>
                  <a href={img06}>
                    <img src={img20} alt="The Hive Construction Updates November-December 2020" />
                  </a>
                  <a href={img06}>
                    <img src={img21} alt="The Hive Construction Updates November-December 2020" />
                  </a>

                  
               
            </LightGallery>
        </div>
                    </TabPanel>
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
