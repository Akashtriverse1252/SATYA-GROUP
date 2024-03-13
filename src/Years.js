import React from 'react'
import { NavLink } from 'react-router-dom'

export const Years = ({mediay}) => {
  return (
  <>
     <div className='years'>
                                    <ul className='d-flex justify-content-start'>
                                        {mediay.map(allyears =>(
                                        <li><a href={'/'+allyears.type+'/'+allyears.year} className={allyears.class}>{allyears.year}</a></li>
                                        ))}
                                    </ul>
                                    </div>
  </>
  )
}
