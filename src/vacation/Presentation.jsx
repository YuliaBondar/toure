import React from 'react'
import './Presentation.css'
import Image from '../photo/phone.png'
import Image1 from '../photo/GooglePlay.png'
import Image2 from '../photo/AppStore.png'

export const Presentation = () => {
  return (
    <div className='presentation'>
        <div className="information">
            <div className="tel"><img src={Image} alt="Phone" /></div>

            <div className="inf">
                <div className="text">
                    <h1>You all-in-one travel app.</h1>
                    <span>Book flights? hotel? trains & rental cars anywhere in the world in just<br/>
                        seconds. Get real-time flights updates travel info, exclusive deals, and<br/> 30% more Trip Coins only on the app!
                    </span>
                </div>
                <div className="contact">
                    <div className="mob_email">
                        <div className="btn">
                            <button className="mobile">Mobile</button>
                            <button className="email">Email</button>
                        </div>
                        <div className="enter">
                            <p>Enter your phone number to receive a text with a link to download the app.</p>
                           
                           <div className="input">
                                <input className='inpt'
                                type='tel'
                                placeholder='+91 Mobile number'
                                />
                                <button className='btn'>Search</button>
                            </div> 
                        </div>

                    </div>

                    <div className="cont">
                        <div className="but">
                            <img src={Image1} alt="Google" />
                            <img src={Image2} alt="App" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
