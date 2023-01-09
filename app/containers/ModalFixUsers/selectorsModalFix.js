import { createSelector } from 'reselect';
import { REDUX_KEY } from '../../utils/constants';
import { initialState } from './reducerModalFix';

export const selectFixUser = state => state[REDUX_KEY.fix] || initialState;
export const selectLoading = () =>
  createSelector(
    selectFixUser,
    state => state.isLoading,
  );
export const selectFix = () =>
  createSelector(
    selectFixUser,
    state => state.userFix,
  );
export const selectGetRole = () =>
  createSelector(
    selectFixUser,
    state => state.roleList,
  );
