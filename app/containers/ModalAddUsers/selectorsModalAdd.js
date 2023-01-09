import { createSelector } from 'reselect';
import { initialState } from './reducerModalAdd';
import { REDUX_KEY } from '../../utils/constants';

export const selectPostUser = state => state[REDUX_KEY.add] || initialState;

export const selectLoading = () =>
  createSelector(
    selectPostUser,
    state => state.isLoading,
  );

export const selectAddUser = () =>
  createSelector(
    selectPostUser,
    state => state.userAdd,
  );
export const selectGetRole = () =>
  createSelector(
    selectPostUser,
    state => state.roleList,
  );
