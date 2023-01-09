/**
 * ...
 */

import produce from 'immer';
import { LOGIN } from './constantsLogin';

export const initialState = {
  isLoading: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN:
        draft.isLoading = true;
        break;
    }
  });

export default loginReducer;
