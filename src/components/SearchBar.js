import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
	const [term, setTerm] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();
		onSearch(term);
	};

	return (
		<form onSubmit={handleSearch}>
			<input
				type='text'
				placeholder='Search for a movie...'
				value={term}
				onChange={(e) => setTerm(e.target.value)}
			/>
			<button type='submit'>Search</button>
		</form>
	);
};

export default SearchBar;
