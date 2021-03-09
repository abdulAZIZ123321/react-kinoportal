import {
    Link
} from 'react-router-dom';

import '../MovieCard/MovieCard.scss'

const MovieCard = ({
    imgLink,
    title,
    id,
    rating,
    releaseDate
}) => {
    return ( 
        <Link to = {`/movie/${id}`} className = "movie-card">
            <div className="card-rating">
              {rating}
            </div>
        
        <img src = {
            `https://image.tmdb.org/t/p/w500/${imgLink}`
        }
        alt = ""
        className = "card-img"/>
        
        <div className="card-bottom">
            <h2 className = "card-title" > {
            title
        } </h2> 
        <h5 className="date">{releaseDate}</h5>
        <Link to = {
            `/movie/${id}`
        }
        className = "card-btn" > More Info </Link> 
        </div>
        </Link>
    )
}

export default MovieCard;