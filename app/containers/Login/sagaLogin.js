import { call, put, takeLatest } from 'redux-saga/effects';

import * as constants from './constantsLogin';
import * as actions from './actionsLogin';

import { axiosPost } from '../../utils/request';

export function* handleLogin(action) {
  const path = `/user/login`;
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.status === 200) action.callback(res);
  } catch (error) {
    yield put(actions.loginError(error));
  }
}
export default function* watchLogin() {
  yield takeLatest(constants.LOGIN, handleLogin);
}
