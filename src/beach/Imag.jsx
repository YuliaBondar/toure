import React from 'react';
import './Imag.css'
export const Imag = ({pages}) => {
 
  
  return (
    <div className="beach">
      <div className="text_connect"><h1>Popular Beach Destinations</h1></div>
      <div className="select">
      {pages.map(page=>(
            <div className="imagge" key={page.id}>
                <li>
                    <div>
                        <img src={page.img} alt={page.alt}/>
                    </div>
                </li>

                <div className="image-text">
                    {/* <p>{page.text}</p> */}

                </div>
            </div>
        ))}
      </div>
    </div>
  );
  
}
