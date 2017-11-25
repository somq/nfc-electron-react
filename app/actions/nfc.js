// @flow
import type { nfcStateType } from '../reducers/nfc';

type actionType = {
  +type: string
};

export const GET_TEXT = 'GET_TEXT';

export function getText() {
  return {
    type: GET_TEXT
  };
}
