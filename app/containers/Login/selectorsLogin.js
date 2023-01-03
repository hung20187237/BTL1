/**
 * ...
 */

import { createSelector } from 'reselect';
// eslint-disable-next-line import/named
import { REDUX_KEY } from './constantsLogin';
import { initialState } from './reducerLogin';

export const selectLogin = state => state[REDUX_KEY.login] || initialState;

export const selectLoading = () =>
  createSelector(
    selectLogin,
    state => state.isLoading,
  );

export const selectInfoUser = () =>
  createSelector(
    selectLogin,
    state => state.infoUser,
  );
