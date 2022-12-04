const API_KEY = "bf920c0eccef0a5571a534bbb27fffc5";

const requests = {
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,

    fetchsearchMovies: `/search/movie?api_key=${API_KEY}&query=`,

    // fetchUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=bf920c0eccef0a5571a534bbb27fffc5&language=en-US&page=1`,
    // fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=bf920c0eccef0a5571a534bbb27fffc5&language=en-US&page=1`,
    // fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=bf920c0eccef0a5571a534bbb27fffc5&language=en-US&page=1`,
    // fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=bf920c0eccef0a5571a534bbb27fffc5&with_genres=27`,
}

export default requests;
