import { GET_ARTICLES, REQUEST } from '../constants/types';

export const getArticles = payload => ({
  type: GET_ARTICLES + REQUEST,
  payload,
});

export default getArticles;
