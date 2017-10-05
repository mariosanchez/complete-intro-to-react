// @flow

import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

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
};

const apiData = (state = {}, action: Action) => {
  if (action.type === ADD_API_DATA) {
    //                                 New ES6 to name dynamic object keys
    return Object.assign({}, state, { [action.payload.imdbID]: action.payload });
  }

  return state;
};

const rootReducer = combineReducers({ searchTerm, apiData });

export default rootReducer;
