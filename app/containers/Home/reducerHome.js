import produce from 'immer';
import { GET_LIST, GET_LIST_SUCCESS } from './constantsHome';

export const initialState = {
  isLoading: false,
  listUser: {},
};

const getListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_LIST:
        draft.isLoading = true;
        break;
      case GET_LIST_SUCCESS:
        draft.isLoading = false;
        draft.infoUser = action.data;
        break;
    }
  });

export default getListReducer;
