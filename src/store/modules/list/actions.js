import { SAVE_LIST } from './types';

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
