import { call, takeEvery, put } from 'redux-saga/effects';
import { SUCCESS, FAILURE, MAKE_API_REQUEST } from '../constants/types';

function* requestSaga(action) {
  try {
    const response = yield call(action.payload.api, action.payload.data);
    console.log(action);
    console.log('RESPONSE:::', response);
    if (response.status >= 400) {
      yield put({ type: action.payload.action + FAILURE });
    } else {
      yield put({ type: action.payload.action + SUCCESS, payload: response.data });
      yield put({ type: MAKE_API_REQUEST + SUCCESS });
    }
  } catch (error) {
    yield put({ type: MAKE_API_REQUEST + FAILURE });
    yield put({ type: action.payload.action + FAILURE });
  }
}

export default function* watcher() {
  yield takeEvery(MAKE_API_REQUEST, requestSaga);
}
