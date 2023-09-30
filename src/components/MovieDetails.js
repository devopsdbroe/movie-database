import React from "react";

const MovieDetails = ({ movie }) => {
	if (!movie) return <div>Select a movie for more details</div>;

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
