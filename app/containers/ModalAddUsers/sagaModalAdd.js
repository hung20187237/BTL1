import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from './constantsModalAdd';
import * as actions from './actionsModalAdd';

import { axiosPost } from '../../utils/request';

export function* handlePostUser(action) {
  const path = `/user/v2/add`;
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.status === 200) {
      yield put(actions.postUserSuccess(res.data));
      // action.callback(res.data);
    }
  } catch (error) {
    yield put(actions.postUserError(error));
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
  yield takeLatest(constants.POST_USER, handlePostUser);
  yield takeLatest(constants.GET_ROLE, handleGetRole);
}
