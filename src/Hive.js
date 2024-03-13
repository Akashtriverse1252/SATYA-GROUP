import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Project01 from './images/The_hive_project.jpg'
import Project02 from './images/Studio102_project.jpg'
import Project03 from './images/Merano_green_project.jpg'
import Project04 from './images/Element_one_project.jpg'
import Project05 from './images/hermitage_penthouse_project.jpg'
import Project06 from './images/The_hermitage_villas.jpg'
import Project07 from './images/Centrum-Plaza.jpg'
import Project08 from './images/Malwa-County.jpg'
import Project09 from './images/Malwa-Heights.jpg'
import Project10 from './images/Malwa-Jewels.jpg'
import Project11 from './images/The-Galaxy.jpg'
import Project12 from './images/the-legend-creative.jpg'
import Project13 from './images/nora.jpg'
import Project14 from './images/city-center.jpg'

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Link } from 'react-router-dom'

export const Hive = () => {
  return (
    <>
    <Header />
    <div className="breadcrum">
        <div className='container'>
          <div className='row'>
            <div className='breadcumtab'>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/our-projects'>Projects</Link></li>
                <li>The Hive</li>
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
                        <h2>The Hive</h2>
                    </div>
                  
                    <div className='pprojectrow'>
                    <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                            <Link to='/the-hive'>
                            <div className='pprojectimg'><img src={Project01} />
                                <div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>Sector 102, Gurugram</p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Retail</p></li>
                                        <li><strong>STATUS</strong><p>Ongoing</p></li>
                                    </ul>
                                </div>
                            </div>
                            <p>The Hive Retail, <span>Gurugram.</span></p>
                            </Link>
                        </div>
                        <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="300">
                            <Link to='/the-hive'>
                            <div className='pprojectimg'><img src={Project01} />
                                <div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>Sector 102, Gurugram</p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Offices</p></li>
                                        <li><strong>STATUS</strong><p>Ongoing</p></li>
                                    </ul>
                                </div>
                            </div>
                            <p>The Hive Offices, <span>Gurugram.</span></p>
                            </Link>
                        </div>
                        <div className='pprojectbox' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="350">
                        <Link to='/studio-102'>
                        <div className='pprojectimg'><img src={Project02} /><div className='projectinfo'>
                                    <ul>
                                        <li><strong>Location</strong><p>Sector 102, Gurugram</p></li>
                                        <li><strong>PROPERTY TYPE</strong><p>Studio & Apartments</p></li>
                                        <li><strong>STATUS</strong><p>Ongoing</p></li>
                                    </ul>
                                </div></div>
                            <p>The Hive Studio 102, <span>Gurugram.</span></p>
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
