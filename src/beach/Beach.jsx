import React from 'react'
import { Imag } from './Imag'
import Image1 from './photo_beach/Mauritius.png'
import Image2 from './photo_beach/Havelock.png'
import Image3 from './photo_beach/Whitsunday.png'
import Image4 from './photo_beach/Maldives.png'

const Beach = () => {
  const pages=[
    {id:1, img:Image1, alt:'Mauritius', text:'Mauritius'},
    {id:2, img:Image2, alt:'Havelock', text:'Havelock'},
    {id:3, img:Image3, alt:'Whitsunday', text:'Whitsunday'},
    {id:4, img:Image4, alt:'Maldives', text:'Maldives'},
  ];

  return (
    <div className='beaches'>
        <div className="beach">
            <Imag pages={pages}/>
        </div>
    </div>
  )
}

export default Beach