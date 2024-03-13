import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import { Footer } from './components/Footer'
import Header from './components/Header'
import { Numbers } from './components/Numbers'
import Aboutusbanner from './images/about_satya.jpg'
import Ethosimg from './images/our_ethos.jpg'
import Jounery7080 from './images/70_80.jpg'
import Jounery90 from './images/90.jpg'
import Jounery2021 from './images/Jounery2021.jpg'
import Jounery2010 from './images/Jounery2010.jpg'
import Jounery2000 from './images/Jounery2000.jpg'
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

export const Aboutus = () => {
  const [pagedata, setPagedata] = useState([]);
useEffect(() => {
    let mounted = true;
    const loadData = async () => {
       const response = await axios.get('https://www.satyagroups.in/api/about.php');
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
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    speed: 600,
    autoplaySpeed:5000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
  return (
    <>
      <Header />
      <div className='banner'>
        <div className='bannerimg'>
        <img src={pagedata.aboutus.banner} />
        </div>
    </div>
    <div className="breadcrum">
        <div className='container'>
          <div className='row'>
            <div className='breadcumtab'>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li>About Satya</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
          <div className='aboutus'>
            <div className='container'>
              <div className='row'>
                <div className='web-container'>
                  <div className='title' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                    <h2>About us</h2>
                  </div>
                    <div className='delivering'>
                      <h1 data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">{pagedata.aboutus.title}</h1>
                      <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000" dangerouslySetInnerHTML={createMarkup(pagedata.aboutus.ldesc)}/>
                    </div>
                  </div>
              </div>
            </div>
          </div>                
          <Numbers contact = {pagedata.aboutus}/>   
          <div className='ourethos' id='ourethos'>
              <div className='container'>
                <div className='row'>
                  <div className='web-container'>
                    <div className='title' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                      <h2>Our Ethos</h2>
                    </div>
                    <div className='ourethosrow d-flex justify-content-between'>
                      <div className='ourethosimg' data-aos="fade-left" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                        <img src={pagedata.aboutus.ethos_pic} />
                      </div>
                      <div className='ourthoscont' data-aos="fade-right" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                        <div className='ethoscontrow'>
                          <h2>Vision</h2>
                          <ul dangerouslySetInnerHTML={createMarkup(pagedata.aboutus.ethos_v_desc)}>
                          </ul>
                        </div>
                        <div className='ethoscontrow'>
                          <h2>MISSION</h2>
                          <ul dangerouslySetInnerHTML={createMarkup(pagedata.aboutus.ethos_m_desc)}>
                          </ul>
                        </div>
                        <div className='ethoscontrow'>
                          <h2>VALUES</h2>
                          <ul>
                          <li><strong>{pagedata.aboutus.ethos_val_title1}</strong><p>{pagedata.aboutus.ethos_val_desc1}</p></li>
                          <li><strong>{pagedata.aboutus.ethos_val_title2}</strong><p>{pagedata.aboutus.ethos_val_desc2}</p></li>
                          <li><strong>{pagedata.aboutus.ethos_val_title3}</strong><p>{pagedata.aboutus.ethos_val_desc3}</p></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
            <div className='journey'>
            <div className='container'>
              <div className='row'>
                <div className='web-container'>
                  <div className='title'>
                    <h2 data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">Our journey</h2>
                  </div>
                  <div className='journeryslider' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
            <Slider {...settings}>
              
        <div>
          <div className='journeyrow d-flex justify-content-between'>
            <div className='journeyimg'>
              <img src={Jounery2021} />
            </div>
            <div className='journeycont'>
                <h3>2020s <span>Introducing the first-ever plotted development in Gurugram</span></h3>
               <p>Satya Group comes up with its first plotted development – Satya Merano Greens, in Sector-99A, Gurugram. </p>
               <p>The project, which is being developed under the Deen Dayal Jan Awas Yojna, consists of optimum sized plots complete with world-class facilities, an exclusive club house, and a shopping complex for a comfortable, convenient lifestyle. </p>
            </div>
          </div>
        </div>
        <div>
          <div className='journeyrow d-flex justify-content-between'>
            <div className='journeyimg'>
              <img src={Jounery2010} />
            </div>
            <div className='journeycont'>
                <h3>2010s <span>Strengthening trust by delivering independent projects</span></h3>
               <p>The journey continues with the development of modern housing complexes, commercial towers, high street destinations and shopping malls in Gurugram, Indore and Bhatinda. </p>
               <p>Satya Group becomes all set to step into the new decade, having obtained some of the most enviable delivery credentials a real estate brand can have. </p>
            </div>
          </div>
        </div>
        <div>
          <div className='journeyrow d-flex justify-content-between'>
            <div className='journeyimg'>
              <img src={Jounery2000} />
            </div>
            <div className='journeycont'>
                <h3>2000s <span>Satya makes its mark by delivering new-age projects</span></h3>
               <p>In a decade of growth and consolidation, the promoters of Satya ventured into modern real estate spaces with The Galaxy Hotel, The Legend and Luxury Residential, all in Gurugram, & Malwa County in Indore. </p>
                <p>To secure growth prospects for the future as well, Satya identified land banks at strategic locations across Delhi NCR and initiated tie-ups with renowned architects. The group also unveiled a new brand identity and established a professional organisation structure. </p>
            </div>
          </div>
        </div>
        
        <div>
          <div className='journeyrow d-flex justify-content-between'>
            <div className='journeyimg'>
              <img src={Jounery90} />
            </div>
            <div className='journeycont'>
                <h3>90s <span>The Road Map into the future</span></h3>
               <p>As India moved forward with liberalization, the demand for organized real estate started growing with it. Satya, with its years of experience, was well placed and poised to create a name for itself in the real estate sector. With a sharp focus on innovation and technology, a roadmap of stepping into the new millennium was prepared and put into execution. </p>
            </div>
          </div>
        </div>
        <div>
          <div className='journeyrow d-flex justify-content-between'>
            <div className='journeyimg'>
              <img src={Jounery7080} />
            </div>
            <div className='journeycont'>
                <h3>70s & 80s <span>The Foundation Years</span></h3>
                <p>The legacy of Satya began in 1973 in the sprawling city of Kolkata, with the development of various residential and commercial complexes. </p>
                <p>By the 80s, Satya had already made its entry into the country’s capital city, for the development for residential housing.</p>
            </div>
          </div>
        </div>
    </Slider>
    </div>
    </div>
              </div>
            </div>
    </div>
    <div className='differencesatya'>
        <div className='container'>
          <div className='row'>
            <div className='web-container'>
            <div className='title' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
              <h2>THE DIFFERENCE IS SATYA </h2>
            </div>
           
            </div>
          </div>
        </div>
        <div className='differencesatyarow'>
        <div className='container'>
          <div className='row'>
            <div className='web-container'>
            <div className='difference'>
            <ol>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="300" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span>1</span><p dangerouslySetInnerHTML={createMarkup(pagedata.aboutus.diff1)}></p></li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="400" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span>2</span><p dangerouslySetInnerHTML={createMarkup(pagedata.aboutus.diff2)}></p></li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span>3</span><p dangerouslySetInnerHTML={createMarkup(pagedata.aboutus.diff3)}></p></li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span>4</span><p dangerouslySetInnerHTML={createMarkup(pagedata.aboutus.diff4)}></p></li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span>5</span><p dangerouslySetInnerHTML={createMarkup(pagedata.aboutus.diff5)}></p></li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="800" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span>6</span><p dangerouslySetInnerHTML={createMarkup(pagedata.aboutus.diff6)}></p></li>
              </ol>
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
