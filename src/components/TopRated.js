import { useState, useEffect } from 'react'
import Header from './Header'
import MovieCard from './MovieCard'
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import '../pro.css'

const TopRated = () => {

    console.log('In Top page')
    const [state, setState] = useState({ url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=f110d6b8f8fcdc0c3f58df95c3f92a5b&language=en-US', page: 1 })
    const [movies, setMovies] = useState([])
    // const [currentPage, setPage] = useState(1)
    useEffect(() => {
        getData()
    }, [state])

    const getData = async () => {
        const url = state.url + `&page=${state.page}`
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        if (data.success === false || data.results.length === 0) {
            setMovies([])
        } else {
            setMovies(data.results)
        }
    }

    const Search = (url) => {
        console.log('Calling')
        if (url !== '') {
            setState({ url, page: 1 })
            // getData(currentPage)
        }else{
            setState({url:'https://api.themoviedb.org/3/movie/top_rated?api_key=f110d6b8f8fcdc0c3f58df95c3f92a5b&language=en-US',page:1})
        }
    }


    return (
        <div className='home-container'>
            <Header Search={Search} current='top' />
            {movies.length === 0 ? <h1>No Results found / Results Ends here..</h1>:''}
            <div className='products-cont'>
                {movies.map(e => <MovieCard props={e} />)}
            </div>
            <div className='pagination'>
                {state.page > 1 ? <FaArrowCircleLeft onClick={() => setState(prev => ({
                    ...prev,
                    page: prev.page - 1
                }))} style={{ margin: 10, cursor: 'pointer' }} /> : ''}
                {movies.length > 1 ? <FaArrowCircleRight onClick={() => setState(prev => ({
                    ...prev,
                    page: prev.page + 1
                }))} style={{ margin: 10, cursor: 'pointer' }} /> : ''}
            </div>
        </div>
    )

}



export default TopRated