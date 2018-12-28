import { combineReducers } from 'redux';
import news from './newsReducer';
import page from './pageReducer';

export default combineReducers({
  news,
  page,
});
