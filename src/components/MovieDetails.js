import React from "react";

const MovieDetails = ({ movie }) => {
	if (!movie) return <div>Select a movie for more details</div>;

	return (
		<div>
			<h2>{movie.title}</h2>
			<p>{movie.overview}</p>
		</div>
	);
};

export default MovieDetails;
