import {
  GET_LIST,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
  GET_INFOR,
  GET_INFOR_ERROR,
  GET_INFOR_SUCCESS,
} from './constantsHome';

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

export function getList(body, callback) {
  return {
    type: GET_LIST,
    body,
    callback,
  };
}

export function getInfo(body) {
  return {
    type: GET_INFOR,
    body,
  };
}
export function getInfoSuccess(data) {
  return {
    type: GET_INFOR_SUCCESS,
    data,
  };
}
export function getInfoError(error) {
  return {
    type: GET_INFOR_ERROR,
    error,
  };
}
