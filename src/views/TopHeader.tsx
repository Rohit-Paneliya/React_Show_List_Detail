import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/tvmaze_logo.png';
import { useContext } from 'react';
import ThemeTypeContext, { ThemeType } from '../utils/ContextProviderThemes';
import { MaterialUISwitch } from '../components/MaterialSwitchDarkLightMode';

const TopHeader = () => {

    const {setThemeType} = useContext(ThemeTypeContext)

    const onToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {            
            if(e.target.checked === true) {
                setThemeType(ThemeType.DARK)
            } else {
                setThemeType(ThemeType.LIGHT)
            }
    }

    return (
        <div id="header" >
            {/* Header */}
            <div className="header" >
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="row" id='headerRow'>
                    {/* Column 1 Logo*/}
                    <div className="col-2">
                        <img  id='logo' src={logo} alt="TVMaze Logo" title='TVMaze Logo!'/>
                    </div>
                    {/* Column 2 Search text with button*/}
                    <div className="col-5">
                        <input type="text" className="search-input" placeholder="Search Shows and People"></input>
                        <button type="submit" className="search-button">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                    {/* Column 3 Login and Register text*/}
                    <div className="col-4">
                        <ul className="text-button-ul">
                            <li className="text-button-li">
                                <button className="text-button">Login</button>
                            </li>
                            <li className="text-button-li">
                                <button className="text-button">Register</button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-1">
                        <MaterialUISwitch onChange={onToggleChange}/>                        
                    </div>
                </div>

            </div>


        </div>
    )
}

export default TopHeader
