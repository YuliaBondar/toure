import React from 'react'
import { Link } from 'react-router-dom'
import Image1 from '../photo/hotels.png'
import Image2 from '../photo/apartaments.png'
import Image3 from '../photo/Resorts.png'
import Image4 from '../photo/Villas.png'

export default function Stays() {
  const element=[
    {id:1, img:Image1, alt:'hotels', link:'#', text:'Hotels'},
    {id:2, img:Image2, alt:'apart', link:'#', text:'Apartaments'},
    {id:3, img:Image3, alt:'resorts', link:'#', text:'Resorts'},
    {id:4, img:Image4, alt:'villas', link:'#', text:'Villas'}
]
  return (
    <div className='browse'>
         <div className="text_vacatin"><h1>Browse by property type</h1></div>
         <div className="browse_br">
            <div className="vacat">
                {element.map(photo=>(
                    <div key={photo.id}  className='imagge'>
                        
                        <li>
                        {/* <div className="text">{photo.text}</div> */}
                        <Link to={photo.link} className="image-link">
                            <img src={photo.img} alt={photo.alt} />
                            <div className="image-text1">{photo.text}</div>
                        </Link>
                            
                        </li>
                    </div>
            ))}
            </div>
         </div>
    </div>
  )
}
