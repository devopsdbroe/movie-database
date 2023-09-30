import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { searchMovies } from "./utils/api";

function App() {
	const [movies, setMovies] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState(null);

	const handleSearch = async (term) => {
		const response = await searchMovies(term);

		if (response.error) {
			console.error("Error occured", response.error);
		} else {
			setMovies(response.data.results);
		}
	};

	return (
		<div>
			<SearchBar onSearch={handleSearch} />
			<MovieList movies={movies} onSelect={setSelectedMovie} />
			<MovieDetails movie={selectedMovie} />
		</div>
	);
}

export default App;
