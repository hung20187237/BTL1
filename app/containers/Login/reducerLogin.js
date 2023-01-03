/**
 * ...
 */

import produce from 'immer';
// eslint-disable-next-line import/named
import { LOGIN } from './constantsLogin';

export const initialState = {
  isLoading: false,
  infoUser: {},
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
