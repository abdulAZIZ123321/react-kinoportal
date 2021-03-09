import './ArtistCard.scss';


import { Link } from 'react-router-dom'



const ArtistCard = ({id, name, charName, imgLink}) => {
    return (
       <Link to={`actor/${id}`} className="artist-card">

       <img className="image" src={imgLink} alt=""/>
        <h2>{name}</h2>
        <h3>{charName}</h3>
       </Link>
    )
}

export default ArtistCard;