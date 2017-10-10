// @flow

import axios from 'axios';
import { addAPIData } from './actionCreators';

// This is a redux-thunk way, witch is simpler. But we can use redux-promise, redux-observables, redux-sagas...
// We moved this function in another file for performance concerns, reducing the size of other bundles by not
// making them dependent of axios library
export default function getAPIData(imdbID: string) {
  return (dispatch: Function) => {
    axios
      .get(`http://localhost:3000/${imdbID}`)
      .then(response => {
        dispatch(addAPIData(response.data));
      })
      .catch(error => {
        console.error('axios error', error); // eslint-disable-line no-console
      });
  };
}
