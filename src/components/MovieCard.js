import { useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ props }) => {

    console.log(props)
    const { adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count } = props
    console.log(backdrop_path, typeof (backdrop_path))
    let first = ''
    let sec = ''
    if (poster_path !== null) {
        first = poster_path
        sec = poster_path.slice(1, poster_path.length)
        console.log(sec)
    }

    return (
        <Link to={`/movie/${id}`}  className="movie-card" style={{margin:20}}>
            <img src={`https://image.tmdb.org/t/p/w500${first}${sec}`} alt="poster" />
            <div className="movie-card-desc">
                <p className="text">{original_title}</p>
                <p className="text">Rating: {vote_average}</p>
            </div>
        </Link>
    )

}


export default MovieCard