import React, { useState } from 'react'
import FilterByName from './filterByName/FilterByName';
import FilterByRating from './Rating/Rating'
import Footer from './Footer/Footer'
import MovieList from './MovieList/MovieList';
import listMovies from './MoviesData'


const MovieApp = () => {
  const [movies, setMovies] = useState(listMovies);
  const [inputSearch, setInputSearch] = useState("");
  const [rating, setRating] = useState(1);

  const AddMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }


  return (
    <div className="movieApp">
      <div className="filterPart">
        <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch} />
        <FilterByRating filterRate={true} rating={rating} setRating={setRating} />
      </div>

      <MovieList movies={movies} inputSearch={inputSearch} 
      rating={rating} AddMovie={AddMovie} />

      <Footer />
    </div>
  )
}

export default MovieApp
