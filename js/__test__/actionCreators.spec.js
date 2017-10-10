// @flow
import moxios from 'moxios';
import { setSearchTerm, addAPIData } from '../actionCreators';
import getAPIData from '../asyncActions';

const show = {
  title: 'Silicon Valley',
  year: '2014–',
  description:
    'Follows the struggle of Richard Hendricks, a silicon valley engineer trying to build his own company called Pied Piper.',
  poster: 'sv.jpg',
  imdbID: 'tt2575988',
  trailer: '69V__a49xtw',
};

test('setSearchTerm', () => {
  expect(setSearchTerm('New York')).toMatchSnapshot();
  // This is the same as we do this
  // expect(setSearchTerm('New York')).toEqual({type: 'SET_SEARCH_TERM', payload: 'New York'});
  // Beacaus snapshots are json structures as well
});

test('addAPIData', () => {
  expect(addAPIData(show)).toMatchSnapshot();
});

test('getAPIData', (done: Function) => {
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    getAPIData(show.imdbID)(dispatchMock);
  });
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request
      .respondWith({
        status: 200,
        response: show,
      })
      .then(() => {
        expect(request.url).toEqual(`http://localhost:3000/${show.imdbID}`);
        expect(dispatchMock).toBeCalledWith(addAPIData(show));
        done();
      });
  });
});
