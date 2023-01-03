/**
 * ...
 */

// eslint-disable-next-line import/named
import { LOGIN, LOGIN_ERROR } from './constantsLogin';

export function login(body, callback) {
  return {
    type: LOGIN,
    body,
    callback,
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
