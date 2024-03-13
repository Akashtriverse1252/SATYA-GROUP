import React from 'react'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Slider from "react-slick";
import Banner from './images/The_studio-102_internal_image.jpg'
import Logo from './images/studio-102.png'
import Amenities01 from './images/desk.png'
import Amenities02 from './images/business-desk.png'
import Amenities03 from './images/gym.png'
import Amenities04 from './images/health.png'
import Amenities05 from './images/broadband.png'
import Amenities06 from './images/security.png'
import Amenities07 from './images/power-backup.png'
import Amenities08 from './images/multi-level-parking.png'
import Gallery01 from './images/gal01.jpg'
import Gallery02 from './images/gal02.jpg'
import Gallery03 from './images/gal03.jpg'
import Gallery04 from './images/gal04.jpg'
import Gallery05 from './images/gal05.jpg'
import Locationimg from './images/element-one-location.jpg'
import Plans from './images/studio-102-Floor-Plan.pdf'
import SPlans from './images/Studio-102-site-plan.pdf'
import Brochure from './images/THE-HIVE-BROCHURE.pdf'
import background from "./images/the-studio-102-amenities-banner.jpg";
import { Link } from 'react-router-dom';
import Locationpop2 from './Locationpop2';

export const Studio = () => {
    const Amenitiesbg = {
        backgroundImage: `url(${background})`
      };
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
        <div className='project_head'>
            <div className='projectrow justify-content-between'>
                <div className='projectbanner' data-aos="fade-left" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                    <img src={Banner} />
                </div>
                <div className='enquireform' data-aos="fade-right" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                    <div className='proenquire'>
                    <img src={Logo} />
                        <h2>Register your interest</h2>
                <ul className='form d-flex flex-wrap justify-content-between'>
                  <li><input type='text' placeholder='Name*' name='name' required/></li>
                  <li><input type='tel' placeholder='Mobile No*' name='mobile' required/></li>        
                  <li><input type='submit' value='submit' className='btnfill button-2'/></li>
                </ul>
                <p>HRERA(Reg.) 388 of 2017 Dated 19.12.2017</p>
                </div>
                </div>
            </div>
        </div>
        <div className="breadcrum">
        <div className='container'>
          <div className='row'>
            <div className='breadcumtab'>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/our-projects'>Our Projects</Link></li>
                <li>Studio 102</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
        <div className='overview'>
            <div className='container'>
                <div className='row'>
                    <div className='web-container'>
                            <div className='title' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                                <h2>OVERVIEW</h2>
                            </div>
                            <div className='overviewrow'>
                            <div className='projectcont'>
                            <h1 data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">Self-use serviced apartments designed for both home & office use </h1>
                                <p data-aos="fade-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">Part of a mega high-street development just off the Dwarka Expressway in Gurugram, Studio 102 at The Hive offers carefully curated self-use 1 BHK serviced apartments for discerning travelers, medical professionals and corporate executives. Offering a great deal of flexibility in terms of usage, they are designed to complement your modern, comfortable and luxurious lifestyle needs. </p>
                            </div>
                            <div className='pprojecthighlights'>
                                <ul data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                                    <li ><strong>Status </strong><span>Ongoing </span></li>
                                    <li ><strong>Type  </strong><span>Residential/Commercial </span></li>
                                    <li ><strong>Location   </strong><span>Sector 102, Gurugram</span></li>
                                </ul>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='amenities'>
            <div className='container'>
                <div className='row'>
                    <div className='web-container'>
                    <div className='title' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                            <h2>Amenities</h2>
                        </div>
                    </div>
                </div>
            </div>
        <div className='amenitiesrow' style={Amenitiesbg}>
            <div className='row'>
                <div className='container'>
                    <div className='web-container'>                        
                <div className='amenitiesstn0'>
            <h3 data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">studio 102 (the hive) facilities</h3>
                <ul>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities01} /></span><p>Concierge Desk </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities02} /></span><p>Business Center  </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities03} /></span><p>Gym </p></li>
                    {/* <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="800" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities04} /></span><p>Health Zone </p></li> */}
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="900" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities05} /></span><p>Broadband Connectivity </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="900" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities06} /></span><p>24x7 Security </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="900" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities07} /></span><p>100% Power Backup </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="900" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities08} /></span><p>Multi-Level Parking</p></li>
                </ul>
            </div>            
            </div>
                </div>
            </div>
        </div>
        </div>
        <div className='gallery'>
            <div className='container'>
                <div className='row'>
                    <div className='web-container'>
                        <div className='title' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                            <h2>Gallery</h2>
                        </div>
                        <div className='gslider' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                        <Slider {...settings}>
            <div>
                <div className='galleryimg'>
                    <img src={Gallery01} />
                </div>
        </div>
        <div>
        <div className='galleryimg'>
                    <img src={Gallery02} />
                </div>
        </div>
        <div>
        <div className='galleryimg'>
                    <img src={Gallery03} />
                </div>
        </div>
        <div>
        <div className='galleryimg'>
                    <img src={Gallery04} />
                </div>
        </div>
        <div>
        <div className='galleryimg'>
                    <img src={Gallery05} />
                </div>
        </div>
    </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='location'>
            <div className='container'>
                <div className='row'>
                    <div className='web-container'>
                        <div className='title' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                            <h2>Location</h2>
                            <p>The Studio 102 premium self-use service apartments are located at The Hive in Sector 102, Gurugram. One of the most popular and emerging destinations in the city, it is located just off the NH Dwarka Expressway.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='locationbanner'>
                <div className='container'>
                    <div className='row'>
                        <div className='web-container'>
                            <div className='locationrow'>
                                <div className='locationimg'>
                                    <img src={Locationimg} />
                                </div>
                                <div className='locationcont'>
                                <ul>
                                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><strong>Located</strong> just off the NH Dwarka Expressway, connecting Dwarka, Gurugram and IGI Airport</li>
                                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><strong>20 mins</strong> drive from IGI Airport </li>
                                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><strong>Leading </strong>schools, colleges and hospitals in close vicinity </li>
                                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><strong>Surrounded </strong> by large number of premium residences and group housings</li>
                                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><strong>1 BHK Serviced </strong>Apartments starting at Rs. 55 Lakhs* </li>
                                </ul>
                                <Locationpop2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='download'>
            <div className='container'>
                <div className='row'>
                    <div className='web-container'>
                        <div className='title' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                            <h2>Download</h2>
                        </div>
                        <div className='highlightbtn'>
                            <ul data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                                <li><a href={Brochure} target="_blank"><span>Brochure</span></a></li>
                                <li><a href={Plans} target="_blank"><span>Floor Plans</span></a></li>
                                <li><a href={SPlans} target="_blank"><span>Site Plan</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
