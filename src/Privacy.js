import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'

export const Privacy = () => {
  return (
    <>
        <Header />
        <section>
            <div className='container'>
                <div className='web-container'>
                    <div className='title' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="100">
                        <h2>Privacy policy</h2>
                    </div>
                    <div className='webcontent' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="100">
                        <p>In our endeavour and commitment of protecting your personal information, we have designed a comprehensive privacy policy. This is to keep your interests and information safe on our website.</p>
                        <p>This privacy policy is subject to undergo change and review without any prior notice or approval.</p>
                        <p>By utilizing our website, you consent to agree to the standards spread out by us . Now and again, while you visit our website, you will not have to share any personal information. However, in specific occasions, we should have your personal information to concede your access to a portion of the weblinks or sites. Such links/pages may request your name, email address, telephone number and so forth. The data shared by you is utilized to give pertinent product and services and to recognize receipt of your correspondence or to convey data and updates to you. You have choice of mentioning expulsion from our mailing list. We don’tshare your data to any 3rd party.</p>
                        <p className='m-0'><strong>Security:</strong></p>
                        <p>To make sure your information security while sharing sensitive data, every one of the progressing transmissions among customer and employee(s) are encrypted utilizing advance and standard protocols. We additionally practice limited access by representatives . Cookies: we may use cookies for security, session progression, and customization purposes. If there should arise an occurrence of a client opted to dismiss a cookie, he/she will most likely be unable to access a portion of the restricted services or utilize a few features of the website.</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}
