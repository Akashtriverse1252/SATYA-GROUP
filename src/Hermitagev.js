import React from 'react'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Slider from "react-slick";
import Locationpop from './Locationpop'
import Thehive from './images/the-hermitage-villas-banner.jpg'
import Hivelogo from './images/hermitage-logo.png'
import Amenities01 from './images/security.png'
import Amenities02 from './images/gated-complex.png'
import Amenities03 from './images/car-parking.png'
import Amenities04 from './images/power-backup.png'
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
import Amenities17 from './images/acres-land.png'
import Amenities18 from './images/gated-complex.png'
import Amenities19 from './images/clubhouse.png'
import Amenities20 from './images/lifestyle.png'
import Amenities21 from './images/garden.png'
import Amenities22 from './images/water.png'
import Amenities23 from './images/water-harvesting.png'
import Gallery01 from './images/hermitage-gallery01.jpg'
import Gallery02 from './images/hermitage-gallery02.jpg'
import Gallery03 from './images/hermitage-gallery03.jpg'
import Locationimg from './images/location.jpg'
import Plans from './images/floor-plan.pdf'
import background from './images/the-hermitage-villas-amenities_banner.jpg'
import { Link } from 'react-router-dom';

export const Hermitagev = () => {
    const Amenitiesbg ={
        backgroundImage: `url(${background})`        
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
                <li>The Hermitage Villas</li>
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
                            <h1 data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">Exquisite ready-to-move-in villas </h1>
                                <p data-aos="fade-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">Located at The Hermitage, a meticulously planned & integrated complex with over 300 families residing, is a collection of luxury 4 BHK + S villas spread over 8100 sq.ft. Complete with a spacious family and dining lounge, a splash pool on the terrace, a dedicated bar area and provision of a private in-built lift from the basement to the terrace, the villas at The Hermitage offer an opportunity to experience true luxury like never before. </p>
                            </div>
                            <div className='pprojecthighlights'>
                                <ul data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                                    <li ><strong>Status </strong><span>Ongoing</span></li>
                                    <li ><strong>Type  </strong><span>Residential </span></li>
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
            <h3 data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">the hermitage villas facilities</h3>
                <ul>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities01} /></span><p>Ample parking space </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities02} /></span><p>24 hour power backup </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities03} /></span><p>Multiple lawns</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="800" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities04} /></span><p>Fully equipped gym</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities06} /></span><p>Social Amenities</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities07} /></span><p>Grand Clubhouse</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities08} /></span><p>Amphitheatre </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities09} /></span><p>Jogging Trail  </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities10} /></span><p>Sports Amenities  </p></li>
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
            <h3 data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">the hermitage villas features</h3>
                <ul>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities17} /></span><p>Twin-level penthouses</p></li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities17} /></span><p>Spread over 10.2 acres of land </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities18} /></span><p>Gated complex with advanced security system</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities19} /></span><p>Grand clubhouse with unmatched amenities</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="800" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities20} /></span><p>Loaded with lifestyle conveniences and comfort </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="900" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities21} /></span><p>Green spaces with ample sitting areas </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities22} /></span><p>Water features  </p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities23} /></span><p>Rain water harvesting system</p></li>
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
