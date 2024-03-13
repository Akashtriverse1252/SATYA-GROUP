import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Project01 from './images/The_hive_project.jpg'
import Project02 from './images/Studio102_project.jpg'
import Project04 from './images/Element_one_project.jpg'
import Project07 from './images/Centrum-Plaza.jpg'
import Project11 from './images/The-Galaxy.jpg'
import Project14 from './images/city-center.jpg'
import { Link } from 'react-router-dom'

export const Commercial = () => {
  return (
    <>
    <Header/>
    <div className="breadcrum">
        <div className='container'>
          <div className='row'>
            <div className='breadcumtab'>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li>Commercial Projects</li>
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
                        <h2>Commercial Projects</h2>
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
    <Footer/>
    </>
  )
}
