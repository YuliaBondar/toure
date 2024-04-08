import React from 'react'
import '../page/Page.css'
import { Offer } from '../vacation/Offer'
import { Vacation } from '../vacation/Vacation'
import { Browse } from '../vacation/Browse'
import { Plan } from '../vacation/Plan'
import { Connect } from '../vacation/Connect'
import { Presentation } from '../vacation/Presentation'


export const Page = () => {
  return (
    <div className='page'>
        
        <Vacation/>
        <Offer/>
        <Browse/>
        <Plan/>
        <Connect/>
        <Presentation/>
       
        
        
    </div>
  )
}
