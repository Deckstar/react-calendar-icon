import React from 'react';
import HeaderDiv from './HeaderDiv';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = renderer.create(<HeaderDiv />).toJSON();
  expect(div).toMatchSnapshot();
});
