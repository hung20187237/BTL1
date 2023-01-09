import { createSelector } from 'reselect';
import { initialState } from './reducerHome';
import { REDUX_KEY } from '../../utils/constants';

export const selectGetList = state => state[REDUX_KEY.home] || initialState;

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
export const selectGetInfo = () =>
  createSelector(
    selectGetList,
    state => state.infoUser,
  );
