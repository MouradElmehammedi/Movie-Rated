import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILED,
  CHANGE_MOVIE_FILTER,
} from "./types";

import axios from "../../axios-movie-instance";

const API_KEY = "32478881ac0d85a661b95edb815726bb";

export const getMovies = (filterType, currentPage = 1) => {
  return (dispatch) => {
    axios
      .get(`/movie/${filterType}`, {
        params: { api_key: API_KEY, page: currentPage },
      })
      .then((res) => {
        dispatch(getMoviesSuccess(res.data));
      })
      .catch((err) => {
        console.log(err.mesage);
        dispatch(getMoviesFailed(err));
      });
  };
};

export const changeMovieFilterType = (filterType) => ({
  type: CHANGE_MOVIE_FILTER,
  payload: filterType,
});

const getMoviesSuccess = (responseData) => ({
  type: GET_MOVIES_SUCCESS,
  payload: responseData,
});

const getMoviesFailed = (err) => ({
  type: GET_MOVIES_FAILED,
});
