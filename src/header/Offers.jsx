import React, { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { TbBeach } from "react-icons/tb";
import { GiDesert } from "react-icons/gi";
import { PiMountainsFill } from "react-icons/pi";
import { GiPisaTower } from "react-icons/gi";
import { MdHouseboat } from "react-icons/md";
import { MdForest } from "react-icons/md";
import { GiCampingTent } from "react-icons/gi";
import { PiCastleTurretLight } from "react-icons/pi";
import { FaSkiing } from "react-icons/fa";
import { LuPalmtree } from "react-icons/lu";

import './Offers.css'

export const Offers = () => {
  const [currentPath, setCurrentPath] = useState('');
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);



  return (
    <div className='offers'>
        <ul>
        <li><Link to='/Beach' className={currentPath === '/Beach' ? 'active-link' : ''} >
                <div className="img_offer">{<TbBeach className='img_offers'/>}</div>
                <div className="name">Beaches</div></Link></li>
            <li><Link to='/'className={currentPath === '/' ? 'active-link' : ''} >
                <div className="img_offer">{<GiDesert className='img_offers'/>}</div>
                <div className="name">Deserts</div></Link></li>
            <li><Link to='/' className={currentPath === '/' ? 'active-link' : ''} >
                <div className="img_offer">{<PiMountainsFill className='img_offers'/>}</div>
                <div className="name">Mountains</div></Link></li>
            <li><Link to='/'className={currentPath === '/' ? 'active-link' : ''} >
                <div className="img_offer">{<GiPisaTower className='img_offers'/>}</div>
                <div className="name">Iconic Cities</div></Link></li>
            <li><Link to='/' className={currentPath === '/' ? 'active-link' : ''} >
                <div className="img_offer">{<MdHouseboat className='img_offers'/>}</div>
                <div className="name">Houseboats</div></Link></li>
            <li><Link to='/' className={currentPath === '/' ? 'active-link' : ''}>
                <div className="img_offer">{<MdForest className='img_offers'/>}</div>
                <div className="name">Countryside</div></Link></li>
            <li><Link to='/' className={currentPath === '/' ? 'active-link' : ''} >
                <div className="img_offer">{<GiCampingTent className='img_offers'/>}</div>
                <div className="name">Camping</div></Link></li>
            <li><Link to='/' className={currentPath === '/' ? 'active-link' : ''} >
                <div className="img_offer">{<PiCastleTurretLight className='img_offers'/>}</div>
                <div className="name">Castle</div></Link></li>
            <li><Link to='/' className={currentPath === '/' ? 'active-link' : ''} >
                <div className="img_offer">{<FaSkiing className='img_offers'/>}</div>
                <div className="name">Skiing</div></Link></li>
            <li><Link to='/' className={currentPath === '/' ? 'active-link' : ''} >
                <div className="img_offer">{<LuPalmtree className='img_offers'/>}</div>
                <div className="name">Tropical</div></Link></li>
        </ul>
        
    </div>
  )
}
