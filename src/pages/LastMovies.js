import axios from 'axios';
import {
    useEffect,
    useState
} from 'react';

import MovieCard from '../components/MovieCard';


const LastMovies = () => {
    const [lastList, setLastList] = useState({
        isFetched: false,
        data: [],
        error: null
    });

    console.log(lastList);



    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/latest', {
                params: {
                    api_key: '8d08d31e1b08de961a19e2ae293de867'
                }
            })
            .then(function (response) {
                  console.log('Response ',response)
                setLastList({
                  
                    isFetched: true,
                    data: response.data,
                    error: false,
                })
            })
            .catch(function (error) {
                setLastList({
                    isFetched: true,
                    data: [],
                    error: error,
                })
            })
            .then(function () {
                // always executed
            });
    }, [])

    const lastDate = lastList.data;
    console.log(lastDate)
   return (
       <div>
            

            {
                lastList.isFetched ? (
                <div className="movies"> 
                   {
                   lastList.data.map((item, index) => ( 
                       <MovieCard id = {
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

export default LastMovies;