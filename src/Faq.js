import React, {useState, useEffect} from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
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
  
export const Faq = () => {

  const [pagedata, setPagedata] = useState([]);
  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
       const response = await axios.get('https://www.satyagroups.in/api/faq.php');
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
    
    <div className="breadcrum">
        <div className='container'>
          <div className='row'>
            <div className='breadcumtab'>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li>Faq</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
      <div className='nriaccordian'>
        <div className='container'>
          <div className='web-container'>
          <div className='title' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="100">
                <h2>Frequently Asked Questions</h2>
              </div>
              <div className="searchbox">
                <div className='searchcent'>
                  <div className='searchinput'>
                    <input type='text' placeholder='Search ...'/>
                    <button type="submit"><i class="fa fa-search"></i></button>
                  </div>
                </div>
              </div>
        <div>
        {pagedata.faqs ?
          <div className='currentopening' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="100">
    <Accordion atomic={true}>
    {pagedata.faqs.map(faq=> (
      <AccordionItem title={faq.question}>
        <div className='nricont'>
        <ul>
          <li><span dangerouslySetInnerHTML={{__html: faq.answer}}></span></li>
        </ul>
      </div>
      </AccordionItem>
      ))}
    </Accordion>
    </div>
    : null}
  </div>
  </div>
        </div>
      </div>
        <Footer />
    </>
  )
}
