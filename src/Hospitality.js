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

export const Hospitality = () => {
  return (
    <>
    <Header/>
    <div className="breadcrum">
        <div className='container'>
          <div className='row'>
            <div className='breadcumtab'>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li>Hospitality Projects</li>
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
                        <h2>Hospitality Projects</h2>
                    </div>
                    <div className='pprojectrow'>
                    
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
                    </div>                    
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

