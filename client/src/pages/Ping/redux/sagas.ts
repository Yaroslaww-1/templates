import { call, put, all, takeLatest } from 'redux-saga/effects';
import { PingService } from 'src/api/services/ping.service';
import { fetchPing } from './actions';

function* fetchPingSaga(action: ReturnType<typeof fetchPing.requestPayload>) {
  try {
    const ping = yield call(PingService.getPing);
    yield put(fetchPing.success(ping));
  } catch (error) {
    yield put(fetchPing.failure(error));
  }
}

function* watchFetchPing() {
  yield takeLatest(fetchPing.types.request, fetchPingSaga);
}

export default function* fetchPingSagas() {
  yield all([watchFetchPing()]);
}
