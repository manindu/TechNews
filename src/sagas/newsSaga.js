import { takeLatest, put, take, select } from 'redux-saga/effects';
import { GET_ARTICLES, REQUEST, MAKE_API_REQUEST, SUCCESS } from '../constants/types';
import { getArticlesBySource } from '../api';

function* getArticles() {
  const sources = yield select(state => state.news.selectedSources);
  const requestPayload = {
    action: GET_ARTICLES,
    api: getArticlesBySource,
    data: sources,
  };
  yield put.resolve({ type: MAKE_API_REQUEST, payload: requestPayload });
  const actionResult = yield take(requestPayload.action + SUCCESS);
  console.log('ACTION RESULT:::', actionResult);
}

export default function* watcherSaga() {
  yield takeLatest(GET_ARTICLES + REQUEST, getArticles);
}
