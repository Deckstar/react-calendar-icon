import React from 'react';
import CalendarIcon from './CalendarIcon';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = renderer.create(<CalendarIcon date={new Date()} />).toJSON();
  expect(div).toMatchSnapshot();
});
