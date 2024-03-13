import React, {useState, useEffect} from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import { Accordion, AccordionItem } from 'react-light-accordion';
import Careerbanner from './images/career.jpg'
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Career = () => {

  const [pagedata, setPagedata] = useState([]);
  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
       const response = await axios.get('https://www.satyagroups.in/api/career.php');
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
        <img src={pagedata.aboutus.crbanner} />
        </div>
    </div>
    
    <div className="breadcrum">
        <div className='container'>
          <div className='row'>
            <div className='breadcumtab'>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li>Career</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
      <div className='nricorner bg-white'>
        <div className='container'>
          <div className='row'>
            <div className='web-container'>
            <div className='title' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="100">
                <h2>Career</h2>
              </div>
                
                
              {pagedata.career?
              <div>
              {pagedata.career.map(careerdesc =>{
                return <div>
                  <h3 data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="100">{careerdesc.heading}</h3>
                  <div dangerouslySetInnerHTML={{__html: careerdesc.description}}></div>
                </div>
              })
              }
              </div>
            :null }

              </div>
          </div>
        </div>
      </div>
      {pagedata.careerjobs ?
      <div className='nriaccordian'>
      <div className='container'>
        <div className='web-container'>
        <div className='title' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="100">
              <h2>CURRENT OPENING</h2>
            </div>
      <div>
        <div className='currentopening' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="100">
  <Accordion atomic={true}>
    {pagedata.careerjobs.map(jobs => {
return <AccordionItem title={jobs.title}>
<div className='nricont'>
<ul>
                        <li><i class="fa fa-suitcase"></i><span>{jobs.description}</span></li>
                        <li><i class="fa fa-map-marker"></i><span>{jobs.location}</span></li>
                      </ul>
                      <p>Please send your updated resume, mentioning your current CTC, expected salary and notice period to <a href="mailto:hr@satyagroups.in">hr@satyagroups.in</a></p>
</div>
</AccordionItem>
    })
    }

    
  </Accordion>
  </div>
</div>
</div>
      </div>
    </div>
      : null}
    <Footer />
    </>
  )
}
