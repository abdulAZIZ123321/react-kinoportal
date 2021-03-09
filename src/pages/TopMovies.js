import axios from 'axios';
import {
    useEffect,
    useState
} from 'react';

import MovieCard from '../components/MovieCard';

const TopMovies = () => {
    const [topList, setTopList] = useState({
        isFetched: false,
        data: [],
        error: null
    });



    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/top_rated', {
                params: {
                    api_key: '8d08d31e1b08de961a19e2ae293de867'
                }
            })
            .then(function (response) {
                setTopList({
                    isFetched: true,
                    data: response.data.results,
                    error: false,
                })
            })
            .catch(function (error) {
                setTopList({
                    isFetched: true,
                    data: [],
                    error: error,
                })
            })
            .then(function () {
                // always executed
            });
    }, [])

    const lastListDate = topList.data

    console.log(lastListDate)
   return (
       <div>
            

            {
           topList.isFetched ? (
               <div className="movies"> 
                   {
                   topList.data.map((item, index) => ( <
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

export default TopMovies;