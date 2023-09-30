import React from "react";

const MovieDetails = ({ movie, hasMovies }) => {
	if (!movie) {
		if (hasMovies) {
			return <div>Select a movie for more details</div>;
		} else {
			return null;
		}
	}

	return (
		<div>
			<img
				src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
				alt={movie.title}
			/>
			<h1>{movie.title}</h1>
			<p>{movie.overview}</p>
		</div>
	);
};

export default MovieDetails;
