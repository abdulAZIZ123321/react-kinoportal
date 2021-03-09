import axios from 'axios';
import {
    useEffect,
    useState
} from 'react';
import Header from '../containers/Header/Header';
import Sidebar from '../containers/Sidebar';
import MovieCard from '../components/MovieCard';

const TvShows = () => {
   
    const [showsList, setShowsList] = useState({
        isFetched: false,
        data: [],
        error: null
    });



    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/tv/popular', {
                params: {
                    api_key: '8d08d31e1b08de961a19e2ae293de867'
                }
            })
            .then(function (response) {
                setShowsList({
                    isFetched: true,
                    data: response.data.results,
                    error: false,
                })
            })
            .catch(function (error) {
                setShowsList({
                    isFetched: true,
                    data: [],
                    error: error,
                })
            })
            .then(function () {
                // always executed
            });
    }, [])

 
   return (
       <div>
            

            {
           showsList.isFetched ? (
               <div className="movies"> 
                   {
                   showsList.data.map((item, index) => ( <
                       MovieCard id = {
                           item.id
                       }
                       imgLink = {
                           item.poster_path
                       }
                       title = {
                           item.title
                       }
                       key = {
                           index
                       }
                       rating = {
                           item.vote_average
                       }
                       releaseDate = {
                           item.release_date
                       }

                    
                       />
                   ))       
                    } 
               </div>
           ) : ( 
               <h1> Loading... </h1>
           )
       } 
       </div>
    )
}

export default TvShows;