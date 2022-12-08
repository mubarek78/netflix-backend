const API_KEY = "2a6bd7378f6da6d891f541bb444ae164";

const requests = {
fetchNetflixOriginalMovies: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
fetchTrendingMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
fetchHororMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,

fetchNetflixOriginalsTvs: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTrendingTvs: `/tv/popular?api_key=${API_KEY}&language=en-US&page=2`,
fetchTopRatedTvs: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
fetchActionTvs: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
fetchComedyTvs: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
fetchDramaTvs: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
fetchRomanceTvs: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaryTvs: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
}

export default requests;
