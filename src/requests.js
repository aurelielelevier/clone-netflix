const API_KEY = '71b94f30b0afd7b23c94ff3d409f24bf';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123&language=fr-FR`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=fr-FR`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=fr-FR`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=fr-FR`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=fr-FR`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=fr-FR`
};

export default requests;