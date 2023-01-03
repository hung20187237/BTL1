import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from './constantsHome';
import * as actions from './actionsHome';

import { axiosPost } from '../../utils/request';

export function* handleGetList(action) {
  const path = `/user/list`;
  try {
    const res = yield call(axiosPost, path, action);
    if (res.status === 200) yield put(actions.getListSuccess(res));
  } catch (error) {
    yield put(actions.getListError(error));
  }
}
export default function* watchGetList() {
  yield takeLatest(constants.GET_LIST, handleGetList);
}
