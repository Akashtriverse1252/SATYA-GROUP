import React, {useState, useEffect} from 'react'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Medianav } from './Medianav';
import { Years } from './Years';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

var decodeHTML = function (html) {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};

function createMarkup(content) {
    return {__html: decodeHTML(content)};
}

export const Life_at_satya = ({ match }) => {
  const slug = (match.params.slug ? match.params.slug : '');

  let history = useHistory();

  const [pagedata, setPagedata] = useState([]);
  useEffect(() => {
  let mounted = true;
  const loadData = async () => {
     const response = await axios.get(`https://www.satyagroups.in/api/lifeatsatya.php?y=${slug}`);
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
  // console.log('no data');
  // return null;
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
                <li><Link to='/media'>Media</Link></li>
                <li>Life At Satya</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
            <div className='media'>
                <div className='container'>
                    <div className='row'>
                        <div className='web-container'>
                        <div className='mediarow'>
                            <div className='title'>
                                <h2>Life At Satya</h2>
                            </div>
                            <div className='mediastn d-flex justify-content-between'>
                               <Medianav />
                                <div className='medright'>
                                  {pagedata.mediayears ?
                                <Years mediay = {pagedata.mediayears}/>
                                : null}
                                <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
                  <TabList className='d-flex justify-content-between'>
                  {pagedata.mediamonths ?
                                            <div>
                                            {pagedata.mediamonths.map(mediaM => (
                                            <Tab>{mediaM.monthname}</Tab>
                                            ))}
                                            </div>
                                            : null}
                  </TabList>
                  
                  {pagedata.mediamonths ?
                    <div>
                        {pagedata.media.gallery.map((galleryData) => (
                  <TabPanel>
                    <div className='events d-flex justify-content-between flex-wrap '>
                    {galleryData.galData.map(galData => (
                        <div className='eventsbox'>
                            <NavLink to={'/life-at-satya-data/' + galData.yearData + '/' + galData.monthData + '/' + galData.news_paperName}>
                            <img src={galData.image} />
                            <h5>{galData.news_paperName}</h5>
                            </NavLink>
                        </div>
                         ))}
                    </div>
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
            </div>
        <Footer />
    </>
  )
}
