import { GET_LIST, GET_LIST_SUCCESS, GET_LIST_ERROR } from './constantsHome';

export function getListError(error) {
  return {
    type: GET_LIST_ERROR,
    error,
  };
}

export function getListSuccess(data) {
  return {
    type: GET_LIST_SUCCESS,
    data,
  };
}

export function getList() {
  return {
    type: GET_LIST,
  };
}
