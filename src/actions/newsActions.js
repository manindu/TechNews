import { GET_ARTICLES, REQUEST } from '../constants/types';

export const getArticlesBySource = payload => ({
  type: GET_ARTICLES + REQUEST,
  payload,
});

export const getHeadlinesBySource = () => {};
