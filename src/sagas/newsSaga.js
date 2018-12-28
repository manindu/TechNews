import { takeLatest, put, take } from 'redux-saga/effects';
import { GET_ARTICLES, REQUEST, MAKE_API_REQUEST, SUCCESS } from '../constants/types';
import { getArticlesBySource } from '../api';

function* getArticles(action) {
  const request = {
    action: GET_ARTICLES,
    api: getArticlesBySource,
    data: action.payload,
  };
  yield put.resolve({ type: MAKE_API_REQUEST, payload: request });
  const actionResult = yield take(request.action + SUCCESS);
  console.log('ACTION RESULT:::', actionResult);
}

export default function* watcherSaga() {
  yield takeLatest(GET_ARTICLES + REQUEST, getArticles);
}
