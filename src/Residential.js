import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Project02 from './images/Studio102_project.jpg'
import Project03 from './images/Merano_green_project.jpg'
import Project04 from './images/Element_one_project.jpg'
import Project05 from './images/hermitage_penthouse_project.jpg'
import Project06 from './images/The_hermitage_villas.jpg'
import Project08 from './images/Malwa-County.jpg'
import Project09 from './images/Malwa-Heights.jpg'
import Project10 from './images/Malwa-Jewels.jpg'
import Project12 from './images/the-legend-creative.jpg'
import Project13 from './images/nora.jpg'
import Project05a from './images/the-hermitage-small.jpg'
import { Link } from 'react-router-dom'

export const Residential = () => {
  return (
    <>
    <Header/>
    <div className="breadcrum">
        <div className='container'>
          <div className='row'>
            <div className='breadcumtab'>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li>Residential Projects</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
    <div className='inprojects'>
        <div className='container'>
            <div className='row'>
                <div className='web-container'>
                    <div className='title' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                        <h2>Residential Projects</h2>
                    </div>
                    <div className='pprojectrow'>
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
                                        <li><strong>PROPERTY TYPE</strong><p>Residential/ Commercial </p></li>
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
    <Footer/>
    </>
  )
}
