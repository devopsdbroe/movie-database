import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { searchMovies } from "./utils/api";
import { Container, Header, MainContent, GlobalStyles } from "./AppStyles";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`${GlobalStyles}`;

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
		setSelectedMovie(null);
	};

	return (
		<>
			<GlobalStyle />
			<Container>
				<Header>
					<h1>Movie Database</h1>
					<SearchBar onSearch={handleSearch} />
				</Header>
				<MainContent>
					<MovieDetails movie={selectedMovie} hasMovies={movies.length > 0} />
					<MovieList movies={movies} onSelect={setSelectedMovie} />
				</MainContent>
			</Container>
		</>
	);
}

export default App;
