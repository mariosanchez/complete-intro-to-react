import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('Should render a correct amount of shows', () => {
  const component = shallow(<Search />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length); // We can use React components in find()!!
});

test('Should render a correct amount of shows based on term', () => {
  const searchWord = 'black';
  const component = shallow(React.createElement(Search, { shows: preload.shows }));
  component
    .find('input') // We can also use any 'CSS' selectors
    .simulate('change', { target: { value: searchWord } }); // this last object simulates the event object

  // TODO Separate this filter action in a module an use it in Search.jsx as well, this is a workarround for learn tests
  const showCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0,
  ).length;

  expect(component.find(ShowCard).length).toEqual(showCount);
});
