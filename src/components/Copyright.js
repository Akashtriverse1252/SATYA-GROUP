import React from 'react';
import { Link } from 'react-router-dom';

export const Copyright = () => {
  return (
    <>
        <div className='copyright'>
      <div className='container'>
        <div className='row'>
          <div className='copyrightrow d-flex justify-content-between'>
            <p>&copy; 2022 satya group | all rights reserved. | <Link to='/disclaimer'>disclaimer</Link> | <Link to='/privacy-policy'>privacy policy</Link> | <Link to='/refund-policy'>refund policy</Link></p>
            <p><a href='https://www.triverseadvertising.com/' target='_blank' rel='noreferrer'>site : triverse</a></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
