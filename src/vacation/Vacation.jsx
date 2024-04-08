import React from 'react'
import '../vacation/Vacation.css'
import { Link } from 'react-router-dom'
import Image1 from'../photo/bali.png'
import Image2 from'../photo/Kerry.png'
import Image3 from'../photo/Sydney.png'
import Image4 from'../photo/Paris.png'
// import { Offer } from '../vacation/Offer.jsx'


export const Vacation = () => {

  const photos=[
    {id:1, src:Image1, alt:'Bali', link: '#'},
    { id: 2, src: Image2, alt: 'Kerry', link: '#' },
    { id: 3, src: Image3, alt: 'Tokyo', link: '#' },
    { id: 4, src: Image4, alt: 'Paris', link: '#' }
  ];

  return (
    <div className='vacation'>
        <div className="text_vacatin"><h1>Top Vacation Destinations</h1></div>
          <div className="vacation_va">
            <div className="vacat">
              {photos.map(photo=>(
                <div key={photo.id} className='imagge'>
                  
                  <li>
                    <Link to={photo.link}>
                      <img src={photo.src} alt={photo.alt}/>
                    </Link>
                  </li>
                </div>
              
            )
         )}  
          </div>
        </div>
    </div>
  )
}
