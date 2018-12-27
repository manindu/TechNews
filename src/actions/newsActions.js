import { GET_ARTICLES, REQUEST } from '../constants/types';

export const getArticlesBySource = () => ({
  type: GET_ARTICLES + REQUEST,
});

export const getHeadlinesBySource = () => {};
