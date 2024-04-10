import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../pro.css'

const Header = ({ Search , current}) => {

    const [movie, setMovie] = useState('')

    const api = 'f110d6b8f8fcdc0c3f58df95c3f92a5b'

    const handleSearch = () => {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${movie}`
        if(movie === ''){
            url = ''
        }
        console.log(url)
        Search(url)
    }

    return (
        <div className="header-main-cont">
            <h1 className="header-title">MovieDB</h1>
            <div className="header-items-cont">
                <Link to='/' style={{textDecoration:'none'}}><p className={`header-items ${current==='home'?'selected':''}`}>Popular</p></Link>
                <Link to='/top' style={{textDecoration:'none'}}><p className={`header-items ${current==='top'?'selected':''}`}>Top Rated</p></Link>
                <Link to='/up' style={{textDecoration:'none'}}><p className={`header-items ${current==='up'?'selected':''}`}>Upcoming</p></Link>
                <div className='input-cont'>
                    <input type="text" placeholder="Search Movies" className="header-search-ele" onChange={(e) => setMovie(e.target.value)} />
                    <button className='header-btn' onClick={handleSearch}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Header