import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import Contactbanner from './images/contact_us.jpg'
import { Accordion, AccordionItem } from 'react-light-accordion';
import { Link } from 'react-router-dom';
import { Copyright } from './components/Copyright';
import axios from 'axios';

var decodeHTML = function (html) {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};

function createMarkup(content) {
    return {__html: decodeHTML(content)};
  }

export const Contact = () => {

  const [pagedata, setPagedata] = useState([]);
  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
       const response = await axios.get('https://www.satyagroups.in/api/contactus.php');
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
        <div className='banner'>
        <div className='bannerimg'>
        <img src={pagedata.aboutus.ctbanner} />
        </div>
    </div>
    <div className="breadcrum">
        <div className='container'>
          <div className='row'>
            <div className='breadcumtab'>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
    <div className='contact_us'>
    <div className='footer'>
            <div className='container'>
              <div className='row'>                
              <div className='web-container'>
                <div className='title'>
                  <h2>Contact us</h2>
                </div>
                <div className='ftrrow d-flex justify-content-between' data-aos="fade" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="200">
                {pagedata.contact.map(careerdesc =>{
                      return <div className='ftr'>
                      <h2>{careerdesc.heading}</h2>
                      <div dangerouslySetInnerHTML={createMarkup(careerdesc.description)}></div>
                    </div>
                    })}
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <div className='racall'>
          <div className='container'>
            <div className='row'>
              <div className='web-container'>
              <div className='racallrow'>
                <div className='title' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="100">
                  <h2>Request A call Back</h2>
                </div>
                <form>
                <ul className='form d-flex flex-wrap justify-content-between' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="200">
                  <li><input type='text' placeholder='Name*' name='name' required/></li>
                  <li><input type='tel' placeholder='Mobile No*' name='mobile' required/></li>
                  <li><input type='email' placeholder='Email*' name='email' required/></li>                  
                  <li><input type='submit' value='submit' className='btnfill button-2'/></li>
                </ul>
                </form>
              </div>
              </div>
            </div>
          </div>
        </div>
        
   <Copyright />
          </div>
    </>
  )
}
