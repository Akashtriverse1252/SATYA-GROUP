import React from 'react'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Slider from "react-slick";
import Locationpop from './Locationpop'
import Thehive from './images/the-hermitage-banner.jpg'
import Hivelogo from './images/hermitage-logo.png'
import Amenities01 from './images/swimming.png'
import Amenities02 from './images/gym.png'
import Amenities03 from './images/pool-side-party-lawn.png'
import Amenities04 from './images/kids-play-zone.png'
import Amenities05 from './images/jogging-track.png'
import Amenities06 from './images/badminton-court.png'
import Amenities07 from './images/health.png'
import Amenities08 from './images/energy-homes.png'
import Amenities09 from './images/power-backup.png'
import Amenities10 from './images/water-harvesting.png'
import Amenities11 from './images/solar-panel.png'
import Amenities12 from './images/led-lights.png'
import Gallery01 from './images/hermitage-gallery01.jpg'
import Gallery02 from './images/hermitage-gallery02.jpg'
import Gallery03 from './images/hermitage-gallery03.jpg'
import Locationimg from './images/location.jpg'
import background from './images/the-hermitage-penthouse-amenities_banner.jpg'
import { Link } from 'react-router-dom';

export const Thehermitage = () => {
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
                <li>The Hermitage</li>
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
                            <h1 data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">Build a quality life. Move into luxury.</h1>
                            <h3>Only 3 remaining units available!</h3>
                                <p data-aos="fade-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                                Spread across 10.2 acres of land, The Hermitage is a meticulously planned, integrated complex offering state-of-the-art amenities and features for its residents.  This residential square caters to ample green spaces throughout the development and inculcates a sense of belonging and community through social activities such as cultural events and festival celebrations.  Inspired by new-age straight line architecture and uncompromising quality, there is no fear of delay with our ready to move- in 3BHK and 4 BHK apartments and premium 4 BHK and 5 BHK penthouses  that comes with ample natural lighting, private gardens & private pools, offering the finest in luxury living.</p>
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
            <h3 data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">the hermitage facilities</h3>
                <ul>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities01} /></span><p>Swimming Pool</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities02} /></span><p>Fully equipped gym</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities03} /></span><p>Party Lawn</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="800" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities04} /></span><p>Open kids play area</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="900" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities05} /></span><p>Jogging track</p></li>                    
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities06} /></span><p>Badminton Court</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities07} /></span><p>Yoga and Meditation</p></li>
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
            <h3 data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">the hermitage features</h3>
                <ul>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities08} /></span><p>Energy efficient homes</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities09} /></span><p>Power backup</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities10} /></span><p>Rain Water Harvesting</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="800" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities11} /></span><p>Solar Panels</p></li>
                    <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="900" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300"><span><img src={Amenities12} /></span><p>100% LED lights</p></li>
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
