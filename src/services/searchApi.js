import axios from 'axios';

const key = '8d4dbcc91599f2a2050190ab7ea9b537';
const BASE_URL = 'https://api.themoviedb.org/3';

const GetMovieTrending = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${key}`,
    );
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

const GetSearchMovies = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${key}&query=${query}&language=en-US&page=1&include_adult=false`,
    );
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

const GetMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${key}&language=en-US`,
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const GetMovieCredits = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${key}`,
    );
    return response.data.cast;
  } catch (e) {
    throw new Error(e);
  }
};

const GetMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`,
    );
    return response.data.results;
  } catch (e) {
    throw new Error(e);
  }
};

const searchApi = {
  GetMovieTrending,
  GetSearchMovies,
  GetMovieDetails,
  GetMovieCredits,
  GetMovieReviews,
};

export default searchApi;
