import React, {useState, useEffect} from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Contactbanner from './images/nri-corner.jpg'
import { Accordion, AccordionItem } from 'react-light-accordion';
import { Link } from 'react-router-dom';
import axios from 'axios';
var decodeHTML = function (html) {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};

function createMarkup(content) {
    return {__html: decodeHTML(content)};
  }

export const NRIcorner = () => {


  const [pagedata, setPagedata] = useState([]);
  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
       const response = await axios.get('https://www.satyagroups.in/api/nri.php');
       if(mounted) {
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
    <div className='banner'>
        <div className='bannerimg'>
            <img src={pagedata.aboutus.nribanner} />
        </div>
    </div>
    
    <div className="breadcrum">
        <div className='container'>
          <div className='row'>
            <div className='breadcumtab'>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li>NRI Corner</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
      <div className='nricorner'>
        <div className='container'>
          <div className='row'>
          {pagedata.nri?
            <div className='web-container'>
            <div className='title' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="100">
                <h2>NRI Corner</h2>
              </div>
              {pagedata.nri.map((nridesc, index) => {
              return <div>
                {index!=0 ?
                <h3>{nridesc.heading}</h3>
                : null}
                <div dangerouslySetInnerHTML={createMarkup(nridesc.description)}></div>
              </div>

            })
          }
            </div>
            :null}
          </div>
        </div>
      </div>
      {pagedata.nrijobs ?
      <div className='nriaccordian'>
        <div className='container'>
          <div className='web-container'>
        <div>
    <Accordion atomic={true}>
 {/* Loop Start */}
 {pagedata.nrijobs.map(nrijobs=> (
      <AccordionItem title={nrijobs.question}>
        <div className='nricont' dangerouslySetInnerHTML={{__html: nrijobs.answer}}></div>
      </AccordionItem>
 ))}
 {/* Loop End */}
      
    </Accordion>
  </div>
  </div>
        </div>
      </div>
      : null}
    <Footer />
    </>
  )
}
