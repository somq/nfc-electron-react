// @flow
import { GET_TEXT } from '../actions/nfc';

export type nfcStateType = {
  +nfc: number
};

type actionType = {
  +type: string
};

export default function nfc(state: string = 'niktomr', action: actionType) {
  switch (action.type) {
    case GET_TEXT:
      return "asdasdadadmkanamdnamnada";
    default:
      return state;
  }
}
