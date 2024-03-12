import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ThemeTypeContext, { ThemeType } from '../utils/ContextProviderThemes'

const NavigationBar = () => {

    const {themeType} = useContext(ThemeTypeContext)

    useEffect(() => {
        if(themeType === ThemeType.LIGHT) {
            document.getElementById('navBarHeader')!!.className = "navbar-ul"
        } else {
            document.getElementById('navBarHeader')!!.className = "navbar-ul-dark"
        }
    }, [themeType])

    return (
        <div>
            <ul className='navbar-ul' id='navBarHeader'>                
                <li className='navbar-li'><Link to="/shows">Shows</Link></li>
                <li className='navbar-li'><Link to="/people">People</Link></li>
                <li className='navbar-li'><Link to="/network">Networks</Link></li>
                <li className='navbar-li'><Link to="/webChannels">Web Channels</Link></li>
            </ul>
        </div>
    )
}

export default NavigationBar
