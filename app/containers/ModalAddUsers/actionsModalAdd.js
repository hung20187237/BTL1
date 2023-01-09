import {
  GET_ROLE,
  GET_ROLE_ERROR,
  GET_ROLE_SUCCESS,
  POST_USER,
  POST_USER_ERROR,
  POST_USER_SUCCESS,
} from './constantsModalAdd';

export function postUser(body) {
  return {
    type: POST_USER,
    body,
  };
}

export function postUserSuccess(data) {
  return {
    type: POST_USER_SUCCESS,
    data,
  };
}

export function postUserError(error) {
  return {
    type: POST_USER_ERROR,
    error,
  };
}
export function getRole() {
  return {
    type: GET_ROLE,
  };
}
export function getRoleSuccess(data) {
  return {
    type: GET_ROLE_SUCCESS,
    data,
  };
}
export function getRoleError(error) {
  return {
    type: GET_ROLE_ERROR,
    error,
  };
}
