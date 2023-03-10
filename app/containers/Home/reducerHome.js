import produce from 'immer';
import {
  GET_LIST,
  GET_LIST_SUCCESS,
  GET_INFOR,
  GET_INFOR_SUCCESS,
} from './constantsHome';

export const initialState = {
  isLoading: false,
  infoUser: {},
  listUser: {},
};

/* eslint-disable default-case, no-param-reassign */
const getListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_LIST:
        draft.isLoading = true;
        break;
      case GET_LIST_SUCCESS:
        draft.isLoading = false;
        draft.listUser = action.data.Users;
        break;
      case GET_INFOR:
        draft.isLoading = true;
        break;
      case GET_INFOR_SUCCESS:
        draft.isLoading = false;
        draft.infoUser = action.data;
        break;
    }
  });

export default getListReducer;
