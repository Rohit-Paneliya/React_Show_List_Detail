import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>
            <ul className='navbar-ul'>                
                <li className='navbar-li'><Link to="/shows">Shows</Link></li>
                <li className='navbar-li'><Link to="/people">People</Link></li>
                <li className='navbar-li'><Link to="/network">Networks</Link></li>
                <li className='navbar-li'><Link to="/webChannels">Web Channels</Link></li>
            </ul>
        </div>
    )
}

export default NavigationBar
