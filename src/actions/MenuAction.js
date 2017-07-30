import { MENU_PRESSED } from './types';

export const menuPressed = (value) => {
  return {
    type: MENU_PRESSED,
    payload: value,
  };
};
