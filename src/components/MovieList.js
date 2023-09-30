import React from "react";

const MovieList = ({ movies, onSelect }) => {
	return (
		<div>
			{movies.map((movie) => (
				<div key={movie.id} onClick={() => onSelect(movie)}>
					{movie.title}
				</div>
			))}
		</div>
	);
};

export default MovieList;
