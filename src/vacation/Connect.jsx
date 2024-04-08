import React from 'react'
import './Connect.css'
import Image1 from '../photo/India.png'
import Image2 from '../photo/Travel.png'
import Image3 from '../photo/Beachconnect.png'
import Image4 from '../photo/mountains.png'
import { Link } from 'react-router-dom'

export const Connect = () => {
    const pages=[
        {id:1, img:Image1, alt:'india',link:'#', text_name:'India'},
        {id:2, img:Image2, alt:'travel',link:'#', text_name:'Travel Talk'},
        {id:3, img:Image3, alt:'beach',link:'#', text_name:'Beach'},
        {id:4, img:Image4, alt:'mountains',link:'#', text_name:'Mountains'},
    ];

  return (
    <div className='connect'>
        <div className="text_connect"><h1>Connect with other travelers in our community</h1></div>
        <div className="other_travel">
        {pages.map(page=>(
            <div className="imagge" key={page.id}>
                <li>
                    <Link to={page.link}>
                        <img src={page.img} alt={page.alt}/>
                    </Link>
                
                </li>
                <div className="image-text">
                        <div className="text_name"><p><b>{page.text_name}</b></p>
                        <span>Travel community </span>
                        <span>155,073  travels</span></div>
                        
                    </div>
            </div>
        ))}
        </div>
    </div>
  )
}
