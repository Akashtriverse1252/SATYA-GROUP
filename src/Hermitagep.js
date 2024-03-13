import React from 'react'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Slider from "react-slick";
import Locationpop from './Locationpop'
import Thehive from './images/penthouse-the-hermitage.jpg'
import Hivelogo from './images/hermitage-logo.png'
import Amenities01 from './images/security.png'
import Amenities02 from './images/gated-complex.png'
import Amenities03 from './images/car-parking.png'
import Amenities04 from './images/power-backup.png'
import Amenities05 from './images/lawn.png'
import Amenities06 from './images/social-amenities.png'
import Amenities07 from './images/clubhouse.png'
import Amenities08 from './images/amphitheatre.png'
import Amenities09 from './images/jogging-track.png'
import Amenities10 from './images/sports.png'
import Amenities11 from './images/swimming.png'
import Amenities12 from './images/table-tennis.png'
import Amenities13 from './images/health.png'
import Amenities14 from './images/badminton-court.png'
import Amenities15 from './images/basketball-court.png'
import Amenities16 from './images/kids-play-zone.png'
import Amenities17 from './images/twin-level-penthouse.png'
import Amenities18 from './images/air-conditioner.png'
import Amenities19 from './images/home-appliances.png'
import Amenities20 from './images/garden.png'
import Amenities21 from './images/family.png'
import Amenities22 from './images/master-bedroom.png'
import Amenities23 from './images/modular-kitchen.png'
import Amenities24 from './images/quality.png'
import Gallery01 from './images/hermitage-gallery01.jpg'
import Gallery02 from './images/hermitage-gallery02.jpg'
import Gallery03 from './images/hermitage-gallery03.jpg'
import Locationimg from './images/location.jpg'
import background from './images/the-hermitage-penthouse-amenities_banner.jpg'
import Plans from './images/floor-plan.pdf'
import { Link } from 'react-router-dom';

export const Hermitagep = () => {
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
                <li>The Hermitage Penthouses</li>
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
                            <h1 data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">Penthouses beyond luxury. <br/>Well within budget. </h1>
                            <h3>Only 3 remaining units available!</h3>
                                <p data-aos="fade-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">Spread across 10.2 acres of land, The Hermitage is a meticulously planned, integrated complex offering state-of-the-art amenities and features for its residents. Inspired by new-age straight line architecture, the premium 4BHK and 5 BHK penthouses come with ample natural lighting, private gardens & private pools, offering the finest in luxury living. </p>
                            </div>
                            <div className='pprojecthighlights'>
                                <ul data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                                    <li ><strong>Status </strong><span>Ongoing</span></li>
                                    <li ><strong>Type  </strong><span>Residential </span></li>
                                    <li ><strong>Location   </strong><span>Sector 103, Gurugram</span></li>
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
            <h3 data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">the hermitage penthouse facilities</h3>
                <ul>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities01} /></span><p>24x7 security system</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities02} /></span><p>Gated complex </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities03} /></span><p>Ample parking space </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="800" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities04} /></span><p>24 hour power backup </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="900" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities05} /></span><p>Multiple lawns</p></li>
                    
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities07} /></span><p>Grand Clubhouse</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities08} /></span><p>Amphitheatre </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities09} /></span><p>Jogging Trail  </p></li>
                    
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities11} /></span><p>Swimming pool </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities12} /></span><p>Tennis court  </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities13} /></span><p>Yoga </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities14} /></span><p>Badminton  </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities15} /></span><p>Half Basketball Court </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities16} /></span><p>Kids play area </p></li>
                </ul>
            </div>       
            </div>
                </div>
            </div>
        </div>
        <div className='amenitiesrowfeatures'>
        <div className='row'>
                <div className='container'>
                    <div className='web-container'>   
        <div className='amenitiesstn0'>
            <h3 data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">the hermitage penthouse features</h3>
                <ul>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities17} /></span><p>Twin-level penthouses</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities18} /></span><p>Furnished and Air Conditioned homes</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities19} /></span><p>Electronic home appliances included</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="800" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities20} /></span><p>Double terrace garden with splash pool </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="900" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities21} /></span><p>Spacious family and dining lounge </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities22} /></span><p>Laminated wooden flooring in master bedrooms </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities23} /></span><p>Modular kitchen </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities24} /></span><p>Premium quality specifications </p></li>
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
                                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><strong>Located</strong> just off the Dwarka Expressway</li>
                                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><strong>15 min</strong> away from IGI Airport</li>
                                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><strong>10 min</strong> drive from Palam Vihar & Gurugram Railway Station </li>
                                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="800" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><strong>Approx.</strong> 20 minutes drive from Huda City Centre </li>
                                </ul>
                                <Locationpop />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className='download'>
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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <Footer />
    </>
  )
}
