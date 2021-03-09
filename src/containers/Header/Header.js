import {
    Link
}
from 'react-router-dom';

import '../Header/Header.scss';

const Header = ({sidebarState , setSidebarState}) => {

   

    return ( 
        <div className = "header">

             
        
            <div className="header-inner">

                 {<button className = "opener" onClick={() => setSidebarState(!sidebarState)}> open </button> }
            

                <div className="header-sections">
                     <Link to = "/" className="links"> Home Page </Link> 
                </div>
                <div className="header-sections">
                    <Link to = "/populars" className="links"> Popular Movies </Link> 
                </div>
                <div className="header-sections">
                    <Link to = "/movies" className="links"> Movies </Link> 
                </div>
            </div>
        </div>
    )
}

export default Header;