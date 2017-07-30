import { MENU_PRESSED } from '../actions/types';

const INIT_STATE = { menuWasPressed: false };

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case MENU_PRESSED:
      return { ...state, menuWasPressed: action.payload };
    default:
      return state;
  }
}
