import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from './constantsHome';
import * as actions from './actionsHome';

import { axiosGet, axiosPost } from '../../utils/request';

export function* handleGetList(action) {
  const path = `/user/list`;
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.status === 200) {
      yield put(actions.getListSuccess(res.data));
      action.callback(res.data);
    }
  } catch (error) {
    yield put(actions.getListError(error));
  }
}
export function* handleGetInfo(action) {
  const path = `/user/information`;
  try {
    const res = yield call(axiosGet, path, action.body);
    if (res.status === 200) {
      yield put(actions.getInfoSuccess(res.data));
      // action.callback(res.data);
    }
  } catch (error) {
    yield put(actions.getInfoError(error));
  }
}
export default function* watchGetList() {
  yield takeLatest(constants.GET_LIST, handleGetList);
  yield takeLatest(constants.GET_INFOR, handleGetInfo);
}
