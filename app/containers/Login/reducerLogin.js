/**
 * ...
 */

import produce from 'immer';
import { RESET_REDUX } from './constantsLogin';

export const initialState = {
  isLoading: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RESET_REDUX:
        draft.isLoading = false;
        break;
    }
  });

export default loginReducer;
