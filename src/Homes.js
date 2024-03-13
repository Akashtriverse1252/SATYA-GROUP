import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Project05a from './images/the-hermitage-small.jpg'
import Project03 from './images/Merano_green_project.jpg'
import Project04 from './images/Element_one_project.jpg'
import Project08 from './images/Malwa-County.jpg'
import Project09 from './images/Malwa-Heights.jpg'
import Project10 from './images/Malwa-Jewels.jpg'
import Project06 from './images/The_hermitage_villas.jpg'
import Homesbanner from './images/homes_banner.jpg'
import Project13 from './images/nora.jpg'
import Project12 from './images/the-legend-creative.jpg'
import { Link } from 'react-router-dom'

export const Homes = () => {
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
                        <h2>HOMES BY SATYA</h2>
                        <p>We design and deliver highly functional homes. Each space is thoughtfully planned and crafted with quality material. We take a personalized approach to customer care, providing you with the highest level of service through every stage of your property purchase. When you purchase land, a home or apartment from Satya, you will have the support of our CRM Team, making the handover of your property as smooth as possible. We will keep you updated on the construction progress, assist you with the settlement process and introduce you to your new property.</p>
                    </div>
                    
                    <div className='pprojectrow'>
                 
                        <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="450">
                        <Link to='/merano-greens'>
                        <div className='pprojectimg'><img src={Project03} /><div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>Sector 99A, Gurugram</p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Residential </p></li>
                                        <li><strong>STATUS</strong><p>Ongoing</p></li>
                                    </ul>
                                </div></div>
                            <p>Merano Greens,<span>Gurugram.</span></p>
                            </Link>
                        </div>
                        <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="350">
                        <Link to='/element-one-serviced-apartment'>
                        <div className='pprojectimg'><img src={Project04} /><div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>Sector 47 & 49, Gurugram </p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Residential </p></li>
                                        <li><strong>STATUS</strong><p>Ongoing</p></li>
                                    </ul>
                                </div></div>
                            <p>Serviced Apartments at Element One<span>Gurugram.</span></p>
                            </Link>
                        </div>   
                        <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="400">
                            <Link to='/the-hermitage'>
                        <div className='pprojectimg'><img src={Project05a} /><div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>Sector 103, Gurugram</p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Residential</p></li>
                                        <li><strong>STATUS</strong><p>Ongoing</p></li>
                                    </ul>
                                </div></div>
                            <p>The Hermitage<span>Gurugram.</span></p>
                            </Link>
                        </div>
                        <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="450">
                       <Link to='/the-hermitage-villas'>
                        <div className='pprojectimg'><img src={Project06} /><div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>Sector 103, Gurugram </p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Residential </p></li>
                                        <li><strong>STATUS</strong><p>Ongoing</p></li>
                                    </ul>
                                </div></div>
                            <p>Villas at The Hermitage<span>Gurugram.</span></p>
                            </Link>
                        </div>
                        <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="350">
                        <Link to='/nora'>
                        <div className='pprojectimg'><img src={Project13} /><div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>Sector 103, Gurugram </p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Residential  </p></li>
                                        <li><strong>STATUS</strong><p>Ongoing </p></li>
                                    </ul>
                                </div></div>
                            <p>Nora, <span>Gurugram.</span></p>
                            </Link>
                        </div>
                        <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="350">
                        <Link to='/malwa-county'>
                        <div className='pprojectimg'><img src={Project08} /><div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>Bypass Road, Indore</p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Residential</p></li>
                                        <li><strong>STATUS</strong><p>Delivered</p></li>
                                    </ul>
                                </div></div>
                            <p>Malwa County, <span>Indore.</span></p>
                            </Link>
                        </div>
                        <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="400">
                        <Link to='/malwa-heights'>
                        <div className='pprojectimg'><img src={Project09} /><div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>AB Bypass Road, Indore</p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Residential</p></li>
                                        <li><strong>STATUS</strong><p>Delivered</p></li>
                                    </ul>
                                </div></div>
                            <p>Malwa Heights, <span>Indore.</span></p>
                            </Link>
                        </div>
                        <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="350">
                        <Link to='/malwa-jewels'>
                        <div className='pprojectimg'><img src={Project10} /><div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>AB Bypass Road, Indore</p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Residential</p></li>
                                        <li><strong>STATUS</strong><p>Delivered</p></li>
                                    </ul>
                                </div></div>
                            <p>Malwa Jewels<span>Indore.</span></p>
                            </Link>
                        </div>
                        <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="350">
                        <Link to='/the-legend'>
                        <div className='pprojectimg'><img src={Project12} /><div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>Sector 57, Gurugram</p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Residential </p></li>
                                        <li><strong>STATUS</strong><p>Delivered</p></li>
                                    </ul>
                                </div></div>
                            <p>The Legend, <span>Gurugram.</span></p>
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
