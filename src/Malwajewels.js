import React from 'react'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Slider from "react-slick";
import Locationpop from './Locationpop'
import Banner from './images/Malwa-Jewels-banner.jpg'
import Logo from './images/Malwa-Jewels-logo.png'
import Amenities01 from './images/gated-complex.png'
import Amenities02 from './images/power-backup.png'
import Amenities03 from './images/clubhouse.png'
import Amenities04 from './images/business-desk.png'
import Amenities05 from './images/swimming.png'
import Amenities06 from './images/tennis-lawn.png'
import Amenities07 from './images/squash-court.png'
import Amenities08 from './images/gym.png'
import Amenities09 from './images/jogging-track.png'
import Amenities10 from './images/badminton-court.png'
import Gallery01 from './images/Malwa-Jewels-gallery01.jpg'
import Gallery02 from './images/Malwa-Jewels-gallery02.jpg'
import Gallery03 from './images/Malwa-Jewels-gallery01.jpg'
import Gallery04 from './images/Malwa-Jewels-gallery02.jpg'
import Gallery05 from './images/Malwa-Jewels-gallery01.jpg'
import Gallery06 from './images/Malwa-Jewels-gallery02.jpg'
import Gallery07 from './images/Malwa-Jewels-gallery01.jpg'
import Locationimg from './images/malwa-jewels-location.jpg'
import Plans from './images/floor-plan.pdf'
import { Link } from 'react-router-dom';

export const Malwajewels = () => {
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
                <li>Malwa Jewels</li>
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
                            <h1 data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">Villas of extraordinary luxury </h1>
                                <p data-aos="fade-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                                Part of Malwa County, a 100 acre township, Malwa Jewels is a collection of luxury villas, complete with lush green gardens, beautiful parks and a well-planned community. </p>
                            </div>
                            <div className='pprojecthighlights'>
                                <ul data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                                    <li ><strong>Status </strong><span>Delivered</span></li>
                                    <li ><strong>Type  </strong><span>Residential</span></li>
                                    <li ><strong>Location   </strong><span>AB Bypass Road, Indore</span></li>
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
            <h3 data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">malwa jewels facilities</h3>
                <ul>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities01} /></span><p>Gated complex </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities02} /></span><p>24 hour power backup </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities03} /></span><p>Clubhouse </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="800" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities04} /></span><p>Community center  </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="900" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities05} /></span><p>Swimming pool</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="900" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities06} /></span><p>Tennis lawn </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="900" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities07} /></span><p>Squash court</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="900" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities08} /></span><p>Modern gymnasium</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="900" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities09} /></span><p>Jogging trail </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="900" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities10} /></span><p>Badminton court </p></li>
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
        <div>
        <div className='galleryimg'>
                    <img src={Gallery06} />
                </div>
        </div>
        <div>
        <div className='galleryimg'>
                    <img src={Gallery07} />
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
                                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><strong>Strategically</strong>  located on AB Bypass Road, Indore</li>
                                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><strong>Convenient </strong> connectivity to major landmarks in Indore</li>
                                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><strong>Proposed</strong>  metro station nearby at Central Point </li>
                                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="800" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><strong>Dewas</strong> Naka bus route extended up to Central Point</li>
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
                                <li><span>Brochure</span></li>
                                <li><a href={Plans} target="_blank"><span>Floor Plans</span></a></li>
                                <li><Link to='/construction-updates'><span>Construction Updates</span></Link></li>
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
