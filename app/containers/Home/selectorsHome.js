import { createSelector } from 'reselect';
// eslint-disable-next-line import/named
import { REDUX_KEY } from './constantsHome';
import { initialState } from './reducerHome';

export const selectGetList = state => state[REDUX_KEY.login] || initialState;

export const selectLoading = () =>
  createSelector(
    selectGetList,
    state => state.isLoading,
  );

export const selectListUser = () =>
  createSelector(
    selectGetList,
    state => state.listUser,
  );
