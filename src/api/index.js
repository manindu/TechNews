import { create } from 'apisauce';
import Config from 'react-native-config';

const api = create({
  baseURL: Config.API_BASE,
  headers: { Authorization: '3c84f2f26cb64452adf099aec1ea02de' },
});

export const getArticlesBySource = payload => api.get(`/everything?sources=${payload.join()}`);
export const getHeadlinesBySource = payload => api.get(`/top-headlines?sources=${payload.join()}`);
