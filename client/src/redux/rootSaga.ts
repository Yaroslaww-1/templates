import { all } from 'redux-saga/effects';
import fetchPingSagas from 'src/pages/Ping/redux/sagas';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function* rootSaga(): Iterator<any, any, undefined> {
  yield all([fetchPingSagas()]);
}
