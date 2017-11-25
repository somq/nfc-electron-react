// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import nfc from './nfc';

const rootReducer = combineReducers({
  counter,
  nfc,
  router,
});

export default rootReducer;
