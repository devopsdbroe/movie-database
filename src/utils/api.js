import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "1940395b8213cefef43b5a9b92e8803c";

export const searchMovies = async (query) => {
	try {
		const response = await axios.get(
			`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
		);
		return { data: response.data, error: null };
	} catch (error) {
		error.console("Error fetching data:", Error);
		return { data: null, error: error.message };
	}
};
