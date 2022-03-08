import React, { useState } from 'react'
import logo1 from '../pics/1.png';
import logo2 from '../pics/Passer.gif';


export default function Hd() {
    const [isShowLg, setIsShowLg] = useState(true);
    return (
        <nav className='navbar'>
            {isShowLg && <img src={logo1} alt='Passer logo' className='nav-logo' onMouseEnter={() => { setIsShowLg(false) }} />}
            {!isShowLg && <img src={logo2} alt='Passer logo' className='nav-logo' onMouseLeave={() => { setIsShowLg(true) }} />}
            <label className="nav-txt"><h2>Passer's memo</h2></label>
            <ul className='nav-menu'>
                <li className='nav-item'><a href="Home" className="nav-link">Home</a></li>
                <li className='nav-item'><a href="Contact" className="nav-link">Contact</a></li>
                <li className='nav-item'><a href="More" className="nav-link">More</a></li>
            </ul>
        </nav>
    )
}
