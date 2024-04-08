import React from 'react'
import '../vacation/Offer.css'
import Image from '../photo/plane.png'
import Images from '../photo/beach.png'

export const Offer = () => {
  return (
    <div className='offer'>
        <h1 className='h_elem'>Offers</h1>
        <div className="prepare">
            <div className="plane">
                <div className="image_plane">
                    <img src={Image} alt='plane'/>
                </div>
                <div className="text_plain">
                    <span>Domestic Flights</span>
                    <h3>Huge savings on flight width trxvl.</h3>
                    <span>Book domestic flights starting @ just 1459 </span>
                    <div className="button"><button>Book Now</button></div>
                </div>
            </div>

            <div className="villa">
                <div className="image_villa">
                    <img src={Images} alt='villa'/>
                </div>
                <div className="text_villa">
                    <span>International Hotels</span>
                    <h3>Enjoy upto 20% off on International Hotels</h3>
                    <span>Make the most of this deal on your first booking with trxvl.</span>
                   <div className="button"><button>Book Now</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}
