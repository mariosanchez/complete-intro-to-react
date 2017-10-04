// @flow

import { combineReducers } from 'redux';
import { SET_SEARCH_TERM } from './actions';

// Flow Standard Actions
/*
{
    type: string,
    payload: ,
    //error: ,
    //metadata: ,
}
*/

const searchTerm = (state = '', action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }

  return state;
}

const rootReducer = combineReducers({ searchTerm });

export default rootReducer;
