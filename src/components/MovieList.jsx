// import React, { useContext } from "react";
// import { MovieContext } from "./MovieContext";

// function MovieList() {
//     const { movies, handleMovieClick, favorite, handleFavoriteClick, imgUrl } = useContext(MovieContext);

//     return (
//         <>
//             <div className="movies">
//                 {movies.map((movie) => (
//                     <div key={movie.id} className="movie" onClick={() => handleMovieClick(movie)}>
//                         <img src={`${imgUrl}${movie.poster_path}`} alt={movie.title} />
//                         <p>Title: {movie.title}</p>
//                         <p>Overview: {movie.overview}</p>
//                         <p>Vote Average: {movie.vote_average}</p>
//                         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
//                         <span className="material-symbols-outlined" onClick={() => handleFavoriteClick(movie)}>
//                             {favorite.some(fav => fav.id === movie.id) ? 'favorite' : 'favorite_border'}
//                         </span>
//                     </div>
//                 ))}
//             </div>

//             <h1>Favourite</h1>
//             {favorite.map(movie => (
//                 <div key={movie.id}>
//                     <img src={`${imgUrl}${movie.poster_path}`} alt={movie.title} onClick={() => handleMovieClick(movie)} />
//                     <p>Title: {movie.title}</p>
//                     <p>Overview: {movie.overview}</p>
//                     <p>Vote Average: {movie.vote_average}</p>
//                 </div>
//             ))}
//         </>
//     );
// }

// export default MovieList;

import { useState } from "react";

const MovieList = ({ movies, imgUrl, onMovieClick, favorite, onFavoriteClick }) => {
  
  const [red, setRed] = useState(false);

  const handleRed = () => {
    setRed(!red)
  }
  return (
    <div className="movies">
      {movies.map((movie) => (
        <div key={movie.id} className="movie" onClick={() => onMovieClick(movie)}>
          <img src={`${imgUrl}${movie.poster_path}`} alt={movie.title} className="moviepic"/>
          <p>Title: {movie.title}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Vote Average: {movie.vote_average}</p>
          <span
            className="material-symbols-outlined"
            onClick={(e) => {
               e.stopPropagation();
               onFavoriteClick(movie); 
               handleRed()
              }} style={{color: favorite.some((fav) => fav.id === movie.id) ? 'red' : 'inherit'}}
          >
            {favorite.some((fav) => fav.id === movie.id) ? 'favorite' : 'favorite_border'}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MovieList;