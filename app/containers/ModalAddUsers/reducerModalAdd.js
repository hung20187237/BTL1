import produce from 'immer';
import {
  GET_ROLE,
  GET_ROLE_SUCCESS,
  POST_USER,
  POST_USER_SUCCESS,
} from './constantsModalAdd';

export const initialState = {
  isLoading: false,
  userAdd: {},
  roleList: [],
};
/* eslint-disable default-case, no-param-reassign */
const postUserReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case POST_USER:
        draft.isLoading = true;
        break;
      case POST_USER_SUCCESS:
        draft.isLoading = false;
        draft.userAdd = action.data;
        break;
      case GET_ROLE:
        draft.isLoading = true;
        break;
      case GET_ROLE_SUCCESS:
        draft.isLoading = false;
        draft.roleList = action.data.RoleGroups;
        break;
    }
  });

export default postUserReducer;
