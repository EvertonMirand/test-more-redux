import { SAVE_LIST, REMOVE_LIST } from './types';

export function saveList(name, algo, telefone) {
  return {
    type: SAVE_LIST,
    payload: {
      name,
      algo,
      telefone,
    },
  };
}

export function removeList(index) {
  return {
    type: REMOVE_LIST,
    payload: {
      index,
    },
  };
}
