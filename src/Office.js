import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Project01 from './images/The_hive_project.jpg'
import Project11 from './images/The-Galaxy.jpg'
import Project02 from './images/Studio102_project.jpg'
import Homesbanner from './images/offices-cat-banner.jpg'
import Project04 from './images/Element_one_project.jpg'
import Project07 from './images/Centrum-Plaza.jpg'
import { Link } from 'react-router-dom'

export const Office = () => {
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
                        <h2>OFFICES BY SATYA</h2>
                        <p>Our Office spaces are designed with cutting-edge technology making them perfect to take your business to new heights. Their luxurious infrastructure and untapped quality in high-demand locations grab instant attention and valuable exposure, building a solid frame of India's vibrant future. Your everyday business and staff needs are taken care of, with multiple amenities provided by us. Buying an office space with Satya becomes an extremely smooth process with the help of our CRM team. We will keep you updated on the construction progress and guide you throughout to introduce you to your new property. </p>
                    </div>
                    
                    <div className='pprojectrow'>
                    <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                            <Link to='/the-hive-office-spaces'>
                            <div className='pprojectimg'><img src={Project01} />
                                <div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>Sector 102, Gurugram</p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Commercial </p></li>
                                        <li><strong>STATUS</strong><p>Ongoing</p></li>
                                    </ul>
                                </div>
                            </div>
                            <p>Office Spaces at The Hive, <span>Gurugram.</span></p>
                            </Link>
                        </div>
                      
                        <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="350">
                        <Link to='/studio-102'>
                        <div className='pprojectimg'><img src={Project02} /><div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>Sector 102, Gurugram</p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Residential/Commercial </p></li>
                                        <li><strong>STATUS</strong><p>Ongoing</p></li>
                                    </ul>
                                </div></div>
                            <p>Studio 102 at The Hive, <span>Gurugram.</span></p>
                            </Link>
                        </div>
                        <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="350">
                    <Link to='/element-one-regenta-suites'>
                        <div className='pprojectimg'><img src={Project04} /><div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>Sector 47 & 49, Gurugram </p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Hospitality </p></li>
                                        <li><strong>STATUS</strong><p>Ongoing</p></li>
                                    </ul>
                                </div></div>
                            <p>Regenta Suites at Element One<span>Gurugram.</span></p>
                            
                            </Link>
                        </div>
                        <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                            <Link to='/centrum-plaza'>
                            <div className='pprojectimg'><img src={Project07} /><div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>Sector 53, Gurugram</p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Commercial</p></li>
                                        <li><strong>STATUS</strong><p>Delivered</p></li>
                                    </ul>
                                </div></div>
                            <p>Centrum Plaza, <span>Gurugram.</span></p>
                            </Link>
                        </div>
                        <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="350">
                        <Link to='/the-galaxy'>
                        <div className='pprojectimg'><img src={Project11} /><div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>Sector 15, NH-8. Gurugram</p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Commercial</p></li>
                                        <li><strong>STATUS</strong><p>Delivered</p></li>
                                    </ul>
                                </div></div>
                            <p>The Galaxy<span>Gurugram.</span></p>
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
