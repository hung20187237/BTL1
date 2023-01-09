import produce from 'immer';
import {
  FIX_USER,
  FIX_USER_SUCCESS,
  GET_ROLE,
  GET_ROLE_SUCCESS,
} from './constantsModalFix';

export const initialState = {
  isLoading: false,
  userFix: {},
  roleList: [],
};

/* eslint-disable default-case, no-param-reassign */
const fixUserReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FIX_USER:
        draft.isLoading = true;
        break;
      case FIX_USER_SUCCESS:
        draft.isLoading = false;
        draft.userFix = action.data;
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

export default fixUserReducer;
