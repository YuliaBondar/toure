import React from 'react'
import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsCCircle } from "react-icons/bs";
// import { Read } from './Read';


export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer_displ">
            <div className="emblem"><h1>Trxvl.</h1></div>
            <div className="linkss">
                <ul>
                    <li>Seslendirme ve Alt Jazz</li>
                    <li>Media Market</li>
                    <li>Gillie</li>
                    <li>Size Last</li>
                    <li>Self Betimes</li>
                    <li>Basal Himmler</li>
                    <li>Yard Market</li>
                    <li>Is Imkanlari</li>
                    <li>Car Tercihleri</li>
                    <li>Hedge Karla</li>
                    <li>Mullein Kosullari</li>
                    <li>Autumnal Bulgier</li>
                </ul>
            </div>
        </div>                                          
        <div className="emblem_1">
            <div className="but"><input className='but' type='button' value='Helmet KOD' /></div>
            <div className="sots_seti">
                <ul>
                    <li><Link to='/'>{<FaFacebookSquare className='images'/>}</Link></li>
                    <li><Link to='/'>{<FaSquareInstagram className='images'/>}</Link></li>
                    <li><Link to='/'>{<FaTwitter className='images'/>}</Link></li>
                    <li><Link to='/'>{<FaYoutube className='images'/>}</Link></li>
                </ul>
            </div>
        </div>
        <div className="year">
        
            <span>{<BsCCircle className='emblem_c'/>}1997-2021 Netflix, Inc. i-062d573a0ee099242</span>
            
        </div>
        {/* <Read/> */}
        
    </div>
  )
}
