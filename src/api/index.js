import { create } from 'apisauce';
import Config from 'react-native-config';

const api = create({
  baseURL: Config.API_BASE,
  headers: { Authorization: Config.API_KEY },
});

export const getArticlesBySource = payload =>
  api.get(`/everything?sources=${payload.sources}&page=${payload.page}&language=en`);
export const getHeadlinesBySource = payload =>
  api.get(`/top-headlines?sources=${payload.sources}&page=${payload.page}&language=en`);
