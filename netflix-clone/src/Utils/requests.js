const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_geners=28&sort_by=popularity.desc`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
    fetchRomanceovies: `/discover/movie?api_key=${API_KEY}&with_geners=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_geners=99`,
    fetchTvShows:` /tv/popular?api_key=${API_KEY}&language=en-us&page-1`,
};
export default requests; 