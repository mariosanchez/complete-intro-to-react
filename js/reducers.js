import { SET_SEARCH_TERM } from './actions';

const DEFAULT_STATE = {
  searchTerm: '',
};

// Flow Standard Actions
/*
{
    type: string,
    payload: ,
    //error: ,
    //metadata: ,
}
*/

const setsSearchTerm = (state, action) =>
  // It returns a new object copying the properties
  Object.assign({}, state, { searchTerm: action.payload });

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setsSearchTerm(state, action);
    default:
      return state;
  }
};

export default rootReducer;
