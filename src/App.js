import Home from './components/Home';
import UpComing from './components/UpComing';
import TopRated from './components/TopRated';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top" element={<TopRated />} />
        {/* Catch-all route for 404 Not Found pages */}
        <Route path="/up" element={<UpComing />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
