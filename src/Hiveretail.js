import React from 'react'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Slider from "react-slick";
import Locationpop from './Locationpop'
import Thehive from './images/The_hive_internal_image.png'
import Hivelogo from './images/The_hive_logo.png'
import Amenities01 from './images/security.png'
import Amenities02 from './images/power-backup.png'
import Amenities05 from './images/business-desk.png'
import Amenities06 from './images/car-parking.png'
import Gallery01 from './images/the-hive-gallery01.jpg'
import Gallery02 from './images/the-hive-gallery02.jpg'
import Gallery03 from './images/the-hive-gallery03.jpg'
import Locationimg from './images/location.jpg'
import Plans from './images/floor-plan.pdf'
import Brochure from './images/THE-HIVE-BROCHURE.pdf'
import { Link } from 'react-router-dom';

export const Hiveretail = () => {
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
                    <img src={Thehive} />
                </div>
                <div className='enquireform' data-aos="fade-right" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                    <div className='proenquire'>
                    <img src={Hivelogo} />
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
                <li>The Hive Retail </li>
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
                            <h1 data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">Discover the difference. Discover something new.</h1>
                                <p data-aos="fade-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">Part of the mega high-street development just off the Dwarka Expressway in Gurugram, Retail Complex at The Hive is a favourite for businesses, offering a mega highstreet retail spread over 6 acres. The 3 side - open plot is the perfect mix of retail, multiplex, food court and smart offices, surrounded by densely populated sectors of the city.</p>
                            </div>
                            <div className='pprojecthighlights'>
                                <ul data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                                    <li ><strong>Status </strong><span>Ongoing</span></li>
                                    <li ><strong>Type  </strong><span>Commercial</span></li>
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
        <div className='amenitiesrow'>
            <div className='row'>
                <div className='container'>
                    <div className='web-container'>                        
                <div className='amenitiesstn0'>
            <h3 data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">the hive business tower facilities</h3>
                <ul>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities01} /></span><p>24*7 security</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities02} /></span><p>100% power backup</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="900" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities05} /></span><p>Zero discharge building</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities06} /></span><p>Multi Level basement parking facility</p></li>
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
                                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><strong>Strategically</strong> located just off the NH Dwarka Expressway – India’s widest expressway connecting Dwarka, Gurugram and IGI Airport</li>
                                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><strong>15 min</strong> from IGI Airport & NH8.</li>
                                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><strong>Excellent</strong> connectivity with proposed metro</li>
                                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="800" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><strong>Surrounded</strong> by large number of residential townships and group housing</li>
                                </ul>
                                <Locationpop />
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
                                <li><Link to='/construction-updates-2021'><span>Construction Updates</span></Link></li>
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

