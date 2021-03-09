import {
    Link
}
from 'react-router-dom';

import './Sidebar.scss'

const Sidebar = ({isOpened}) => {
    return (

        
           

        <div className={`wrapper ${isOpened ? 'opened' : ''}`}>
            <Link to = "/lastmovies" >
                <button className="sidebar-btn">Last Movies</button>
            </Link>
            <Link  to ="/soonmovies" >
                <button className="sidebar-btn">Coming soon Movies</button>
            </Link>
            <Link  to ="/tvshows" >
                 <button className="sidebar-btn">Popular Tv shows</button>
            </Link>
            <Link Link to = "/topmovies">
                <button className="sidebar-btn">Top-movies</button>
            </Link>
        </div>
      
    )
}

export default Sidebar;