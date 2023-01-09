import {
  GET_ROLE,
  FIX_USER,
  FIX_USER_ERROR,
  FIX_USER_SUCCESS,
  GET_ROLE_ERROR,
  GET_ROLE_SUCCESS,
} from './constantsModalFix';

export function fixUser(body) {
  return {
    type: FIX_USER,
    body,
  };
}

export function fixUserSuccess(data) {
  return {
    type: FIX_USER_SUCCESS,
    data,
  };
}
export function fixUserError(error) {
  return {
    type: FIX_USER_ERROR,
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
