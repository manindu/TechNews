import { all } from 'redux-saga/effects';
import newsSaga from './newsSaga';
import requestSaga from './requestSaga';

export default function* rootSaga() {
  yield all([newsSaga(), requestSaga()]);
}
