import React from "react";

const MovieList = ({ movies, onSelect }) => {
	const formatDate = (dateString) => {
		const options = { year: "numeric", month: "2-digit", day: "2-digit" };
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	const formatRating = (rating) => {
		return Math.round(rating * 10) / 10;
	};

	return (
		<div>
			{movies.map((movie) => (
				<div key={movie.id} onClick={() => onSelect(movie)}>
					<h3>{movie.title}</h3>
					<p>Release Date: {formatDate(movie.release_date)}</p>
					<p>Average Rating: {formatRating(movie.vote_average)}</p>
				</div>
			))}
		</div>
	);
};

export default MovieList;
