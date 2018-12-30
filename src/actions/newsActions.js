import { GET_ARTICLES, REQUEST, SET_SELECTED_SOURCES } from '../constants/types';

export const getArticlesBySource = payload => ({
  type: GET_ARTICLES + REQUEST,
  payload,
});

export const setSelectedSources = payload => ({
  type: SET_SELECTED_SOURCES,
  payload,
});

export const getHeadlinesBySource = () => {};
