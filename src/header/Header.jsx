import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SearchBox } from './SearchBox';
import { Offers } from './Offers';
import './Header.css'

export default function Header() {
  const [currentPath, setCurrentPath] = useState('');
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);
  return (
    <div className='Header'>
        <div className="content">
                <div className="emblem">
                <Link className='link_emblem' to="/page">trxvl.</Link>
                </div>
                <div className="navigation">
                    <nav>
                        <ul>
                        <li><Link  to="/page" className={currentPath === '/page' ? 'active-link' : ''}>Home</Link></li>
                        <li><Link to="#" className={currentPath === '#' ? 'active-link' : ''}>Stays</Link></li>
                        <li><Link to="/flights" className={currentPath === '/flights' ? 'active-link' : ''}>Flights</Link></li>
                        <li><Link to="/packages" className={currentPath === '/packages' ? 'active-link' : ''}>Packages</Link></li>
                        <li><Link to="/signup" className={currentPath === '/signup' ? 'active-link' : ''}><b>Sign Up</b></Link></li>
                        </ul>
                    </nav>
                </div>
        </div>
        <div className="header_main">
            <div className="text_content">
                    <h1> The whole world <br/> awaits.</h1>
            </div>
            <SearchBox/>

            <div className='top_categor'><p>Top categories</p></div>
            
              <Offers/>
        </div>
    </div>
  )
}
