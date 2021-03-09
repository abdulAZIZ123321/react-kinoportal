import {
      useEffect,
      useState
  }  from 'react';
  
  import axios from 'axios';
  import ArtistCard from '../components/ArtistCard'
  import './pages.scss'




const SingleMovie = ({ match }) => {
     
      
    console.log(match)


    
    const [movieInfo, setMovieInfo] = useState({
        isFetched: false,
        data: [],
        error: null
    });

     const [actorsList, setActorsList] = useState({
         isFetched: false,
         data: [],
         error: null
     });

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}`, {
                params: {
                    api_key: '8d08d31e1b08de961a19e2ae293de867'
                }
            })
            .then(function (response) {
                setMovieInfo({
                    isFetched: true,
                    data: response.data,
                    error: false,
                })
            })
            .catch(function (error) {
                setMovieInfo({
                    isFetched: true,
                    data: [],
                    error: error,
                })
            })
            .then(function () {
                // always executed
            });

             axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/credits`, {
                params: {
                    api_key: '8d08d31e1b08de961a19e2ae293de867'
                }
            })
            .then(function (response) {
                setActorsList({
                    isFetched: true,
                    data: response.data,
                    error: false,
                })
            })
            .catch(function (error) {
                setActorsList({
                    isFetched: true,
                    data: [],
                    error: error,
                })
            })
            .then(function () {
                // always executed
            });
    }, [])

    console.log(movieInfo);

    const movieInfoData = movieInfo.data

    console.log(movieInfoData)
    const movieCastActors = actorsList.data.cast

   return (
       
       

       <div>
            

            {
           movieInfo.isFetched ? (
               <div className="movie-info"> 
                     <img className="movie-info-back" src={`https://image.tmdb.org/t/p/w500/${movieInfoData.backdrop_path}`} alt=""/>

                <div className="movie-info-front container">
                     <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movieInfoData.poster_path}`} alt=""/>
                
                <div className="front-info">
                    <h1>{movieInfoData.title}</h1>
                    <h2>{movieInfoData.orginal_title}</h2>
                    <h3>{movieInfoData.tagline}</h3>
                    <p>{movieInfoData.overwiev}</p>
                    <h4>Budget: {movieInfoData.budget}</h4>
                    <h4>Release date:  <span>${movieInfoData.release_date}</span></h4>
                    <h4>Runtime: {movieInfoData.runtime}</h4>
                      
                          
                    <a href={movieInfoData.homepage} target="_blank">Official site</a> 


                 {
                     movieInfoData.genres.map((genre, index) => (
                        <button key={index}>{genre.name}</button>
                        ))
                 }  


                 
                     <h2>Artist</h2>
                 {
                     actorsList.isFetched ? (
                         <div className="actor-list">
                             {
                                 actorsList.data.cast.map((actor, index) => (
                                     <ArtistCard
                                     id={actor.id}
                                     key={index}
                                     name={actor.name}
                                     charName={actor.character}
                                     imgLink={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                                     
                                     />

                                 ))
                             }
                         </div>
                     ) : (
                         <h2>Loading...</h2>
                     )
                 }


                </div>
                </div>
               </div>
           ) : ( 
               <h1> Loading... </h1>
           )
       } 
       </div>
   )
    
    
}


export default SingleMovie;