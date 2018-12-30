import { combineReducers } from 'redux';
import news from './newsReducer';
import page from './pageReducer';
import sources from './sourcesReducer';

export default combineReducers({
  news,
  page,
  sources,
});
