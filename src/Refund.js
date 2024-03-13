import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'

export const Refund = () => {
  return (
    <>
        <Header />
        <section>
            <div className='container'>
                <div className='web-container'>
                    <div className='title' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="100">
                        <h2>Refund policy</h2>
                    </div>
                    <div className='webcontent' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600" data-aos-once="true" data-aos-easing="ease-in-sine" data-aos-delay="100">
                        <p>Satya Group offers its customers / prospective customers a facility to make online payments for their units in their Projects by making payments of the booking amount/milestone payments through various online payment gateway authorised by us.</p>
                        <p>The booking of the units in the Projects of the Satya Group shall be considered final only after the receipt of duly filled in Application Form, KYC documents and realization of booking amount into our account .</p>
                        <p>If the customer wishes to cancel the booking then the cancellation and refund shall be made as per the terms and conditions mentioned in the Application Form and Buyer’s Agreement. The refund of the amount shall be subject to deductions mentioned in the Application Form, Buyer’s agreement and the charges paid by Satya Group to the Payment Gateways in respect of the same.</p>
                        <p>By accessing, visiting and browsing the online booking facility of Satya Group, it is construed that the customer is accepting and consenting to all the terms and conditions stated in this policy.</p>
                        <p>This policy will be reviewed by Satya Group and may change, from time to time.</p>
                        <p>For queries pertaining to the above please write to us at <a href='mailto:crm.thehive@clearionpropertiesltd.org'>crm.thehive@clarionpropertiesltd.org</a></p>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}
