import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './actionsModalFix';
import * as constants from './constantsModalFix';

import { axiosPost, axiosPut } from '../../utils/request';

export function* handleFixUser(action) {
  const path = `/user/v2/editmember`;
  try {
    const res = yield call(axiosPut, path, action.body);
    if (res.status === 200) {
      yield put(actions.fixUserSuccess(res.data));
      // action.callback(res.data);
    }
  } catch (error) {
    yield put(actions.fixUserError(error));
  }
}

export function* handleGetRole(action) {
  const path = `/user/listrolegroup?UserGUID=00000000-0000-0000-0000-000000000000`;
  try {
    const res = yield call(axiosPost, path, action);
    if (res.status === 200) {
      yield put(actions.getRoleSuccess(res.data));
      // action.callback(res.data);
    }
  } catch (error) {
    yield put(actions.getRoleError(error));
  }
}
export default function* watchPostUser() {
  yield takeLatest(constants.FIX_USER, handleFixUser);
  yield takeLatest(constants.GET_ROLE, handleGetRole);
}
