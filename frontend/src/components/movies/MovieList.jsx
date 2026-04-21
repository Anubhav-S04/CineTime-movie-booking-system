import React from 'react';
import { useNavigate } from 'react-router-dom';
import { allMovies, languages } from '../../utils/constants';
import MovieCard from './MovieCard';

const MovieList = () => {
  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div className='w-full md:w-3/4 p-4'>
      
      {/* Language Filters */}
      <div className='flex flex-wrap gap-2 mb-4'>
        {languages.map((lang, i) => (
          <span
            key={i}
            className='bg-white border border-gray-200 text-[#f74362] py-1 px-3 rounded-[24px] text-sm cursor-pointer hover:border-[#f74362] hover:bg-gray-100'
          >
            {lang}
          </span>
        ))}
      </div>

      {/* Header */}
      <div className='flex justify-between bg-white items-center px-6 py-6 mb-6 rounded'>
        <h3 className='font-semibold text-xl'>Coming Soon</h3>
        <a className='text-red-500 text-sm font-medium flex items-center' href="#">
          Explore upcoming movies <span className='ml-1'>➝</span>
        </a>
      </div>

      {/* Movie List */}
      <div className='flex flex-wrap gap-6'>
        {allMovies.map((movie, i) => (
          <div
            key={i}
            onClick={() => handleMovieClick(movie.id)}
            className="cursor-pointer"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;