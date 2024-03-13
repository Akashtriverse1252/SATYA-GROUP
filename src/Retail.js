import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Project01 from './images/The_hive_project.jpg'
import Homesbanner from './images/homes_banner.jpg'
import { Link } from 'react-router-dom'
import Project04 from './images/Element_one_project.jpg'
import Project14 from './images/city-center.jpg'

export const Retail = () => {
  return (
    <>
    <Header />
    <div className='banner'>
        <div className='bannerimg'>
            <img src={Homesbanner} />
        </div>
    </div>
    <div className='inprojects'>
        <div className='container'>
            <div className='row'>
                <div className='web-container'>
                    <div className='title' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                        <h2>RETAIL BY SATYA </h2>
                        <p>To meet the needs and convenience of locals, Satya has designed beautiful mixes of retail centres and spaces. Places strategically in high footfall locations, these high-street complexes and malls have developed themselves into major entertainment and food hubs. Its solid infrastructure, elegant design with state-of-art facilities makes it the perfect spot for retail, multiplexes and food brands to indulge in businesses. At Satya, we thrive for our clients to experience a smooth and hassle-free process while choosing a property. We will keep you updated on the construction progress and will be a constant guide throughout. </p>
                    </div>
                    
                    <div className='pprojectrow'>
                    <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                        <Link to='/the-hive-retail'>
                            <div className='pprojectimg'><img src={Project01} />
                                <div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>Sector 102, Gurugram</p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Commercial </p></li>
                                        <li><strong>STATUS</strong><p>Ongoing</p></li>
                                    </ul>
                                </div>
                            </div>
                        </Link>
                            <p>Retail at The Hive, <span>Gurugram.</span></p>
                        </div>
                        <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="350">
                        <Link to='/element-one-mall'>
                        <div className='pprojectimg'><img src={Project04} /><div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>Sector 47 & 49, Gurugram </p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Commercial </p></li>
                                        <li><strong>STATUS</strong><p>Ongoing</p></li>
                                    </ul>
                                </div></div>
                            <p>Element One Mall<span>Gurugram.</span></p>
                            </Link>
                        </div>
                        <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="350">
                        <Link to='/city-center'>
                        <div className='pprojectimg'><img src={Project14} /><div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>City Center, Bhatinda </p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Commercial Retail </p></li>
                                        <li><strong>STATUS</strong><p>Delivered</p></li>
                                    </ul>
                                </div></div>
                            <p>City Center, <span>Bhatinda.</span></p>
                            </Link>
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
