import React from 'react'
import { NavLink } from 'react-router-dom'

export const Medianav = () => {
  return (
    <>
         <div className='medleft'>
                                    <ul>
                                        <li><NavLink to='/media'>Advertisments</NavLink></li>
                                        <li><NavLink to='/events'>Events & Exhibitions</NavLink></li>
                                        <li><NavLink to='/life-at-satya'>Life At Satya</NavLink></li>
                                    </ul>
                                </div>
    </>
  )
}
