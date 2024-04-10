import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

const MovieDetail = () => {

    const [movie,setMovie] = useState({})
    const [castData,setCast] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getMovieData()
    },[])

    let first = ''
    let sec = ''
    const getMovieData = async() => {
        let url = `https://api.themoviedb.org/3/movie/${id}?api_key=f110d6b8f8fcdc0c3f58df95c3f92a5b&language=en-US`
        let cast_url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f110d6b8f8fcdc0c3f58df95c3f92a5b&language=en-US`
        console.log(id)
        const res = await fetch(url)
        const data = await res.json()
        const res1 = await fetch(cast_url)
        const cast_data = await res1.json()
        console.log(data,cast_data)
        let {backdrop_path} = movie
        if (backdrop_path !== null) {
            first = backdrop_path
            sec = backdrop_path.slice(1, backdrop_path.length)
            console.log(sec)
        }
        setMovie(data)
        setCast(castData.cast)
    }

    const Search = (url) => {
        alert('Cannot process search in detailed pages')
    }


    return(
        <div className='home-container'>
            <Header Search={Search} />
            <div className='movie-poster-cont' style={{backgroundImage:new URL(`https://image.tmdb.org/t/p/w500${first}${sec}`)}}>
                <div className='movie-desc'>
                    <img src={`https://image.tmdb.org/t/p/w500${first}${sec}`} alt='movie' />
                    <div className='movie-details'>
                        <h1 className='header-items'>{movie.title}</h1>
                        <p style={{color:'white'}}>Rating:{movie.vote_average}</p>
                    </div>
                </div>
                <h1 className='header-items'>Overview</h1>
                <p style={{color:'white'}}>{movie.overview}</p>
            </div>
            <h1 className='header-items'>Cast</h1>
            <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap'}}>
                {castData.map(e => <><img key={e.id} src={`https://image.tmdb.org/t/p/w500${e.profile_path}${e.profile_path.slice(1,e.profile_path.length)}`} style={{width:'15%',margin:10}} /><p>{e.original_name}</p></>)}
            </div>
        </div>
    )
    
}

export default MovieDetail