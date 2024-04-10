import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

const MovieDetail = () => {

    const [movie,setMovie] = useState({poster_path:''})
    const [castData,setCast] = useState([{profile_path:'/fuTEPMsBtV1zE98ujPONbKiYDc2.jpg'}])
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
        setMovie(data)
        setCast(cast_data["cast"])
        // alert(c)
    }

    const Search = (url) => {
        alert('Cannot process search in detailed pages')
    }


    return(
        <div className='movie-detail-container'>
            <Header Search={Search} />
            <div className='movie-poster-cont'>
                <div className='movie-desc'>
                    <img src={movie.poster_path !== null ?`https://image.tmdb.org/t/p/w500${movie.poster_path}${movie.poster_path.slice(1,movie.poster_path.length)}`:''} alt='movie' style={{width:'10%'}} />
                    <div className='movie-details'>
                        <h1 className='header-items'>{movie.title}</h1>
                        <p style={{color:'white'}}>Rating:{movie.vote_average}</p>
                    </div>
                </div>
                <h1 className='header-items'>Overview</h1>
                <p style={{color:'white'}}>{movie.overview}</p>
            </div>
            <h1 className='header-items'>Cast</h1>
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                {castData.map(e => <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'20%'}}><img key={e.id} src={e.profile_path !== null ? `https://image.tmdb.org/t/p/w500${e.profile_path}${e.profile_path.slice(1,e.profile_path.length)}`:''} style={{width:'50%',margin:10}} /><p style={{color:'white'}}>{e.original_name}</p></div>)}
            </div>
        </div>
    )
    
}

export default MovieDetail