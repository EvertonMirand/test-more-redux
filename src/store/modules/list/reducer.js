import produce from 'immer';
import { SAVE_LIST, REMOVE_LIST } from './types';

const INITIAL_STATE = {
  list: [],
};

export default function list(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case SAVE_LIST:
        draft.list.push({ ...action.payload });
        break;
      case REMOVE_LIST:
        draft.list = draft.list.filter(
          (_, index) => index !== action.payload.index
        );
        break;
      default:
    }
  });
}
